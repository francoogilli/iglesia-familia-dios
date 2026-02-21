"use client"

import { useState } from "react"
import Image from "next/image"
import { podcastInfo } from "@/lib/podcast-data"

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function ApplePodcastsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.080 1.132 1.756 2.425 2.012 3.842.064.355-.172.694-.527.758-.355.064-.694-.172-.758-.528-.210-1.161-.766-2.222-1.653-3.15-1.327-1.392-3.07-2.133-5.04-2.133-1.978 0-3.722.74-5.047 2.133-.891.93-1.447 1.993-1.656 3.157-.064.355-.401.591-.758.527-.354-.064-.59-.403-.526-.758.254-1.420.932-2.716 2.015-3.850C7.55 3.47 9.663 2.568 12 2.568h-.135zm.135 3.252c1.725 0 3.282.664 4.47 1.889.788.813 1.293 1.782 1.503 2.881.048.355-.195.686-.55.742-.355.056-.686-.195-.742-.55-.164-.864-.562-1.629-1.185-2.272-.966-.998-2.231-1.533-3.632-1.533-1.4 0-2.666.535-3.632 1.533-.623.643-1.02 1.408-1.185 2.278-.056.354-.387.598-.742.55-.355-.056-.598-.394-.55-.742.21-1.106.715-2.075 1.503-2.888C9.06 6.484 10.617 5.82 12.342 5.82H12zm-.135 3.402c1.152 0 2.184.456 2.975 1.272.526.544.862 1.188 1.002 1.92.047.354-.2.686-.556.734-.354.047-.685-.2-.733-.556-.094-.494-.32-.94-.672-1.303-.552-.569-1.26-.87-2.052-.87-.792 0-1.5.301-2.052.87-.352.363-.578.809-.672 1.303-.048.356-.38.603-.733.556-.356-.048-.604-.38-.556-.734.14-.732.476-1.376 1.002-1.92.79-.816 1.823-1.272 2.975-1.272h.02zm-.02 3.108c.955 0 1.728.773 1.728 1.728 0 .603-.309 1.134-.777 1.44l.496 3.835c.064.497-.3.948-.8.948h-1.293c-.5 0-.864-.451-.8-.948l.496-3.835c-.468-.306-.777-.837-.777-1.44 0-.955.773-1.728 1.728-1.728z" />
    </svg>
  )
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 12.22 19.79 19.79 0 0 1 1.64 3.6 2 2 0 0 1 3.62 1.44h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.54-1.54a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export function PodcastSidebar() {
  const [showFullAbout, setShowFullAbout] = useState(false)

  const truncatedAbout = podcastInfo.about.slice(0, 180) + "..."

  return (
    <aside className="w-full lg:w-80 lg:min-w-80 shrink-0">
      <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto p-6 lg:p-8">
        {/* Cover Art */}
        <div className="rounded-lg overflow-hidden shadow-md mb-6">
          <Image
            src="/images/devotional-cover.jpg"
            alt="ICE - Devocionales diarios para tu caminar con Dios"
            width={320}
            height={320}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Title and Description */}
        <h1 className="text-xl font-bold text-foreground mb-2">{podcastInfo.title}</h1>
        <p className="text-foreground/80 leading-relaxed mb-8">
          {podcastInfo.description}
        </p>

        {/* About Section */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
            <span className="flex gap-0.5">
              <span className="w-1 h-3 bg-primary rounded-full" />
              <span className="w-1 h-3 bg-primary/60 rounded-full" />
            </span>
            Acerca de
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {showFullAbout ? podcastInfo.about : truncatedAbout}
          </p>
          <button
            onClick={() => setShowFullAbout(!showFullAbout)}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
          >
            {showFullAbout ? "Ver menos" : "Ver mas"}
          </button>
        </div>

        {/* Church Info Section */}
        <div>
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <span className="flex gap-0.5">
              <span className="w-1 h-3 bg-primary rounded-full" />
              <span className="w-1 h-3 bg-primary/60 rounded-full" />
            </span>
            Nuestra Iglesia
          </h2>

          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPinIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-0.5">Dirección</p>
                <p className="text-xs text-foreground/70 leading-snug">
                  Av. Principal 1234
                  Ciudad, País
                </p>
              </div>
            </div>

            {/* Service Schedule */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <ClockIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-0.5">Servicios</p>
                <p className="text-xs text-foreground/70 leading-snug">
                  Domingos: 9:00 am y 11:00 am<br />
                  Miércoles: 7:00 pm
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <PhoneIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-0.5">Teléfono</p>
                <a
                  href="tel:+1234567890"
                  className="text-xs text-foreground/70 hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MailIcon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wide mb-0.5">Correo</p>
                <a
                  href="mailto:info@iglesia.com"
                  className="text-xs text-foreground/70 hover:text-primary transition-colors"
                >
                  info@iglesia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}