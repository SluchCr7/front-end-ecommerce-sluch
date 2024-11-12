'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import Title from '@/app/Components/Title'

const Page = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })
  useEffect(() => {
    axios
      .post("https://sluchend.vercel.app/", {
        name: user.username,
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        window.location.href = "/Login";
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  })
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className='flex items-center gap-3 bg-ModeOne-primary dark:bg-ModeTwo-primary p-5 lg:p-10 flex-col'>
        <ToastContainer />
        <Title title="Sign Up" />
          <form action="" className='flex items-center gap-6 flex-col py-4'>
            <div className='relative'>
                <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" className='border-2 w-[100%] lg:w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Email' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Email</label>
            </div>
            <div className='relative'>
                <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type={showPassword ? "text" : "password"} className='border-2 w-[100%] lg:w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Password' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Password</label>
                <span className='absolute right-2 top-[26%] text-xl text-ModeTwo-primary dark:text-ModeOne-primary'>
                  {showPassword ? <BiSolidShow onClick={() => setShowPassword(!showPassword)} /> : <BiSolidHide onClick={() => setShowPassword(!showPassword)} />}
                </span>
            </div>
            <div className='relative'>
                <input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} type="text" className='border-2 w-[100%] lg:w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='UserName' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>UserName</label>
            </div>
            <div className='w-full flex items-center'>
              <span className='text-sm text-ModeOne-text dark:text-ModeTwo-text'>Forget Your password</span>
            </div>
            <button className='border-[1px] text-ModeOne-text dark:text-ModeTwo-text uppercase tracking-[3px] border-ModeOne-third dark:border-ModeTwo-third w-full lg:w-[400px] p-3 rounded-md'>Login</button>
            <Link href={"../Login"} className='text-sm text-ModeOne-secondary dark:text-ModeTwo-secondary'>You Have an Account</Link>
        </form>
    </div>
  )
}

export default Page