import Loader from '@/components/Loader'
import { useStateContext } from '@/context/Statecontext'
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SideMenu() {
    const { pathname, replace } = useRouter()
    const { adminMenu, setAdminMenu, setLoading } = useStateContext()
    function checkBackgroundAndColor(url) {
        if (pathname == url) {
            return "bg-teal-400 text-black"
        }
        return "text-gray-400"
    }
    const handleSignOut = async () => {
        try {
            setLoading(true)
            await signOut(auth)
            replace('/admin/login')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setAlert({ isShow: true, duration: 3000, message: error.response?.data?.message || error.message, type: "error" })
        }
    }
    return (
        <div style={{ transform: adminMenu ? "translateX(0)" : "translateX(-100%)", boxShadow: "rgb(0 0 0 / 30%) 5px -1px 12px 0px" }} className="flex h-screen flex-col justify-between border-r border-slate-800 bg-slate-900/70 w-64 fixed top-0 left-0 bottom-0 transition-transform duration-500 z-40  backdrop-blur-sm rounded-3xl rounded-l-none">
            <div className="px-4 py-6">
                <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1 mr-2">
                    <Link
                        href={"/admin"}
                        passHref
                        onClick={() => setAdminMenu(false)}
                        className={`${checkBackgroundAndColor('/admin')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                    >
                        <span className="text-sm font-medium flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            Home </span>
                    </Link>

                    <Link
                        href={'/admin/addproject'}
                        className={`${checkBackgroundAndColor('/admin/addproject')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>

                            New project </span>
                    </Link>

                    <Link
                        href={'/admin/projects'}
                        className={`${checkBackgroundAndColor('/admin/projects')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M8 8H16M8 12H16M12 16H16M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            All Projects </span>
                    </Link>

                    <Link
                        href={'/admin/user'}
                        className={`${checkBackgroundAndColor('/admin/user')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className="h-5 w-5 opacity-75 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="none" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="current" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="current" />
                            </svg>
                            User Details</span>
                    </Link>

                    <Link
                        href={'/admin/socialLink'}
                        className={`${checkBackgroundAndColor('/admin/socialLink')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className='h-5 opacity-75 stroke-current' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke="inherit" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            Social Link </span>
                    </Link>

                    <Link
                        href={'/admin/services'}
                        className={`${checkBackgroundAndColor('/admin/services')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className='h-5 stroke-current opacity-75' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke="current" stroke-width="2" d="M6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 Z M6,3 L6,0 M6,12 L6,9 M0,6 L3,6 M9,6 L12,6 M2,2 L4,4 M8,8 L10,10 M10,2 L8,4 M4,8 L2,10 M18,12 C19.6568542,12 21,10.6568542 21,9 C21,7.34314575 19.6568542,6 18,6 C16.3431458,6 15,7.34314575 15,9 C15,10.6568542 16.3431458,12 18,12 Z M18,6 L18,3 M18,15 L18,12 M12,9 L15,9 M21,9 L24,9 M14,5 L16,7 M20,11 L22,13 M22,5 L20,7 M16,11 L14,13 M9,21 C10.6568542,21 12,19.6568542 12,18 C12,16.3431458 10.6568542,15 9,15 C7.34314575,15 6,16.3431458 6,18 C6,19.6568542 7.34314575,21 9,21 Z M9,15 L9,12 M9,24 L9,21 M3,18 L6,18 M12,18 L15,18 M5,14 L7,16 M11,20 L13,22 M13,14 L11,16 M7,20 L5,22" />
                            </svg>

                            Services </span>
                    </Link>

                    <Link
                        href={'/admin/comments'}
                        className={`${checkBackgroundAndColor('/admin/comments')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className='h-5 fill-current opacity-75' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M92.574,294.24V124.336H43.277C19.449,124.336,0,144.213,0,168.467v206.44
		c0,24.254,19.449,44.133,43.277,44.133h62v45.469c0,3.041,1.824,5.777,4.559,6.932c2.736,1.154,5.957,0.486,8.023-1.641
		l49.844-50.76h106.494c23.828,0,43.279-19.879,43.279-44.133v-0.061H172.262C128.314,374.846,92.574,338.676,92.574,294.24z"/>
                                <path d="M462.717,40H172.26c-27.105,0-49.283,22.59-49.283,50.197v204.037c0,27.61,22.178,50.199,49.283,50.199
		h164.668l75.348,76.033c2.399,2.442,6.004,3.172,9.135,1.852c3.133-1.322,5.176-4.434,5.176-7.887v-69.998h36.131
		c27.106,0,49.283-22.59,49.283-50.199V90.197C512,62.59,489.822,40,462.717,40z M369.156,280.115H195.92v-24.316h173.236V280.115z
        M439.058,204.129H195.92v-24.314h243.138V204.129z M439.058,128.143H195.92v-24.315h243.138V128.143z"/>
                            </svg>
                            Comments </span>
                    </Link>

                    <Link
                        href={'/admin/contacts'}
                        className={`${checkBackgroundAndColor('/admin/contacts')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className="h-5 w-5 opacity-75 fill-current"
                                viewBox="0 0 16 16" id="contacts-16px" xmlns="http://www.w3.org/2000/svg">
                                <path id="Path_131" data-name="Path 131" d="M33,6a2,2,0,1,0-2,2A2,2,0,0,0,33,6ZM31,7a1,1,0,1,1,1-1A1,1,0,0,1,31,7Zm7.5-1H38V3.5A3.5,3.5,0,0,0,34.5,0h-10a.5.5,0,0,0-.5.5V2.045h-.5a.5.5,0,0,0,0,1H24V6h-.5a.5.5,0,0,0,0,1H24v3h-.5a.5.5,0,0,0,0,1H24v3h-.5a.5.5,0,0,0,0,1H24v.5a.5.5,0,0,0,.5.5h10A3.5,3.5,0,0,0,38,12.5V10h.5a.5.5,0,0,0,.5-.5v-3A.5.5,0,0,0,38.5,6ZM38,9H37a1,1,0,0,1,0-2h1Zm-1,3.5A2.5,2.5,0,0,1,34.5,15h-9a.5.5,0,0,0,0-1H25V11h.5a.5.5,0,0,0,0-1H25V7h.5a.5.5,0,0,0,0-1H25V3.045h.545a.5.5,0,0,0,0-1H25V1h9.5A2.5,2.5,0,0,1,37,3.5V6a2,2,0,0,0,0,4ZM31.5,8h-1A3.5,3.5,0,0,0,27,11.5,1.5,1.5,0,0,0,28.5,13h5A1.5,1.5,0,0,0,35,11.5,3.5,3.5,0,0,0,31.5,8Zm2,4h-5a.5.5,0,0,1-.5-.5A2.5,2.5,0,0,1,30.5,9h1A2.5,2.5,0,0,1,34,11.5.5.5,0,0,1,33.5,12Z" transform="translate(-23)" />
                            </svg>
                            Contacts </span>
                    </Link>

                    <Link
                        href={'/admin/createuser'}
                        className={`${checkBackgroundAndColor('/admin/createuser')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg className="h-5 w-5 opacity-75 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 483.886 483.886" xmlSpace="preserve">
                                <path d="M475.886,377.543h-60v-59.6c0-4.4-3.6-8-8-8c-4.4,0-8,3.6-8,8v59.6h-60c-4.4,0-8,3.6-8,8c0,4.4,3.6,8,8,8h60v60.4
				c0,4.4,3.6,8,8,8c4.4,0,8-3.6,8-8v-60.4h60c4.4,0,8-3.6,8-8C483.886,381.143,480.286,377.543,475.886,377.543z"/>
                                <path d="M336.686,254.343c12,3.6,23.2,9.2,32,17.2c3.2,2.8,8.4,2.4,11.2-0.8s2.4-8.4-0.8-11.2c-10.8-9.6-24-16.4-38.8-20.4
				l-4.8-1.2c-7.6-2-16,0.8-20.8,6.4c-17.6,20-40,21.6-63.6,21.6c-23.2,0-45.6-1.6-63.2-21.6c-5.2-6-13.2-8.4-20.4-6.4l-4.8,1.2
				c-33.2,8.8-59.6,34.4-69.2,67.6l-6.8,23.2c-0.4,0-0.8,0-1.2,0h-66c-1.6,0-2.4-0.8-2.8-1.2c-0.4-0.4-1.2-1.6-0.8-3.2l13.2-46.8
				c11.2-37.2,34.8-49.2,77.2-59.2c0.8,0,1.2-0.4,2-0.8c2.8,2,6,4,8.8,5.6c1.2,0.8,2.4,0.8,3.6,0.8c2.8,0,5.6-1.6,7.2-4.4
				c2-4,0.4-8.8-3.2-10.8c-23.6-12-40.8-46.8-40.8-82.4c0-32.4,26-58.4,58.4-58.4c9.6,0,18.4,2.4,27.2,6.8
				c-4.8,11.2-7.6,23.6-7.6,36.4c0,68.4,41.2,126,90.4,126c48,0,90.4-58.8,90.4-126c0-50-40.4-90.4-90.4-90.4
				c-31.2,0-58.8,16-75.2,40l-0.4-0.4c-10.8-5.6-22.4-8.4-34.4-8.4c-41.2,0-74.4,33.2-74.4,74.4c0,30,10.4,58.8,26.8,78
				c-36.4,9.2-66.8,22.8-80.8,68.4l-13.2,47.2c-1.6,6-0.4,12.4,3.6,17.2c3.6,4.8,9.2,7.6,15.2,7.6h62.4l-5.6,18.8
				c-2,6.8-0.8,14,3.6,19.6c4.4,5.6,11.2,9.2,18.4,9.2h169.6c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8h-169.6c-2,0-4-0.8-5.2-2.8
				c-0.8-0.8-1.6-2.8-0.8-5.6l16.8-58.4c8-27.6,30-49.2,58-56.4l4.8-1.2c1.6-0.4,3.2,0.4,4.4,1.6c22,25.2,49.2,27.2,75.6,27.2
				s53.6-2,75.6-27.2c0,0,0-0.4,0.4-0.4c0.8-0.8,2.8-1.6,4-1.2L336.686,254.343z M252.286,37.943c33.2,0,61.2,22,70.8,52
				c-14,2.8-28.8-2.8-37.6-14.8c-2.8-3.6-7.6-4.4-11.2-1.6c-1.6,1.2-2.4,2.4-2.8,4c-0.4,0.4-0.4,0.8-0.8,1.2
				c-11.2,22.8-48.8,32.4-92,24C183.486,66.343,214.686,37.943,252.286,37.943z M208.686,121.543c32,0,58.4-10,72-28.8
				c10,8.8,22.4,13.6,35.6,13.6c3.2,0,6.8-0.4,10-1.2c0.4,2.4,0.4,4.4,0.4,6.8c0,58.8-34.8,110.4-74.4,110.4
				c-38,0-72-47.6-74.4-103.6C188.686,120.743,198.686,121.543,208.686,121.543z"/>
                            </svg>
                            Create user </span>
                    </Link>

                    <Link
                        href={'/admin/assets'}
                        className={`${checkBackgroundAndColor('/admin/assets')} rounded-lg px-4 py-2 hover:bg-teal-200 hover:text-gray-800 `}
                        passHref
                        onClick={() => setAdminMenu(false)}
                    >
                        <span className="flex items-center gap-2 text-sm font-medium">
                            <svg  className="h-5 w-6 opacity-75 fill-current" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXink="http://www.w3.org/1999/xlink" viewBox="0 0 54.014 54.014" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M49.122,5.845H9.134c-1.664,0-3.136,0.838-4.02,2.11c0.791-0.549,1.748-0.874,2.782-0.874h39.989 c2.697,0,4.893,2.195,4.893,4.895v28.927c0,1.033-0.322,1.992-0.873,2.783c1.273-0.885,2.109-2.354,2.109-4.021V10.74 C54.016,8.041,51.82,5.845,49.122,5.845z"></path> <path d="M46.85,8.119H6.861c-1.666,0-3.135,0.836-4.021,2.11c0.791-0.551,1.75-0.874,2.784-0.874h39.988 c2.696,0,4.894,2.194,4.894,4.895v28.927c0,1.033-0.324,1.992-0.873,2.783c1.272-0.883,2.109-2.355,2.109-4.021V13.014 C51.743,10.314,49.547,8.119,46.85,8.119z"></path> <path d="M45.527,11.073H3.261C1.463,11.073,0,12.536,0,14.333v30.574c0,1.799,1.463,3.262,3.261,3.262h42.266 c1.799,0,3.262-1.463,3.262-3.262V14.333C48.789,12.537,47.324,11.073,45.527,11.073z M46.09,44.909 c0,0.309-0.253,0.562-0.563,0.562H3.26c-0.31,0-0.563-0.254-0.563-0.562V27.708l4.855-4.854c0.526-0.527,0.526-1.381,0-1.908 c-0.527-0.527-1.382-0.527-1.908,0l-2.947,2.948v-1.707l4.896-4.898c0.526-0.526,0.526-1.38,0-1.907 c-0.527-0.526-1.382-0.526-1.908,0l-2.988,2.99v-4.037c0-0.311,0.253-0.562,0.562-0.562h42.264c0.312,0,0.562,0.253,0.562,0.562 L46.09,44.909L46.09,44.909z"></path> <path d="M33.064,24.699c-0.229-0.39-0.633-0.641-1.084-0.667c-0.443-0.023-0.885,0.172-1.156,0.532l-7.201,9.516l-6.451-6.451 c-0.286-0.287-0.684-0.432-1.086-0.389c-0.401,0.039-0.766,0.256-0.989,0.592l-9.19,13.742c-0.276,0.414-0.304,0.946-0.068,1.385 c0.234,0.438,0.691,0.713,1.188,0.713h34.736c0.481,0,0.928-0.256,1.17-0.676c0.24-0.418,0.238-0.935-0.004-1.351L33.064,24.699z M9.552,40.976l6.872-10.277l6.384,6.383c0.275,0.275,0.657,0.422,1.045,0.394c0.391-0.026,0.748-0.224,0.983-0.533l6.913-9.133 l7.665,13.168L9.552,40.976L9.552,40.976z"></path> <path d="M29.329,22.849c0.509,0,0.999-0.075,1.459-0.224c0.938,0.225,1.985,0.214,2.925-0.026 c0.313,0.087,0.643,0.131,0.971,0.131c0.069,0,0.136-0.016,0.203-0.02c-0.404-0.646-0.642-1.405-0.642-2.223 c0-0.021,0.003-0.043,0.004-0.064c-0.082-0.026-0.164-0.053-0.239-0.094c-0.134-0.075-0.293-0.085-0.436-0.027 c-0.816,0.331-1.875,0.338-2.695,0.024c-0.14-0.054-0.293-0.043-0.423,0.028c-0.313,0.171-0.714,0.265-1.127,0.265 c-0.981,0-1.666-0.501-1.666-0.952c0-0.429,0.625-0.912,1.558-0.948c0.192-0.008,0.364-0.125,0.442-0.302 c0.322-0.735,1.365-1.249,2.536-1.249c1.137,0,2.171,0.497,2.516,1.21c0.014,0.028,0.038,0.047,0.057,0.072 c0.382-0.687,0.947-1.255,1.632-1.639c-0.027-0.017-0.054-0.034-0.082-0.048c-0.879-1.145-2.408-1.824-4.121-1.824 c-1.623,0-3.104,0.625-4.006,1.68c-1.657,0.395-2.76,1.6-2.76,3.047C25.433,21.452,27.144,22.849,29.329,22.849z"></path> <path d="M39.557,16.905c-0.711,0-1.377,0.188-1.957,0.514c-0.647,0.365-1.188,0.905-1.549,1.559 c-0.31,0.557-0.486,1.193-0.496,1.873c0,0.021-0.004,0.04-0.004,0.061c0,0.775,0.227,1.498,0.607,2.112 c0.708,1.134,1.964,1.893,3.396,1.893c2.209,0,4.006-1.796,4.006-4.005S41.766,16.905,39.557,16.905z M39.557,22.352 c-0.418,0-0.793-0.183-1.057-0.468c-0.236-0.257-0.388-0.598-0.388-0.975c0-0.659,0.446-1.21,1.052-1.381 c0.125-0.036,0.254-0.062,0.391-0.062c0.795,0,1.441,0.647,1.441,1.442S40.352,22.352,39.557,22.352z"></path> </g> </g> </g></svg>
                            Assets </span>
                    </Link>
                </nav>
            </div>
            <button className="shrink-0 fill-gray-300 transition duration-300 rotate-90 absolute top-[50%] right-0 cursor-pointer hover:fill-teal-200" onClick={() => setAdminMenu(false)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    viewBox="0 0 20 20"
                    fill="inherit"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 font-semibold">
                <button onClick={handleSignOut} className="flex items-center gap-2 px-4 py-3 pl-[50%] hover:bg-teal-200 w-full  hover:text-gray-700 text-gray-300 transition-colors">
                    Logout
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 stroke-current transition-[stroke]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
