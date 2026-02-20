"use client"

import { useAudioPlayer } from "@/lib/use-audio-player"
import { PodcastSidebar } from "@/components/podcast-sidebar"
import { EpisodeList } from "@/components/episode-list"
import { AudioPlayer } from "@/components/audio-player"
import { Waveform } from "@/components/waveform"

export function PodcastPage() {
  const player = useAudioPlayer()

  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-background">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <PodcastSidebar />

        {/* Divider */}
        <div className="hidden lg:block w-px bg-border" />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Waveform Header */}
          <Waveform />

          {/* Episodes */}
          <EpisodeList
            currentEpisode={player.currentEpisode}
            isPlaying={player.isPlaying}
            onPlay={player.play}
            onPause={player.pause}
          />
        </main>
      </div>

      {/* Bottom Audio Player */}
      <AudioPlayer
        currentEpisode={player.currentEpisode}
        isPlaying={player.isPlaying}
        currentTime={player.currentTime}
        duration={player.duration}
        volume={player.volume}
        isMuted={player.isMuted}
        onTogglePlay={player.togglePlay}
        onSeek={player.seek}
        onSkipForward={player.skipForward}
        onSkipBackward={player.skipBackward}
        onVolumeChange={player.setVolume}
        onToggleMute={player.toggleMute}
      />

      {/* Spacer for bottom player */}
      {player.currentEpisode && <div className="h-20" />}
    </div>
  )
}
