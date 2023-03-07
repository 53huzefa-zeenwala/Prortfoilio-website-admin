import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from '../base/Header'
import Modal from '../base/Modal'
import PrimaryButton from '../base/PrimaryButton'
import PrimaryInput from '../base/PrimaryInput'

export default function SocialLink() {
    const [isOpen, setIsOpen] = useState(false)
    const [values, setValues] = useState({
        mediaName: "",
        link: "",
        image: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    return (
        <main className='px-4 pt-6'>
            <Header image="/sociallink.jpg" heading="Social Link" detail="Social Media Link So People can see your work." />
            <Modal {...{ isOpen, setIsOpen, size: "md", heading: "Add Media Link" }}>
                <form className="flex flex-col justify-center w-full">
                    <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Media name</label>
                    <PrimaryInput {...{ setValues, values, name: "mediaName", placeholder: "Name", isRequired: false }} />
                    <label htmlFor="mediaName" className='text-lg font-medium text-gray-400'>Link</label>
                    <PrimaryInput {...{ setValues, values, name: "mediaLink", placeholder: "Link", isRequired: false }} />
                    <div className='flex py-2 gap-2'>
                        <input type="file" accept='image/*' className='sr-only' />
                        <span className="relative h-12 bg-blue-200 w-16 rounded overflow-hidden">
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
            <ul className='space-y-4 w-full pt-4'>
                <li className='flex cursor-pointer bg-gray-700 rounded'>
                    <div className='w-full flex'>
                        <span className="relative h-16 aspect-square m-1 bg-gray-900 rounded-lg overflow-hidden">
                            <Image src="/boy-512.webp" alt="Media Link" fill="object-fit" />
                        </span>
                        <div className='flex flex-col justify-center pl-2'>
                            <span className='font-medium'>Instagram Link</span>
                            <Link href="https://www.svgrepo.com/vectors/cross/" className="text-sm text-gray-400 w-[65vw] overflow-hidden">https://www.svgrepo.com/vectors/cross</Link>
                        </div>
                    </div>
                    <button className='sm:pr-6 pr-3'>
                        <svg className='pl-4 h-7 hover:fill-gray-400 fill-gray-300 transition-colors cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z" fill="current" />
                        </svg>
                    </button>
                </li>
            </ul>
        </main>
    )
}