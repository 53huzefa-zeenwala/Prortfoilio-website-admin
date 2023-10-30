import { Work_Sans } from 'next/font/google';
import React from 'react'
import Navbar from '../Navbar'

const workSans = Work_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"], variable: "--font-workSans", style: ['normal'] });

function Layout({children}) {
  return (
    <div className={`${workSans.variable} font-workSans bg-slate-800 min-h-screen text-slate-100 relative`}>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout