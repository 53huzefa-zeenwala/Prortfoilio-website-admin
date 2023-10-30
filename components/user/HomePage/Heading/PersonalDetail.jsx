import React from 'react'
import Image from 'next/image'
import { JackInTheBox } from 'react-awesome-reveal'
import Link from 'next/link'
export default function PersonalDetail({ email, phoneNumber, location }) {
    return (
        <div className='text-white lg:px-12 md:px-8 px-4 md:flex justify-between items-center space-y-4 md:space-y-0 md:space-x-4 py-4'>
            <JackInTheBox className='w-full' cascade>
                <Link className='py-2 px-4 relative md:w-full rounded-lg detailLink cursor-pointer bg-[#7f7f7f] block' target="_blank" rel="noreferrer" href={`mailto:${email}`}>
                    <div className="text-lg md:text-2xl flex gap-2 font-bold ">
                        Email
                        <div className='h-8 w-8 relative hidden md:block lg:hidden'>
                            <Image src="/anime/1141-email-outline.gif" fill alt="email animation"/>
                        </div>
                    </div>
                    <span className="text-lg md:text-xl">{email}</span>
                    <div className='h-16 w-16 absolute right-0 md:hidden top-0 lg:block'>
                        <Image src="/anime/1141-email-outline.gif" fill className='' alt="email animation" />
                    </div>
                </Link>
            </JackInTheBox>

            <JackInTheBox className='w-full' cascade>
                <Link className='py-2 px-4 relative md:w-full rounded-lg cursor-pointer bg-[#7f7f7f] block detailLink' href={`tel:+91${phoneNumber}`} target="_blank" rel="noreferrer">
                    <h1 className="text-lg md:text-2xl flex gap-2 font-bold">
                        Phone
                        <div className='h-8 w-8 relative hidden md:block lg:hidden'>
                            <Image src="/anime/1676-telephone-call-hand-outline.gif" fill className='' alt="phone animation" />
                        </div>
                    </h1>
                    <span className="text-lg md:text-xl">+91{phoneNumber}</span>
                    <div className='h-16 w-16 absolute right-0 md:hidden top-0 lg:block'>
                        <Image src="/anime/1676-telephone-call-hand-outline.gif" fill className='' alt="phone animation" />
                    </div>
                </Link>
            </JackInTheBox>

            <JackInTheBox className='w-full' cascade>
                <div className='py-2 px-4 relative md:w-full rounded-lg detailLink bg-[#7f7f7f]'>
                    <h1 className="text-lg md:text-2xl flex gap-2 font-bold">
                        Location
                        <div className='h-8 w-8 relative hidden md:block lg:hidden'>
                            <Image src="/anime/18-location-pin-outline.gif" fill className='' alt="location animation" />
                        </div>
                    </h1>
                    <h1 className="text-lg md:text-xl">{location}</h1>
                    <div className='h-16 w-16 absolute right-0 md:hidden top-0 lg:block'>
                        <Image src="/anime/18-location-pin-outline.gif" fill className='' alt="location animation" />
                    </div>
                </div>
            </JackInTheBox>
        </div>
    )
}
