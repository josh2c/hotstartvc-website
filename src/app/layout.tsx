import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/ui/PageLoader";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HotStart VC | Fund Fast. Scale Smart. Win Big.",
  description:
    "HotStart VC backs bold founders building the future. Early-stage venture capital for startups ready to scale.",
  openGraph: {
    title: "HotStart VC | Fund Fast. Scale Smart. Win Big.",
    description:
      "HotStart VC backs bold founders building the future. Early-stage venture capital for startups ready to scale.",
    type: "website",
    locale: "en_US",
    siteName: "HotStart VC",
  },
  twitter: {
    card: "summary_large_image",
    title: "HotStart VC | Fund Fast. Scale Smart. Win Big.",
    description:
      "HotStart VC backs bold founders building the future. Early-stage venture capital for startups ready to scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
