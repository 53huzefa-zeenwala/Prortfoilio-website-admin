import { useStateContext } from '@/context/Statecontext'
import Image from 'next/image'
import React from 'react'

function Header({ backgroundColor, image, heading, detail, imageBgColor }) {
    const { adminMenu, setAdminMenu } = useStateContext()
    return (
        <header style={{
            background: "rgb(220,220,220)",
            background: "linear-gradient(160deg, rgba(89,89,89,1) 0%, rgba(46,55,69,1) 30%, rgba(0,15,42,1) 100%)"
        }} className='my-2 h-48 md:h-56 rounded-tl-[3rem] flex items-end mb-5'>
            <div className='relative h-16 md:h-20 bg-slate-800 w-full flex items-center justify-between'>
                <span style={{backgroundColor: imageBgColor || "rgb(204, 251, 241)"}} className='md:w-28 w-24 aspect-square absolute -top-[40%] rounded-full overflow-hidden border-[4px] border-slate-800 md:ml-6 ml-2 bg-teal-100 shadow-lg shadow-slate-900/50'>
                    <Image src={image} fill="object-fit" alt='Header Image' />
                </span>
                <div className='md:pl-40 pl-28'>
                    <h1 className='text-2xl md:text-4xl font-medium text-left capitalize'>{heading}</h1>
                    <p className='md:pt-1 text-sm text-gray-300 capitalize'>{detail}</p>
                </div>
                <button onClick={() => setAdminMenu(!adminMenu)} className="flex justify-center gap-2 sm:px-4 sm:py-2 p-1.5  rounded font-medium text-gray-700 bg-teal-100 hover:bg-teal-200 transition-colors shadow-lg shadow-slate-900/50 capitalize ml-8">
                    <span className="h-6 aspect-square">
                        <svg className="ws-icon ws-icon--grid fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1H3zm1 7V4h5v5H4zM14 2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1h-7zm1 7V4h5v5h-5zM13 14a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm2 1v5h5v-5h-5zM3 13a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1H3zm1 7v-5h5v5H4z"></path></svg>
                    </span>
                    <span className='hidden sm:inline'>Settings</span>
                </button>
            </div>
        </header>
    )
}

export default Header