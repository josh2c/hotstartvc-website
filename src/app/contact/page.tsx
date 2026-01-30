import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Contact | HotStart VC",
  description:
    "Get in touch with HotStart VC — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        <div className="px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-lg text-lg text-foreground/50">
              Whether you&apos;re a founder, investor, or creative — we&apos;d
              love to connect.
            </p>

            {/* Contact Form */}
            <form className="mt-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/70"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/70"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground/70"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us more..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 focus-visible:ring-offset-2 transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Send Message
              </button>
            </form>

            {/* Direct Contact */}
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="text-lg font-bold tracking-tight">
                Prefer email?
              </h2>
              <a
                href="mailto:hello@hotstartvc.com"
                className="mt-2 block text-foreground/50 transition-colors hover:text-foreground"
              >
                hello@hotstartvc.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
