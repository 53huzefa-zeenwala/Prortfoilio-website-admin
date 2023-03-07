import Image from 'next/image'
import React from 'react'
import Header from '../base/Header'
import SearchBar from '../base/SearchBar'

function Comments() {
    const comments = [
        {
            name: "chaman",
            email: "chaman@gmail.com",
            comment: "Comment On this project",
            project: {
                name: "Blog with nextjs",
                image: "/sociallink.jpg"
            },
            dateTime: "12:14 03-07-2023"
        },
        {
            name: "Huzefa Zeenwala",
            email: "huzefa.zeenwala@gmail.com",
            comment: "Comment On this project I would like to share with you another shot from the BoxedCMS project we recently published.",
            project: {
                name: "Blog with nextjs",
                image: "/servicespage.png"
            },
            dateTime: "12:14 03-07-2023"
        },
    ]
    return (
        <main className='px-4 py-6 flex'>
            <div className="w-full">
                <Header heading="Comments" detail="Comments on projects" image="/comments.png" />
                <SearchBar />
                <section id="commentTable" className='w-full overflow-x-auto pt-6'>
                    <ul>
                        <li className='border-b border-gray-600 py-2 flex gap-2 min-w-fit w-full'>
                            <span className='min-w-[14rem] w-[22.5%]'>User</span>
                            <span className='min-w-[15rem] w-[30%]'>Project</span>
                            <span className='min-w-[21rem] w-[40%]'>Comment</span>
                            <span className='min-w-[3.5rem] w-[7.5%]'>Action</span>
                        </li>
                        {comments && comments.map((comment, i) => (
                            <li key={i} className='border-b border-gray-600 py-3 flex gap-2 bg-gray-700/25 min-w-fit w-full text-sm sm:text-base'>
                                <div className='min-w-[14rem] w-[22.5%] px-1.5 flex flex-col'>
                                    <span className='font-medium capitalize'>{comment.name}</span>
                                    <span className='text-sm sm:text-xs w-full text-gray-300 break-words'>{comment.email}</span>
                                </div>
                                <div className='min-w-[15rem] w-[30%] px-1.5 flex gap-2'>
                                    <span className="relative h-20 min-w-[5rem] inline-block shadow-lg shadow-slate-900/50">
                                        <Image src={comment.project.image} alt={comment.project.name} fill="object-fit" />
                                    </span>
                                    <span className='font-medium font-workSans inline-block'>{comment.project.name}</span>
                                </div>
                                <div className='min-w-[21rem] w-[40%] px-1.5 flex flex-col justify-between'>
                                    {comment.comment}
                                    <span className="text-gray-400 sm:text-sm text-xs">{comment.dateTime}</span>
                                </div>
                                <span className='min-w-[3.5rem] w-[7.5%] flex items-center'>
                                    <svg className='pl-4 h-7 hover:fill-gray-400 fill-gray-300 transition-colors cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.30958 3.54424C7.06741 2.56989 8.23263 2 9.46699 2H20.9997C21.8359 2 22.6103 2.37473 23.1614 2.99465C23.709 3.61073 23.9997 4.42358 23.9997 5.25V18.75C23.9997 19.5764 23.709 20.3893 23.1614 21.0054C22.6103 21.6253 21.8359 22 20.9997 22H9.46699C8.23263 22 7.06741 21.4301 6.30958 20.4558L0.687897 13.2279C0.126171 12.5057 0.126169 11.4943 0.687897 10.7721L6.30958 3.54424ZM10.2498 7.04289C10.6403 6.65237 11.2734 6.65237 11.664 7.04289L14.4924 9.87132L17.3208 7.04289C17.7113 6.65237 18.3445 6.65237 18.735 7.04289L19.4421 7.75C19.8327 8.14052 19.8327 8.77369 19.4421 9.16421L16.6137 11.9926L19.4421 14.8211C19.8327 15.2116 19.8327 15.8448 19.4421 16.2353L18.735 16.9424C18.3445 17.3329 17.7113 17.3329 17.3208 16.9424L14.4924 14.114L11.664 16.9424C11.2734 17.3329 10.6403 17.3329 10.2498 16.9424L9.54265 16.2353C9.15212 15.8448 9.15212 15.2116 9.54265 14.8211L12.3711 11.9926L9.54265 9.16421C9.15212 8.77369 9.15212 8.14052 9.54265 7.75L10.2498 7.04289Z" fill="current" />
                                    </svg>
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default Comments