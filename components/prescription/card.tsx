import { PrescriptionProps } from '@/lib/types'
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

const Card = (data: PrescriptionProps) => {
  return (
    <Link href={`/prescription/${data.doctor.name.toLocaleLowerCase().split(" ").join("-")}`} className="h-[auto] bg-[#fff] overflow-hidden relative font-montserrat rounded-md">
        <div className="flex p-8 space-between text-center items-center w-full" style={{ justifyContent: 'space-between' }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}/>
            <p className='text-[#626060DE]'>{data.date}</p>
        </div>
        <div className="px-8">
            <Link href={`/doctor/${data.doctor.name.toLocaleLowerCase().split(" ").join("-")}`} className="flex gap-x-4 items-center ">
                <Image 
                    alt={data.doctor.name}
                    src={data.doctor.picture}
                    width={50}
                    height={50}
                    className='rounded-full'
                />
                <h2 className='font-bold text-2xl'>Dr. {data.doctor.name}</h2>
            </Link>
            <p className='text-[#9E9E9E] my-3'>{data.message}</p>
            <div className="gap-2 flex flex-wrap mb-4">
                {
                    data.tags.map((tag, index)=>(
                        <p key={index} className='px-4 rounded-[20px] border-[#E0E0E0] font-[roboto] text-[#000] border py-1 tag font-capitalize text-[.9rem] cursor-pointer hover:bg-[#E0E0E0] transition-all'>{tag}</p>
                    ))
                }
            </div>
        </div>
        <div className="flex overflow-hidden space-between bg-[#FAFAFA] text-center items-center w-full p-8" style={{ justifyContent: 'space-between' }}>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3333 6.69999L11.3416 6.18332L8.99996 0.666656L6.65829 6.19166L0.666626 6.69999L5.21663 10.6417L3.84996 16.5L8.99996 13.3917L14.15 16.5L12.7916 10.6417L17.3333 6.69999ZM8.99996 11.8333L5.86663 13.725L6.69996 10.1583L3.93329 7.75832L7.58329 7.44166L8.99996 4.08332L10.425 7.44999L14.075 7.76666L11.3083 10.1667L12.1416 13.7333L8.99996 11.8333Z" fill="#9E9E9E"/>
            </svg>
            <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25004 0.333344C1.33337 0.333344 0.583374 1.08334 0.583374 2.00001C0.583374 2.91668 1.33337 3.66668 2.25004 3.66668C3.16671 3.66668 3.91671 2.91668 3.91671 2.00001C3.91671 1.08334 3.16671 0.333344 2.25004 0.333344ZM12.25 0.333344C11.3334 0.333344 10.5834 1.08334 10.5834 2.00001C10.5834 2.91668 11.3334 3.66668 12.25 3.66668C13.1667 3.66668 13.9167 2.91668 13.9167 2.00001C13.9167 1.08334 13.1667 0.333344 12.25 0.333344ZM7.25004 0.333344C6.33337 0.333344 5.58337 1.08334 5.58337 2.00001C5.58337 2.91668 6.33337 3.66668 7.25004 3.66668C8.16671 3.66668 8.91671 2.91668 8.91671 2.00001C8.91671 1.08334 8.16671 0.333344 7.25004 0.333344Z" fill="#9E9E9E"/>
            </svg>
        </div>
    </Link>
  )
}

export default Card