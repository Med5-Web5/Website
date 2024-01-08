import { Nav } from '@/components/layout'
import React from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { doctors } from '@/lib/constants';
import Link from 'next/link';

const Doctor = () => {
  return (
    <main className="bg-[#fff]">
      <Nav />
      <div className="min-h-screen bg-[#FFF] p-4">
        <div className="sm:p-12 sm:max-w-[80%] mx-auto">
            <div className="mb-8 sm:flex w-full grid gap-y-4 sm:gap-x-4 sm:w-[90%] mx-auto">
                <div className="bg-[#F2F4F8] rounded-md flex px-3 w-full sm:w-[12rem] items-center text-center">
                    <Search />
                    <input type="text" name="" id="" className='h-[3.5rem] ml-3 bg-[transparent] font-montserrat w-full' style={{ outline: 'none' }}/>
                </div>
                <select name="" id="" className='border-2 border-[#F2F4F8] rounded-lg p-3 w-full'>
                    <option value="1 category selected">1 category selected</option>
                    <option value="2 category selected">2 category selected</option>
                    <option value="3 category selected">3 category selected</option>
                </select>
                <button className="bg-[#6986DC] text-[#fff] w-full py-3 sm:p-4 font-montserrat rounded-lg sm:px-4">Search</button>
            </div>
            <div className="grid gap-y-4">
                {
                    doctors.map((doctor)=>(
                        <Link href={`/doctor/${doctor.name.toLocaleLowerCase().split(" ").join("-")}`} className="flex gap-x-4">
                            <Image 
                                src={doctor.picture}
                                alt='Something'
                                width={60}
                                height={60}
                            />
                            <div className="items-center">
                                <p className='font-montserrat font-medium text-[1.3rem] mb-1'>{doctor.name}</p>
                                <div className="flex gap-x-2 font-montserrat text-[#999FAA]">
                                    <p>{doctor.title}</p> <span>|</span> <p>{doctor.date}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
      </div>
    </main>
  )
}

export default Doctor