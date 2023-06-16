import { Footer, Navbar } from '@/components'
import './globals.css'
import { title } from 'process'


export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world',
  favicon : '/logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
        <meta property="og:title" content="Car Hub" />
        <meta property="og:description" content="Discover the bes car in the world" />
      </head>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
