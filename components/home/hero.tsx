import React from 'react'
import { Nav } from '../layout';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-[#0D92B1] via-[#6C89DF] to-[#B180EF]'>
        <Nav />
        <div className="grid justify-center w-[80%] mx-auto sm:w-full items-center h-[max-content]">
          <div className="w-[fit-content] items-center text-center">
            <p className="text-[#fff] font-montserrat font-bold my-4">Med5</p>
            <h1 className='text-[#fff] font-poppinsBold sm:font-poppinsBlack text-[1.9rem] sm:text-[3.2rem] w-[80%] mx-[auto]'>Your Health, Your Data, <span className='text-[#EE75F0]'>Your Control</span></h1>
            <p className='font-bold font-montserrat my-4 text-[#fff] mb-5 sm:mb-9'>Empowering a secure, patient-centric future of healthcare</p>
            <div className="sm:flex flex-column sm:flex-row justify-center space-y-4 sm:gap-x-4">
              <button className='rounded-md bg-[#EE75F0] text-[#fff] p-3 px-4 font-montserrat font-bold'>Connect Wallet</button>
              <button className='rounded-md bg-[#fff] text-[#6986DC] p-3 px-4 font-montserrat font-bold'>Learn More</button>
            </div>
          </div>
        </div>
        <Image 
          src="/_static/images/capsule.svg"
          alt="Med5, your way to go."
          width={150}
          height={150}
          className='absolute top-[85%] w-[5rem] sm:top-[26%] right-[1rem] sm:left-[8.3rem]'
        />
        <Image 
          src="/_static/images/doctors.svg"
          alt="Med5, your way to go."
          width={190}
          height={190}
          className='hidden sm:absolute top-[46%] right-[4.3rem]'
        />
        <Image 
          src="/_static/images/consult.svg"
          alt="Med5, your way to go."
          width={190}
          height={190}
          className='absolute top-[85%] w-[5rem] sm:top-[76%] left-[2rem] sm:left-[4.3rem]'
        />
    </div>
  )
}

export default Hero