"use client"

import { Play, Pause, Volume2, VolumeX, RotateCcw, RotateCw, ListMusic } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import type { Episode } from "@/lib/podcast-data"

interface AudioPlayerProps {
  currentEpisode: Episode | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
  isMuted: boolean
  onTogglePlay: () => void
  onSeek: (time: number) => void
  onSkipForward: () => void
  onSkipBackward: () => void
  onVolumeChange: (volume: number) => void
  onToggleMute: () => void
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

export function AudioPlayer({
  currentEpisode,
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  onTogglePlay,
  onSeek,
  onSkipForward,
  onSkipBackward,
  onVolumeChange,
  onToggleMute,
}: AudioPlayerProps) {
  if (!currentEpisode) return null

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      {/* Progress bar thin line at top */}
      <div className="h-0.5 bg-muted w-full">
        <div
          className="h-full bg-primary transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center gap-4 px-4 py-3 max-w-screen-2xl mx-auto">
        {/* Play/Pause Button */}
        <button
          onClick={onTogglePlay}
          className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors flex-shrink-0"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Episode Info */}
        <div className="min-w-0 flex-shrink-0 w-48">
          <p className="text-sm font-semibold text-foreground truncate">
            {currentEpisode.title}
          </p>
          {currentEpisode.bibleVerse && (
            <p className="text-xs text-primary/70 truncate">
              {currentEpisode.bibleVerse}
            </p>
          )}
        </div>

        {/* Skip controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={onSkipBackward}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Retroceder 10 segundos"
            title="Retroceder 10 segundos"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="sr-only">-10s</span>
          </button>
          <button
            onClick={onSkipForward}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Avanzar 10 segundos"
            title="Avanzar 10 segundos"
          >
            <RotateCw className="w-4 h-4" />
            <span className="sr-only">+10s</span>
          </button>
        </div>

        {/* Seek Slider */}
        <div className="flex-1 min-w-0 flex items-center gap-3">
          <Slider
            value={[currentTime]}
            min={0}
            max={duration || 1}
            step={0.1}
            onValueChange={([val]) => onSeek(val)}
            className="flex-1 cursor-pointer"
            aria-label="Buscar"
          />
        </div>

        {/* Time */}
        <div className="flex-shrink-0 text-xs font-mono text-muted-foreground tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Playlist icon */}
        <button
          className="p-1.5 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 hidden md:block"
          aria-label="Lista de devocionales"
        >
          <ListMusic className="w-4 h-4" />
        </button>

        {/* Volume */}
        <div className="flex items-center gap-2 flex-shrink-0 hidden sm:flex">
          <button
            onClick={onToggleMute}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={isMuted ? "Activar sonido" : "Silenciar"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          <Slider
            value={[isMuted ? 0 : volume * 100]}
            min={0}
            max={100}
            step={1}
            onValueChange={([val]) => onVolumeChange(val / 100)}
            className="w-20 cursor-pointer"
            aria-label="Volumen"
          />
        </div>
      </div>
    </div>
  )
}
