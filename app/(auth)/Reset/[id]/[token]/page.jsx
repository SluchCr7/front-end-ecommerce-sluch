'use client'
import axios from 'axios';
import React , {useState} from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

const Page = ({params}) => {
  const {id , token} = params
  const [password, setpassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const hadnleReset = (e) => {
    e.preventDefault()
    if(password == "") toast.error('password is required')
    else{
      axios.post(`${process.env.SERVERURL}/api/password/reset/${id}/${token}`, {password})
        .then(res => {
          toast.success(res.data)
          window.location.href = "/Login"
        })
        .catch(err=>{
          toast.error(err.response.data)  
        })
    }
  }
  return (
    <div className='flex items-center gap-3 bg-ModeOne-primary dark:bg-ModeTwo-primary p-10 flex-col'>
        <ToastContainer/>
        <h1 className='text-ModeOne-text dark:text-ModeTwo-text font-bold text-3xl tracking-[2px]'>Sluch<span className='text-ModeOne-secondary dark:text-ModeTwo-secondary'>.</span></h1>
        <p className='text-ModeOne-text dark:text-ModeTwo-text'>Login and shopping new products and impresive collections</p>
        <form onSubmit={(e) => hadnleReset(e)} action="" className='flex items-center gap-6 flex-col py-4'>
            <div className='relative'>
                <input value={password} onChange={(e) => setpassword(e.target.value )} type={showPassword ? "text" : "password"} className='border-2 w-[400px] text-ModeOne-text dark:text-ModeTwo-text border-ModeOne-third dark:border-ModeTwo-third bg-ModeOne-primary dark:bg-ModeTwo-primary py-3 px-2 outline-none' placeholder='Password' />
                <label htmlFor="" className='absolute bg-ModeOne-primary dark:bg-ModeTwo-primary text-ModeOne-text dark:text-ModeTwo-text text-xs left-[10px] top-[-7px]'>Password</label>
                <span className='absolute right-2 top-[26%] text-xl text-ModeTwo-primary dark:text-ModeOne-primary'>
                  {showPassword ? <BiSolidShow onClick={() => setShowPassword(!showPassword)} /> : <BiSolidHide onClick={() => setShowPassword(!showPassword)} />}
                </span>
            </div>
            <button className='border-[1px] text-ModeOne-text dark:text-ModeTwo-text uppercase tracking-[3px] border-ModeOne-third dark:border-ModeTwo-third w-[400px] p-3 rounded-md'>Reset</button>
        </form>
    </div>
  )
}

export default Page