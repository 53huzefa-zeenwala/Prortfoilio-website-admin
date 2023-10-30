import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import HamburgerMenuIcon from './HamburgerMenuIcon';
export default function Navbar() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false)

  return (
    <div className="h-20 relative bg-slate-800">
      <div className='w-full h-12 md:z-40'>
        <header className="absolute w-full shadow-md shadow-[#414141b3] transition md:h-20 h-16 capitalize">
          <nav className="w-full m-auto lg:px-20">
            <div id="Navbar" className="relative flex flex-wrap items-center justify-between  navbarAnimate md:bg-transparent h-0">
              <div className="relative z-30 w-full px-6 md:px-0  flex items-center justify-between md:w-auto bg-slate-800">
                <div className="relative w-1/4 h-16 md:mx-8 my-2 sm:w-20 md:w-28 md:h-16 overflow-x-hidden">
                  <Image src={"/logo.png"} fill='object-fit' alt="website logo" priority={true} />
                </div>

                <div id="hamburger" className="absolute top-2 right-2 w-20 h-16 md:hidden overflow-x-hidden scrollbar-hide">
                  <HamburgerMenuIcon setOpen={setOpen} open={open} />
                </div>
              </div>

              <div data-isopen={open} className={"w-full px-6 md:w-[45%] md:px-0 lg:bg-transparent z-20 menuNavbar shadow-md shadow-[#414141b3] md:shadow-none -translate-y-full md:translate-y-0 md:flex md:justify-center bg-slate-700 md:bg-none"}>
                <ul className="py-4 text-lg tracking-wide md:flex md:space-x-8 md:py-0">
                  <Link className={pathname === "/" ? "active headerLink" : "headerLink"} onClick={()=> setOpen(false)} href="/" >
                      HOME
                  </Link>
                  <Link className={pathname === "/projects" ? "active headerLink" : "headerLink"} onClick={()=> setOpen(false)} href="/projects">
                      PROJECTS
                  </Link>

                  <Link  className={pathname === "/contact" ? "active headerLink" : "headerLink"} onClick={()=> setOpen(false)} href="/contact" >
                      CONTACT
                  </Link>

                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  )
}