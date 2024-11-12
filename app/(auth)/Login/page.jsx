'use client'
import Link from 'next/link'
import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useContext } from 'react'
import { authContext } from '@/app/Context/authContext'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import Title from '@/app/Components/Title'
const page = () => {
  const { Login } = useContext(authContext)
  const [showPassword, setShowPassword] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  return (
    <div className='flex items-center gap-3 bg-ModeOne-primary dark:bg-ModeTwo-primary p-5 lg:p-10 flex-col'>
        <Title text1={"Login"} />
        <form onSubmit={(e) => { e.preventDefault(); Login(user) }} action="" className='flex w-full items-center gap-6 flex-col py-4 px-2'>
            <div className='relative'>
              <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email"
                className='border-2 w-[100%] lg:w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Email' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Email</label>
            </div>
            <div className='relative'>
              <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type={showPassword ? "text" : "password"}
                className='border-2 w-[100%] lg:w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Password' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Password</label>
                <span className='absolute right-2 top-[26%] text-xl text-ModeTwo-primary dark:text-ModeOne-primary'>
                  {showPassword ? <BiSolidShow onClick={() => setShowPassword(!showPassword)} /> : <BiSolidHide onClick={() => setShowPassword(!showPassword)} />}
                </span>
            </div>
            <div className='w-full lg:w-[400px] flex items-center justify-between'>
              <Link href={"../Forget"} className='text-sm text-ModeOne-text dark:text-ModeTwo-text'>Forget Your password</Link>
              <Link href={"../SignUp"} className='text-sm text-ModeOne-secondary dark:text-ModeTwo-secondary'>Create Account</Link>
            </div>
            <button className='border-[1px] text-ModeOne-text dark:text-ModeTwo-text uppercase tracking-[3px] border-ModeOne-third dark:border-ModeTwo-third w-[100%] lg:w-[400px] p-3 rounded-md'>Login</button>
        </form>
    </div>
  )
}

export default page