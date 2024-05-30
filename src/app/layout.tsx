'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../../public/css/style.css'
import '../../public/css/responsive.css'
import '../../public/css/bootstrap.min.css'
// import '../../public/css/custom.css'
import '../../public/css/new.css'
import { useEffect } from 'react'



import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '../../store/providers'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  useEffect(() => {
    if(typeof window !== "undefined"){
     require('../../public/js/bootstrap.bundle.min.js')
    }
 }, []);
  return (
    <html lang="en">
     <head>
     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet"></link>
     </head>
      <body className={inter.className}>
      <Providers>
      <Header/>
        {children}
      <Footer/>
      </Providers>
      </body>
      
    </html>
  )
}
