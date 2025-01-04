import React from 'react'
import {NavLink} from 'react-router-dom'
import jobRinger from "../src/assets/jobRinger.png"


const Navbar = () => {
  return (
    <div className='fixed w-screen h-auto md:h-24 py-4 md:py-0 bg-black flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-100 text-sm outline outline-1 outline-zinc-500 z-10 overflow-x-hidden' style={{fontFamily: "Poppins, serif"}}>
  <section className='w-full md:w-[25%] flex justify-center pb-2 md:pb-0'>
    <img src={jobRinger} className='w-[40%] md:w-[45%] rounded-2xl' alt='jobRinger' />
  </section>
  <section className='w-full md:w-[50%] flex flex-wrap justify-center gap-6 md:gap-12'>
    <NavLink to="" className="">Jobs</NavLink>
    <NavLink to="" className="">Active Employers</NavLink>
    <NavLink to="" className="">Job Blogs</NavLink>
    <NavLink to="" className="">Pricing</NavLink>
  </section>
  <section className='w-full md:w-[25%] flex flex-row gap-4 justify-center items-center'>
    <button className='border-gray-300 border-[1px] py-2 px-6 w-fit rounded-lg'>
      Jobseeker Login
    </button>
    <button className='border-gray-300 border-[1px] py-2 px-6 w-fit rounded-lg'>
      Employer Login
    </button>
  </section>
</div>

  )
}

export default Navbar
