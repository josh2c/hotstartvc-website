"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-8xl font-extrabold tracking-tight text-foreground/10 md:text-9xl">
          500
        </p>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          Something went wrong
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-foreground/50">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-8 py-3 text-base font-medium text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
