import { features } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div className='bg-[#fff] px-10 py-8 sm:p-24 text-center min-h-screen'>
        <h1 className="text-2xl font-poppinsMedium mb-8">Features</h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-3 gap-10">
            {
                features.map(({ icon, title, description })=>(
                    <div className="items-center justify-center flex flex-column text-center gap-y-18" style={{ flexDirection: 'column' }}>
                        <Image 
                            alt="title"
                            width={70}
                            height={70}
                            src={icon}
                            className='mb-4'
                        />
                        <p className="font-poppinsMedium text-lg my-3">{title}</p>
                        <p className='text-[#515458]'>{description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Features