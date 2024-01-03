import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/lib/types';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { Cards } from '@/lib/constants';

const Services = () => {
  return (
    <div className='bg-[#E5FAFF] min-h-screen sm:px-12 px-10 py-12 sm:py-24'>
        <h1 className='font-poppinsMedium text-3xl items-center text-center w-[fit-content] mx-auto flex gap-x-3'>Services
            <Image 
                src="/_static/images/cap.svg"
                alt="Med5, Your way to go."
                width={40}
                height={40}
            />
        </h1>
        <p className='font-montserrat text-[.9rem] mb-[2.8rem] mt-[1.3rem] sm:my-3 text-[#515458] sm:w-[50%] text-center mx-auto'>Take charge of your medical journey with Med 5, the Web5 app that puts you at the center of your healthcare.</p>
        <div className="sm:m-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                Cards.map(({ icon, title, description, link })=>(
                    <Card icon={icon} title={title} description={description} link={link} />
                ))
            }
        </div>
    </div>
  )
}

export default Services;

const Card = ({ icon, title, description, link }: CardProps ) => {
    return(
        <div className="h-full w-full bg-[#fff] rounded-2xl sm:p-8 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <Image 
                alt={title}
                width={150}
                height={150}
                src={icon}
            />
            <h2 className='font-montserrat font-bold text-xl my-3'>{title}</h2>
            <p className='text-[#515458] font-montserrat'>{description}</p>
            <Link href={link} className='flex flex-row gap-x-3 my-3 text-center items-center text-[#4E92F9] font-montserrat font-bold'>Learn More <MoveRight /></Link>
        </div>
    )
}