import type { Metadata } from "next"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nearcon.app"

export const metadata: Metadata = {
  title: "NearCon 2026",
  description: "An invite-only gathering shaping an AI economy built on trust, transparency, and user ownership.",
  openGraph: {
    title: "NearCon 2026",
    description: "Join founders, researchers, and builders redefining how intelligent systems run - private, open, and on your terms.",
    url: SITE_URL,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Roboto+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-nearcon-cream text-text-primary antialiased">
        {children}
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
