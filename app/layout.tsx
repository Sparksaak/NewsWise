import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "News Wise - Fake News Detection API",
  description: "AI-powered fake news detection and article authenticity analysis",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
