import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bounce } from 'react-awesome-reveal'

export default function MediaLink({ social }) {
    return (
        <div className='flex gap-3 h-10'>
            {social.map(link => (
                <Link href={link.link} key={link.id} passHref target="_blank" rel="noreferrer" className="h-8 w-8 bg-white rounded-md socialMediaLink">
                    <Bounce duration={2000}>
                        <img src={link.image} alt={link.name} className="w-8 h-8" />
                    </Bounce>
                </Link>
            ))}
        </div>
    )
}
