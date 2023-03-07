import React, { useState } from 'react'
import PrimaryButton from '../base/PrimaryButton'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  function handleOnClick(e) {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000);
  }
  return (
    <main className='h-screen flex justify-center items-start flex-col max-w-sm w-full mx-auto font-workSans'>
      <h1 className='text-3xl md:text-5xl font-semibold pb-6 md:pb-8 text-center w-full text-gray-200'>Admin Login</h1>
      <form onSubmit={e => handleOnClick(e)} className='flex flex-col w-full px-4 gap-4'>
        <input type="email" autoComplete='true' placeholder='Email Address' required name='email' className='px-4 py-3 bg-gray-200 rounded placeholder:text-gray-500 border border-gray-200 outline-none hover:bg-gray-100 hover:border-gray-400 focus:bg-gray-100 focus:border-gray-400 shadow-lg shadow-slate-900/50' />
        <input type="password" name="password" placeholder='Password' required autoComplete='true' className='px-4 py-3 bg-gray-200 rounded placeholder:text-gray-500 border border-gray-200 outline-none hover:bg-gray-100 hover:border-gray-400 focus:bg-gray-100 focus:border-gray-400 shadow-lg shadow-slate-900/50' />
        <PrimaryButton {...{ text: "login", isLoading, isSuccess, setIsSuccess }} />
      </form>
      <span className='pt-3 text-blue-600 pl-4 cursor-pointer inline'>Forgot password?</span>
    </main>
  )
}
