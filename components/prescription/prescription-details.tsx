import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PrescriptionDetailsProps } from '@/lib/types';
import { ActivitySquare, Pill } from 'lucide-react';

const PrescriptionDetails = (data: PrescriptionDetailsProps) => {
  return (
    <div className="p-7 rounded-xl font-montserrat bg-[#fff] mb-5 sm:mb-0 w-full sm:w-1/3">
        <Link href="" className="grid gap-y-3 items-center ">
            <Image 
                alt={data.doctor.name}
                src={data.doctor.picture}
                width={50}
                height={50}
                className='rounded-full'
            />
            <h2 className='font-bold text-2xl'>Dr. {data.doctor.name}</h2>
            <p className='text-[#626060DE] mb-2'>{data.date}</p>
        </Link>
        <div className="gap-2 flex flex-wrap my-4">
            {
                data.tags.map((tag, index)=>(
                    <p key={index} className='px-4 rounded-[20px] border-[#E0E0E0] font-[roboto] text-[#000] border py-1 tag font-capitalize text-[.9rem] cursor-pointer hover:bg-[#E0E0E0] transition-all'>{tag}</p>
                ))
            }
        </div>
        {
            data.drugs.map((drug: { name: string; content: string })=>(
                <div className="grid gap-y-3 mb-4">
                    <p className="font-poppinsBold flex items-center gap-x-3 text-2xl">
                        <ActivitySquare width={18} />
                        <span>{drug.name}</span>
                    </p>
                    <p className='flex gap-x-3 items-center'>
                        <Pill width={18} />
                        <span>{drug.content}</span>
                    </p>
                    <p className='h-[3px] w-[4rem] bg-[#EE75F0]'/>
                </div>
            ))
        }
        <div className="gap-y-3 mb-3">
            <p className='font-poppinsMedium text-[1.3rem] mb-2'>Why we offer this?</p>
            <p>{data.reason}</p>
        </div>
        <div className="gap-y-3 mb-3">
            <p className='font-poppinsMedium text-[1.3rem] mb-2'>How to use?</p>
            <p>{data.dosage}</p>
        </div>
    </div>
  )
}

export default PrescriptionDetails