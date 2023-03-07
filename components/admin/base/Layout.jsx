import Navbar from '@/components/Navbar'
import React from 'react'
import SideMenu from './SideMenu'
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"], variable: "--font-workSans", style: ['normal'] });

function Layout({ children }) {
  return (
    <div className={`${workSans.variable} font-workSans bg-slate-800 min-h-screen text-slate-100 relative`}>
      <Navbar />
      <SideMenu />
      {children}
    </div>
  )
}

export default Layout