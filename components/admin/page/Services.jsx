import React, { useState } from 'react'
import Header from '../base/Header'
import Textarea from '../base/Textarea'
import Image from 'next/image'
import PrimaryInput from '../base/PrimaryInput'
import Modal from '../base/Modal'
import PrimaryButton from '../base/PrimaryButton'

function Services() {
    const [isOpen, setIsOpen] = useState(false)
    const [values, setValues] = useState({
        serviceName: "",
        doc: "",
        image: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    return (
        <main className='px-4 pt-6 flex'>
            <div className="w-full">
                <Header image="/servicespage.png" heading="Services" detail="Services you provide." />
                <Modal {...{ isOpen, setIsOpen, size: "md", heading: "Add Media Link" }}>
                    <form className="flex flex-col justify-center w-full">
                        <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Service name</label>
                        <PrimaryInput {...{ setValues, values, name: "serviceName", placeholder: "Name", isRequired: false }} />
                        <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Description</label>
                        <Textarea {...{ setValues, values, name: "doc", placeholder: "Description", isRequired: false }} />
                        <div className='flex py-2 gap-2'>
                            <input type="file" accept='image/*' className='sr-only' />
                            <span className="relative h-12 bg-blue-200 w-24 rounded overflow-hidden">
                                <Image src="/boy-512.webp" alt="Social media Icon" fill="object-fit" />
                            </span>
                            <button type='button' className='bg-blue-200 text-gray-700 rounded px-4 w-full font-medium hover:bg-blue-300 shadow-slate-900/50 justify-center py-2 items-center transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed shadow-lg flex gap-2 outline-none' >
                                <svg className='h-7 stroke-current' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Add Image</button>
                        </div>
                        <div className="py-2 flex justify-end gap-4 font-medium">
                            <button type='button' className='text-gray-300 hover:text-gray-200' onClick={() => setIsOpen(false)}>Close</button>
                            <PrimaryButton {...{ isLoading, setIsSuccess, isSuccess, text: "Add Media" }} />
                        </div>
                    </form>
                </Modal>
                <ul className='w-full pt-4 flex flex-wrap gap-8 justify-center md:justify-start md:px-8'>
                    <li className='flex cursor-pointer flex-col bg-gray-700 rounded-xl overflow-hidden items-end pb-2 max-w-[16rem]'>
                        <div className='w-full flex flex-col'>
                            <span className="relative w-full bg-gray-900 aspect-square">
                                <Image src="/sociallink.jpg" alt="Media Link" fill="object-fit" />
                            </span>
                            <div className='flex flex-col justify-center px-4 pt-2'>
                                <span className='font-medium text-lg'>Web Development</span>
                                <p className='text-sm text-gray-300 font-workSans'>We develop small eCommerce, portfolios, blogs, etc types of websites for clients.</p>
                            </div>
                        </div>
                        <button className='font-medium text-red-500 px-4'>
                            Delete
                        </button>
                    </li>
                    <li className='flex cursor-pointer flex-col bg-gray-700 rounded-xl overflow-hidden items-end pb-2 max-w-[16rem]'>
                        <div className='w-full flex flex-col'>
                            <span className="relative w-full bg-gray-900 aspect-square">
                                <Image src="/sociallink.jpg" alt="Media Link" fill="object-fit" />
                            </span>
                            <div className='flex flex-col justify-center px-4 pt-2'>
                                <span className='font-medium text-lg'>Web Development</span>
                                <p className='text-sm text-gray-300 font-workSans'>We develop small eCommerce, portfolios, blogs, etc types of websites for clients.</p>
                            </div>
                        </div>
                        <button className='font-medium text-red-500 px-4'>
                            Delete
                        </button>
                    </li>
                
                </ul>
                <button onClick={() => setIsOpen(true)}>Open</button>
            </div>
        </main>
    )
}

export default Services