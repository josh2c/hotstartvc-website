"use client";

import Image from "next/image";
import { teamMembers } from "@/lib/team-data";

export default function TeamList() {
  return (
    <section className="w-full px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {teamMembers.map((member, i) => (
          <div key={i}>
            {/* Member Row */}
            <div className="flex items-start gap-8 py-8 md:py-10">
              {/* Photo */}
              {member.image ? (
                <div className="relative hidden h-28 w-28 flex-shrink-0 overflow-hidden rounded-sm md:block lg:h-36 lg:w-36">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 144px, 112px"
                  />
                </div>
              ) : (
                <div className="hidden h-28 w-28 flex-shrink-0 items-center justify-center rounded-sm bg-foreground/5 md:flex lg:h-36 lg:w-36">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground/20"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}

              {/* Info */}
              <div className="flex-1">
                {/* Meta row: Role + Location */}
                <div className="flex flex-wrap items-baseline gap-x-12 gap-y-1">
                  <span className="text-sm font-normal tracking-wide text-foreground/50 md:text-base">
                    {member.role}
                  </span>
                  {member.location && (
                    <span className="text-sm font-normal tracking-wide text-foreground/35 md:text-base">
                      {member.location}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h2 className="mt-1 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  {member.name}
                </h2>

                {/* Bio */}
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/50 md:text-base">
                  {member.bio}
                </p>

                {/* Social Links */}
                {(member.linkedin || member.twitter || member.instagram) && (
                  <div className="mt-4 flex items-center gap-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/30 transition-colors hover:text-foreground"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/30 transition-colors hover:text-foreground"
                        aria-label={`${member.name} on X`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/30 transition-colors hover:text-foreground"
                        aria-label={`${member.name} on Instagram`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {i < teamMembers.length - 1 && (
              <div className="h-px w-full bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
