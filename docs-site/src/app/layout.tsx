import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'exploitingis.FUN - Changelog',
  description: 'Complete changelog for exploitingis.FUN',
  keywords: 'roblox, script, exploit, gaming, changelog, help, guides',
  authors: [{ name: 'exploitingis.FUN Team' }],
  themeColor: '#800080',
  icons: {
    icon: '/assets/e.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
} 