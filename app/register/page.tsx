"use client"

import { Nav } from '@/components/layout'
import { Upload } from 'lucide-react';
import React from 'react'

const Register = () => {
    const uploadRef = React.useRef(null);
    const [file, setFile] = React.useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
          console.log("Uploading file...");
    
          const formData = new FormData();
          formData.append("file", file);
        }
    };
    
  return (
    <main className="bg-[#E5FAFF]">
        <Nav />
        <div className="p-[1.3rem] sm:p-16">
            <div className="border rounded-xl max-w-[20rem] sm:max-w-full mx-[auto] p-[1.1rem] sm:p-8 bg-[#fff] border-[#E2E4E5]">
                <p className="font-poppinsMedium text-2xl mb-2">Personal Data</p>
                <p className="text-[#575F6E] font-montserrat mb-6">Specify exactly as in your passport</p>
                <div className="font-montserrat grid gap-y-4">
                    <div className="">
                        <p className="font-[500]">First name</p>
                        <input type="text" className='w-full py-[.7rem] px-[2rem] border-b' style={{ outline: 'none' }} />
                    </div>
                    <div className="">
                        <p className="font-[500]">Second name</p>
                        <input type="text" className='w-full py-[.7rem] px-[2rem] border-b' style={{ outline: 'none' }}  />
                    </div>
                    <div className="">
                        <p className="font-[500]">Expertise (e.g. Dentist, physician)</p>
                        <input type="text" className='w-full py-[.7rem] px-[2rem] border-b' style={{ outline: 'none' }}  />
                    </div>
                    <div className="">
                        <p className="font-[500]">Hospital of residence</p>
                        <input type="text" className='w-full py-[.7rem] px-[2rem] border-b' style={{ outline: 'none' }}  />
                    </div>
                    <div className="">
                        <p className='mb-5 font-[500]'>Medical License</p>
                        <div className="cursor-pointer border rounded-md items-center text-center border-dashed border-[#9E9E9E] bg-[#FAFAFAB2] p-6 grid" onClick={()=> uploadRef.current.click()}>
                            <span className='bg-[#136DC71A] rounded-[20px] w-[fit-content] px-[.7rem] py-[.5rem] mx-auto mb-3'><Upload  width={18} className='text-[#136DC7]'/></span>
                            <p>Click here to upload or drop it here</p>
                            <input type="file" className="hidden" ref={uploadRef} onChange={handleFileChange} hidden={true} />
                        </div>
                        <div className="flex gap-x-5 w-[fit-content] my-[2rem] font-bold mx-[auto]">
                            <button className='border border-[#4D89CF] text-[#6087D8] rounded-md px-[2rem] py-[1rem]'>Cancel</button>
                            <button className="bg-[#4D89CF] text-[#fff] rounded-md px-[2rem] py-[1rem]">Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Register