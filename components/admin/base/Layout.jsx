import Navbar from '@/components/Navbar'
import React from 'react'
import SideMenu from './SideMenu'
import { Work_Sans } from 'next/font/google';
import { useStateContext } from '@/context/Statecontext';
import Loader from '@/components/Loader';
import { useRouter } from 'next/router';
import DeleteDocumentModal from './DeleteDocumentModal';

const workSans = Work_Sans({ subsets: ["latin"], weight: ["100", "200", "300", "400", "600", "700", "800", "900"], variable: "--font-workSans", style: ['normal'] });

function Layout({ children }) {
  const { userLoading, userProfileData, currentUser, loading } = useStateContext()
  const { push } = useRouter()
  if (userLoading && currentUser === null) {
    return <Loader bgFull={true} />
  }
  if (!userLoading && currentUser === undefined) {
    push('/admin/login')
    return (
      <div className="bg-blue-200 h-screen w-full fixed top-0 flex justify-center items-center z-50">
        <h1 className="font-cutiveMono text-3xl">
          Sorry You Are Not Logged In
        </h1>
      </div>
    )
  }
  return (
    <div className={`${workSans.variable} font-workSans bg-slate-800 min-h-screen text-slate-100 relative`}>
      {loading && <Loader />}
      <Navbar />
      <SideMenu />
      <DeleteDocumentModal />
      {children}
    </div>
  )
}

export default Layout