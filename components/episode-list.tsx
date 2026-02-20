"use client"

import { useState, useMemo } from "react"
import { Play, Pause, ChevronDown, ChevronRight, Calendar, BookOpen } from "lucide-react"
import { episodes, type Episode } from "@/lib/podcast-data"

interface EpisodeListProps {
  currentEpisode: Episode | null
  isPlaying: boolean
  onPlay: (episode: Episode) => void
  onPause: () => void
}

// ---- Helpers ----

const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

function getDayLabel(date: Date): string {
  const day = date.getDate()
  const weekdays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
  const weekday = weekdays[date.getDay()]
  return `${weekday}, ${day} de ${MONTH_NAMES[date.getMonth()]}`
}

interface DayGroup {
  dayKey: string
  dayLabel: string
  episodes: Episode[]
}

interface MonthGroup {
  monthKey: string
  monthLabel: string
  days: DayGroup[]
  episodeCount: number
}

interface YearGroup {
  year: number
  months: MonthGroup[]
  episodeCount: number
}

function groupEpisodes(eps: Episode[]): YearGroup[] {
  const yearMap = new Map<number, Map<number, Map<number, Episode[]>>>()

  for (const ep of eps) {
    const d = parseDate(ep.date)
    const y = d.getFullYear()
    const m = d.getMonth()
    const day = d.getDate()

    if (!yearMap.has(y)) yearMap.set(y, new Map())
    const monthMap = yearMap.get(y)!
    if (!monthMap.has(m)) monthMap.set(m, new Map())
    const dayMap = monthMap.get(m)!
    if (!dayMap.has(day)) dayMap.set(day, [])
    dayMap.get(day)!.push(ep)
  }

  const years: YearGroup[] = []

  const sortedYears = Array.from(yearMap.keys()).sort((a, b) => b - a)
  for (const y of sortedYears) {
    const monthMap = yearMap.get(y)!
    const months: MonthGroup[] = []
    const sortedMonths = Array.from(monthMap.keys()).sort((a, b) => b - a)
    for (const m of sortedMonths) {
      const dayMap = monthMap.get(m)!
      const days: DayGroup[] = []
      const sortedDays = Array.from(dayMap.keys()).sort((a, b) => b - a)
      for (const day of sortedDays) {
        const dayEps = dayMap.get(day)!
        const sampleDate = parseDate(dayEps[0].date)
        days.push({
          dayKey: `${y}-${m}-${day}`,
          dayLabel: getDayLabel(sampleDate),
          episodes: dayEps.sort((a, b) => b.number - a.number),
        })
      }
      const episodeCount = days.reduce((sum, d) => sum + d.episodes.length, 0)
      months.push({
        monthKey: `${y}-${m}`,
        monthLabel: MONTH_NAMES[m],
        days,
        episodeCount,
      })
    }
    const episodeCount = months.reduce((sum, m) => sum + m.episodeCount, 0)
    years.push({ year: y, months, episodeCount })
  }

  return years
}

// ---- Devotional Card ----

function DevotionalCard({
  episode,
  isCurrentlyPlaying,
  isCurrent,
  onPlay,
  onPause,
}: {
  episode: Episode
  isCurrentlyPlaying: boolean
  isCurrent: boolean
  onPlay: (episode: Episode) => void
  onPause: () => void
}) {
  const [showNotes, setShowNotes] = useState(false)

  const durationMin = Math.floor(episode.duration / 60)

  return (
    <article className="py-5 px-4 rounded-lg hover:bg-muted/40 transition-colors">
      <h4 className="text-base font-bold text-foreground mb-1">
        {episode.title}
      </h4>
      {episode.bibleVerse && (
        <p className="text-xs font-mono text-primary/80 mb-2 flex items-center gap-1.5">
          <BookOpen className="w-3 h-3" />
          {episode.bibleVerse}
        </p>
      )}
      <p className="text-foreground/70 text-sm leading-relaxed mb-3">
        {episode.description}
      </p>
      <div className="flex items-center gap-2 text-sm">
        <button
          onClick={() => {
            if (isCurrent && isCurrentlyPlaying) {
              onPause()
            } else {
              onPlay(episode)
            }
          }}
          className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium"
          aria-label={
            isCurrent && isCurrentlyPlaying
              ? `Pausar devocional: ${episode.title}`
              : `Escuchar devocional: ${episode.title}`
          }
        >
          {isCurrent && isCurrentlyPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
          {isCurrent && isCurrentlyPlaying ? "Pausar" : "Escuchar"}
        </button>
        <span className="text-muted-foreground">/</span>
        <button
          onClick={() => setShowNotes(!showNotes)}
          className="text-primary hover:text-primary/80 transition-colors font-medium"
        >
          {showNotes ? "Ocultar notas" : "Ver notas"}
        </button>
        <span className="text-xs text-muted-foreground ml-auto font-mono">
          {durationMin} min
        </span>
      </div>

      {showNotes && (
        <div className="mt-4 pl-4 border-l-2 border-primary/20">
          <p className="text-sm text-foreground/60 leading-relaxed">
            {episode.showNotes}
          </p>
        </div>
      )}
    </article>
  )
}

// ---- Collapsible sections ----

function DaySection({
  day,
  currentEpisode,
  isPlaying,
  onPlay,
  onPause,
}: {
  day: DayGroup
  currentEpisode: Episode | null
  isPlaying: boolean
  onPlay: (episode: Episode) => void
  onPause: () => void
}) {
  return (
    <div className="ml-4 lg:ml-6">
      <div className="flex items-center gap-2 py-2 px-2">
        <Calendar className="w-3.5 h-3.5 text-primary/60 flex-shrink-0" />
        <span className="text-xs font-mono text-muted-foreground tracking-wide">
          {day.dayLabel}
        </span>
      </div>
      <div className="ml-2 border-l border-border/60 pl-3">
        {day.episodes.map((episode) => (
          <DevotionalCard
            key={episode.id}
            episode={episode}
            isCurrentlyPlaying={isPlaying}
            isCurrent={currentEpisode?.id === episode.id}
            onPlay={onPlay}
            onPause={onPause}
          />
        ))}
      </div>
    </div>
  )
}

function MonthSection({
  month,
  defaultOpen,
  currentEpisode,
  isPlaying,
  onPlay,
  onPause,
}: {
  month: MonthGroup
  defaultOpen: boolean
  currentEpisode: Episode | null
  isPlaying: boolean
  onPlay: (episode: Episode) => void
  onPause: () => void
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="ml-3 lg:ml-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-2.5 px-3 w-full text-left hover:bg-muted/50 rounded-md transition-colors group"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
        )}
        <span className="text-sm font-semibold text-foreground">
          {month.monthLabel}
        </span>
        <span className="text-xs text-muted-foreground font-mono ml-auto">
          {month.episodeCount} {month.episodeCount === 1 ? "devocional" : "devocionales"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-2">
          {month.days.map((day) => (
            <DaySection
              key={day.dayKey}
              day={day}
              currentEpisode={currentEpisode}
              isPlaying={isPlaying}
              onPlay={onPlay}
              onPause={onPause}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function YearSection({
  yearGroup,
  defaultOpen,
  currentEpisode,
  isPlaying,
  onPlay,
  onPause,
}: {
  yearGroup: YearGroup
  defaultOpen: boolean
  currentEpisode: Episode | null
  isPlaying: boolean
  onPlay: (episode: Episode) => void
  onPause: () => void
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 py-4 px-4 w-full text-left hover:bg-muted/30 transition-colors group"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
        ) : (
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
        )}
        <span className="text-xl font-bold text-foreground">
          {yearGroup.year}
        </span>
        <span className="text-xs text-muted-foreground font-mono ml-auto">
          {yearGroup.episodeCount} {yearGroup.episodeCount === 1 ? "devocional" : "devocionales"}
        </span>
      </button>

      {isOpen && (
        <div className="pb-4">
          {yearGroup.months.map((month, i) => (
            <MonthSection
              key={month.monthKey}
              month={month}
              defaultOpen={i === 0}
              currentEpisode={currentEpisode}
              isPlaying={isPlaying}
              onPlay={onPlay}
              onPause={onPause}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ---- Main Component ----

export function EpisodeList({
  currentEpisode,
  isPlaying,
  onPlay,
  onPause,
}: EpisodeListProps) {
  const grouped = useMemo(() => groupEpisodes(episodes), [])

  return (
    <section className="flex-1 min-w-0">
      <div className="px-6 lg:px-12 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-1">Devocionales</h2>
        <p className="text-sm text-muted-foreground mb-6">
          {episodes.length} devocionales en {grouped.length} {grouped.length === 1 ? "año" : "años"}. Navega por año, mes y dia.
        </p>
        <div className="border-t border-border">
          {grouped.map((yearGroup, i) => (
            <YearSection
              key={yearGroup.year}
              yearGroup={yearGroup}
              defaultOpen={i === 0}
              currentEpisode={currentEpisode}
              isPlaying={isPlaying}
              onPlay={onPlay}
              onPause={onPause}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
