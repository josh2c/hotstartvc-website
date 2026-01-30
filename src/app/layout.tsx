import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/ui/PageLoader";

const inter = Inter({
  variable: "--font-inter",
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
