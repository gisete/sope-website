import type { Metadata } from 'next'
import { crimsonPro, nunitoSans } from './fonts'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sópé Forest School',
  description: 'Aprendizagem ao ar livre',
  keywords: [
    'forest school',
    'aprendizagem ao ar livre',
    'educação infantil',
    'natureza',
    'crianças',
    'benedita',
    'caldas da rainha',
    'oeste',
  ],
  authors: [{ name: 'Sópé Forest School' }],
  creator: 'Sópé Forest School',

  // // Open Graph / Facebook
  // openGraph: {
  //   type: 'website',
  //   locale: 'pt_PT',
  //   url: 'https://your-domain.com',
  //   siteName: 'Sópé Forest School',
  //   title: 'Sópé Forest School',
  //   description: 'Aprendizagem ao ar livre que abre as portas da natureza para os mais pequenos',
  //   images: [
  //     {
  //       url: '/og-image.jpg', // You'll need to create this 1200x630px image
  //       width: 1200,
  //       height: 630,
  //       alt: 'Sópé Forest School',
  //     },
  //   ],
  // },

  // Favicon and icons
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },

  // Additional meta tags
  other: {
    'theme-color': '#a15b43',
    'msapplication-TileColor': '#a15b43',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${nunitoSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
