"use client"

import { useState } from "react"
import Image from "next/image"
import { podcastInfo } from "@/lib/podcast-data"

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