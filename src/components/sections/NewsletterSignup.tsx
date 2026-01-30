"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-muted px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/50 md:text-lg">
          Get insights on celebrity-founded brands, investment trends, and
          HotStart news delivered to your inbox.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-2xl border border-accent-green/30 bg-accent-green/10 px-6 py-4">
            <p className="text-sm font-medium text-foreground/70">
              Thanks for subscribing! We&apos;ll be in touch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-border bg-background px-5 py-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors placeholder:text-foreground/30 focus:border-foreground/30 sm:max-w-xs"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
