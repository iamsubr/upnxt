import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "upnXt - Learn Skills That Matter",
  description:
    "Master in-demand skills through interactive courses and supportive community. Join thousands of learners in our Netflix-style course platform with Reddit-like community features.",
  keywords: "online learning, courses, education, programming, web development, data science, community learning",
  authors: [{ name: "upnXt Team" }],
  creator: "upnXt",
  publisher: "upnXt",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upnxt.app",
    title: "upnXt - Learn Skills That Matter",
    description: "Master in-demand skills through interactive courses and supportive community",
    siteName: "upnXt",
  },
  twitter: {
    card: "summary_large_image",
    title: "upnXt - Learn Skills That Matter",
    description: "Master in-demand skills through interactive courses and supportive community",
    creator: "@upnxt",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="upnXt" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            storageKey="upnxt-theme"
          >
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 px-4 py-2 rounded-md transition-all font-medium shadow-lg"
              style={{
                backgroundColor: "#1e40af",
                color: "#ffffff",
                border: "2px solid #ffffff",
                zIndex: 9999,
              }}
            >
              Skip to main content
            </a>
            <div id="main-content">{children}</div>
          </ThemeProvider>
        </Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
`,
          }}
        />
      </body>
    </html>
  )
}
