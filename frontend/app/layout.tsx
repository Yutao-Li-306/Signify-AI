import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Signify AI - Social Media Stock Market Predictor',
  description: 'Harnessing the collective wisdom of independent financial analysts',
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

