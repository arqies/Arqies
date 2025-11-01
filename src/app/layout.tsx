import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arqies',
  description: 'Hi, I am Arqies, a Software/AI Engineer specializing in full-stack development and machine learning. I build scalable applications, focusing on innovative AI solutions and creative web development.',
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
