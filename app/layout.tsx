import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css" // Import the global CSS file

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "News Wise",
  description: "AI-Powered News Analysis & Summary Chrome Extension",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
