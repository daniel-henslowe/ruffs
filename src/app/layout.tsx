import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ruffs | Premium Dog Boarding & Daycare',
  description: 'Give your furry friend the vacation they deserve. Premium dog boarding, daycare, and grooming services with 24/7 care and love.',
  keywords: ['dog boarding', 'pet daycare', 'dog grooming', 'pet hotel', 'dog sitting'],
  openGraph: {
    title: 'Ruffs | Premium Dog Boarding & Daycare',
    description: 'Give your furry friend the vacation they deserve.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-orange-50 text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}
