import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-background text-foreground">
        <div className="flex flex-col items-center justify-center px-6 pt-32 pb-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-8xl font-extrabold tracking-tight text-foreground/10 md:text-9xl">
              404
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Page not found
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg text-foreground/50">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Link
              href="/"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-base font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
