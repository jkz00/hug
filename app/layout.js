import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Peac Roma Cruscotto',
  description: 'Cruscotto v0.1.0',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
