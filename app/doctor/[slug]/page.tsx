import React from 'react';
import Image from 'next/image';
import { Nav } from '@/components/layout';

const Doctor = ({ params }) => {
  return (
    <>
      <Nav />
      <div className="flex gap-x-[3rem] items-center  p-[6rem]">
        <div className='w-1/2 gap-y-6'>
          <h1 className="text-4xl font-poppinsBold">Dr Brentford Junior</h1>
          <div className="my-4">
            <p className="text-[#515458] font-poppins">Physician</p>
            <p className='h-1 w-[4rem] bg-[#EE75F0]'/>
          </div>
          <p className="font-montserrat text-[#515458] mb-8">Prioritize your well-being with a 3-minute self-guided health checkup on Med 5. Gain valuable insights into potential causes of your symptoms and receive prescription from your doctor.</p>
          <div className="">
            <button className='font-poppinsBold bg-[#6986DC] px-[4rem] mb-3 rounded-lg p-4 text-[#fff]'>Begin Checkup</button>
            <p className='font-montserrat'>The information you give is safe and won’t be shared</p>
          </div>
        </div>
        <Image 
          src="/_static/images/doctor.png"
          alt="Doctor"
          width={100}
          height={100}
          className='w-1/2'
        />
      </div>
    </>
  )
}

export default Doctor