import { utilizing } from '@/lib/constants'
import { CardProps } from '@/lib/types'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Utilizing = () => {
  return (
    <div>
        <div className="sm:flex text-center sm:text-left flex-row p-8 sm:p-24 items-center">
            <div className="sm:space-y-[1.7rem] gap-y-[1.7rem] flex-1">
                <p className='h-2 w-[4rem] bg-[#EE75F0]'/>
                <h1 className="text-[#6986DC] sm:text-2xl font-poppinsMedium text-[2rem]">Utilizing Web5 Technology</h1>
                <p className='text-[#515458] text-[.9rem] sm:text-4 font-montserrat'>Med 5 revolutionizes healthcare by placing you in control. Forget passwords and data silos: manage your self-owned identity on the secure blockchain and experience a Web5-powered healthcare journey with ultimate privacy and autonomy.</p>
                <Link href="/" className='items-center sm:text-left text-center w-[fit-content] mx-auto my-5 font-montserrat text-[#6986DC] flex flex-row gap-x-3'>Learn more <ChevronRight /></Link>
            </div>
            <Image 
                src="/_static/images/utilizing.svg"
                alt='Med5, Your way to go.'
                width={150}
                height={150}
                className='sm:flex-1 my-3 sm:w-1/2 w-full'
            />
        </div>
        <div className="m-[1rem] sm:m-[4rem] grid grid-cols-1 md:grid-cols-3 sm:mx-[10rem] gap-12">
            { 
                utilizing.map(({ icon, title, description })=>(
                    <Card icon={icon} title={title} description={description} />
                ))
            }
        </div>
    </div>
  )
}

export default Utilizing;

const Card = ({ icon, title, description }: any) => {
    return(
        <div className="bg-[#fff] shadow-sm hover:shadow-lg transition-all rounded-lg p-6">
            <div className="rounded-full w-[fit-content] text-[#fff] mb-4 p-4 bg-[#6986DC]">{icon}</div>
            <h2 className='font-montserrat font-bold'>{title}</h2>
            <p className='w-[3rem] h-1 bg-[#6986DC] my-4'/>
            <p className='font-montserrat'>{description}</p>
        </div>
    )
}