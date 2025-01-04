import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-zinc-800 h-fit w-screen flex flex-col items-center'>
  <section className='h-fit md:h-16 w-screen bg-black text-gray-200 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-12 px-4 md:px-8 p-2 md:p-0'> 
    <div className='w-auto md:w-4/6 flex flex-row justify-center md:justify-between items-center gap-4 md:gap-12'>
        <h1 className='text-xl md:text-2xl font-semibold'>EMPLOYERS</h1>
        <h2 className='text-sm md:text-lg text-center md:text-left'>WELCOME OFFER - FREE JOB Postings and Much More.</h2>
    </div>
    <div className='w-auto md:w-2/6 flex flex-row justify-center gap-4 text-xs md:text-sm'>
      <button className='border-gray-300 border-[1px] py-2 px-4 rounded-lg'>Register for FREE</button>
      <button className='bg-gray-100 text-black py-2 px-4 rounded-lg'>Post a Job</button>
      <button className='underline'>Sales Enquiry</button>
    </div>
  </section>
  <section className='h-auto md:h-20 w-screen flex flex-col md:flex-row justify-around items-center px-4 md:px-[5%] gap-4 md:gap-0 py-2 md:py-0'>
    <div className='grid grid-cols-2 place-items-center md:flex w-full md:w-5/6 flex-wrap md:gap-[10%]'>
      <div className="flex text-gray-200 gap-2 w-full md:w-auto">
        <i class="bi bi-search"></i>
        <input type='text' placeholder='Type keyword...' className='bg-zinc-800 outline-none w-full md:w-auto' />
      </div>
      <div className="flex text-gray-200 gap-2 w-full md:w-auto">
        <i class="bi bi-geo-alt"></i>
        <form>
          <select className='bg-zinc-800 outline-none w-full md:w-auto' name="Select Location">
            <option value="Select Location">Select Location</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Noida">Noida</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </form>
      </div>
      <div className="flex text-gray-200 gap-2 w-full md:w-auto">
        <i class="bi bi-briefcase"></i>
        <form>
          <select className='bg-zinc-800 outline-none w-full md:w-auto' name="Experience">
            <option value="experience">Experience</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="a5">5</option>
          </select>
        </form>
      </div>
      <div className="flex text-gray-200 gap-2 w-full md:w-auto">
        <i class="bi bi-cash"></i>
        <form>
          <select className='bg-zinc-800 outline-none w-full md:w-auto' name="Salary">
            <option value="salary">Salary</option>
            <option value="0-3">0-3 Lacs</option>
            <option value="3-6">3-6 Lacs</option>
            <option value="6-9">6-9 Lacs</option>
            <option value="9-12">9-12 Lacs</option>
            <option value="12-15">12-15 Lacs</option>
            <option value="15-18">15-18 Lacs</option>
          </select>
        </form>
      </div>
    </div>
    <div className='w-full md:w-1/6 flex justify-center'>
      <button className='border-2 border-gray-500 text-white py-1 md:py-2 px-2 md:px-4 rounded-2xl md:rounded-lg hover:bg-gray-50 hover:text-gray-800 transition duration-300'>
        Submit
      </button>
    </div>
  </section>  
</div>

  )
}

export default SearchBar
