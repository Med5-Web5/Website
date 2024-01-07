import React from 'react'

const Control = () => {
  return (
    <div className='bg-gradient-to-tr items-center text-[#fff] sm:p-12 sm:py-24 py-12 px-6 text-center from-[#0D92B1] via-[#6C89DF] to-[#B180EF]'>
        <h1 className="font-poppins my-3 text-3xl mb-8">Subscribe to our newsletter</h1>
        <div className="sm:flex w-[80%] mx-auto gap-x-[2rem] flex-row items-center">
            <input type="text" placeholder='Email address' className='w-full mb-4 sm:mb-0 sm:w-[70%] bg-clip-padding backdrop-filter font-montserrat text-[#fff] h-[max-content] h-[3rem] outline-[none] placeholder:text-[#fff] px-3 py-2 backdrop-filter bg-[#fff] backdrop-blur-md bg-opacity-10 rounded-lg' style={{ outline: 'none' }} />
            <button className=' font-montserrat text-sm bg-[#fff] rounded-lg px-6 py-3 text-[#000]'>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Control