import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Signify AI Agency - Transform Your Business with AI',
  description: 'Leading AI agency providing cutting-edge solutions, analytics dashboards, and intelligent systems to drive business growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

