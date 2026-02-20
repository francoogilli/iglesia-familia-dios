"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import type { Episode } from "./podcast-data"

interface AudioPlayerState {
  currentEpisode: Episode | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
}

let globalAudioContext: AudioContext | null = null
let globalOscillator: OscillatorNode | null = null
let globalGainNode: GainNode | null = null

export function useAudioPlayer() {
  const [state, setState] = useState<AudioPlayerState>({
    currentEpisode: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 0.8,
    isMuted: false,
  })

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number>(0)
  const offsetRef = useRef<number>(0)

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const stopSound = useCallback(() => {
    if (globalOscillator) {
      try {
        globalOscillator.stop()
      } catch {
        // already stopped
      }
      globalOscillator = null
    }
  }, [])

  const startSound = useCallback((volume: number, isMuted: boolean) => {
    if (!globalAudioContext) {
      globalAudioContext = new AudioContext()
    }
    stopSound()
    const osc = globalAudioContext.createOscillator()
    const gain = globalAudioContext.createGain()
    osc.type = "sine"
    osc.frequency.value = 220
    gain.gain.value = isMuted ? 0 : volume * 0.05
    osc.connect(gain)
    gain.connect(globalAudioContext.destination)
    osc.start()
    globalOscillator = osc
    globalGainNode = gain
  }, [stopSound])

  const startTimer = useCallback(
    (episodeDuration: number) => {
      stopTimer()
      startTimeRef.current = Date.now()
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startTimeRef.current) / 1000
        const newTime = offsetRef.current + elapsed
        if (newTime >= episodeDuration) {
          stopTimer()
          stopSound()
          setState((prev) => ({
            ...prev,
            isPlaying: false,
            currentTime: episodeDuration,
          }))
        } else {
          setState((prev) => ({
            ...prev,
            currentTime: newTime,
          }))
        }
      }, 100)
    },
    [stopTimer, stopSound]
  )

  const play = useCallback(
    (episode: Episode) => {
      const isSameEpisode = state.currentEpisode?.id === episode.id
      if (isSameEpisode) {
        offsetRef.current = state.currentTime
      } else {
        offsetRef.current = 0
      }
      setState((prev) => ({
        ...prev,
        currentEpisode: episode,
        isPlaying: true,
        duration: episode.duration,
        currentTime: isSameEpisode ? prev.currentTime : 0,
      }))
      startSound(state.volume, state.isMuted)
      startTimer(episode.duration)
    },
    [state.currentEpisode, state.currentTime, state.volume, state.isMuted, startSound, startTimer]
  )

  const pause = useCallback(() => {
    offsetRef.current = state.currentTime
    stopTimer()
    stopSound()
    setState((prev) => ({ ...prev, isPlaying: false }))
  }, [state.currentTime, stopTimer, stopSound])

  const togglePlay = useCallback(() => {
    if (!state.currentEpisode) return
    if (state.isPlaying) {
      pause()
    } else {
      play(state.currentEpisode)
    }
  }, [state.currentEpisode, state.isPlaying, pause, play])

  const seek = useCallback(
    (time: number) => {
      offsetRef.current = time
      setState((prev) => ({ ...prev, currentTime: time }))
      if (state.isPlaying) {
        startTimeRef.current = Date.now()
      }
    },
    [state.isPlaying]
  )

  const skipForward = useCallback(() => {
    const newTime = Math.min(state.currentTime + 10, state.duration)
    seek(newTime)
  }, [state.currentTime, state.duration, seek])

  const skipBackward = useCallback(() => {
    const newTime = Math.max(state.currentTime - 10, 0)
    seek(newTime)
  }, [state.currentTime, seek])

  const setVolume = useCallback((volume: number) => {
    setState((prev) => ({ ...prev, volume, isMuted: false }))
    if (globalGainNode) {
      globalGainNode.gain.value = volume * 0.05
    }
  }, [])

  const toggleMute = useCallback(() => {
    setState((prev) => {
      const newMuted = !prev.isMuted
      if (globalGainNode) {
        globalGainNode.gain.value = newMuted ? 0 : prev.volume * 0.05
      }
      return { ...prev, isMuted: newMuted }
    })
  }, [])

  useEffect(() => {
    return () => {
      stopTimer()
      stopSound()
    }
  }, [stopTimer, stopSound])

  return {
    ...state,
    play,
    pause,
    togglePlay,
    seek,
    skipForward,
    skipBackward,
    setVolume,
    toggleMute,
  }
}
