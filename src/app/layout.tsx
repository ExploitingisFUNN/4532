import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'exploitingis.FUN',
  description: 'Free Roblox scripts that are easy to use and understand',
  keywords: 'roblox, script, exploit, gaming, fun',
  authors: [{ name: 'exploitingis.FUN Team' }],
  themeColor: '#800080',
  icons: {
    icon: '/assets/e.ico',
  },
  openGraph: {
    title: 'exploitingis.FUN',
    description: 'Free Roblox scripts that are easy to use and understand',
    images: [
      {
        url: 'https://media.discordapp.net/attachments/1380843793045131308/1391248696133423104/image.png?ex=686e8091&is=686d2f11&hm=f82be12fef89acb6ad4447b5266f178b980974752ecfaf38505e21d71383085e&=&format=webp&quality=lossless',
        width: 1200,
        height: 630,
        alt: 'exploitingis.FUN Banner',
      },
    ],
    siteName: 'exploitingis.FUN',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'exploitingis.FUN',
    description: 'Free Roblox scripts that are easy to use and understand',
    images: ['https://media.discordapp.net/attachments/1380843793045131308/1391248696133423104/image.png?ex=686e8091&is=686d2f11&hm=f82be12fef89acb6ad4447b5266f178b980974752ecfaf38505e21d71383085e&=&format=webp&quality=lossless'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background-container"></div>
        {children}
      </body>
    </html>
  )
} 