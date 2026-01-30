export default function ContactCTA() {
  return (
    <section className="-mt-48 flex min-h-screen items-center bg-background px-6">
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-foreground/40">
          Let&apos;s connect
        </p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground/50 md:text-lg">
          Have a celebrity-founded brand or an idea worth backing? We&apos;d
          love to hear from you.
        </p>

        <form className="mt-12 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="cta-name"
                className="block text-sm font-medium text-foreground/70"
              >
                Name
              </label>
              <input
                type="text"
                id="cta-name"
                name="name"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
              />
            </div>
            <div>
              <label
                htmlFor="cta-email"
                className="block text-sm font-medium text-foreground/70"
              >
                Email
              </label>
              <input
                type="email"
                id="cta-email"
                name="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cta-subject"
              className="block text-sm font-medium text-foreground/70"
            >
              Subject
            </label>
            <input
              type="text"
              id="cta-subject"
              name="subject"
              placeholder="What's this about?"
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
            />
          </div>

          <div>
            <label
              htmlFor="cta-message"
              className="block text-sm font-medium text-foreground/70"
            >
              Message
            </label>
            <textarea
              id="cta-message"
              name="message"
              rows={6}
              placeholder="Tell us more..."
              className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
