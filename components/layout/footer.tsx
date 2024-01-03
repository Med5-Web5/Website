import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, MapPin } from 'lucide-react';
import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 font-montserrat bg-[#E5FAFF]'>
      <div className="px-[1.5rem] py-[4rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-[2rem] sm:gap-x-[2.5rem]">
            <div className="flex flex-col gap-y-4">
              <p className='text-sm ,b-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti animi veritatis voluptate consequuntur quibusdam odit natus ipsa at distinctio a nisi consectetur.</p>
              <div className="flex text-[#6986DC] gap-x-[1rem]">
                <Facebook width={18} />
                <Twitter width={18} />
                <Linkedin width={18}  />
                <Instagram width={18} />
              </div>
            </div>
            <div className="">
              <h2 className='text-[#6986DC] font-bold '>Quick link</h2>
              <div className="text-[#515458] gap-y-[2rem] text-sm">
                <p>Donate</p>
                <p>Sign in</p>
                <p>Services</p>
                <p>How it works</p>
                <p>About</p>
              </div>
            </div>
            <div className="">
              <h2 className='text-[#6986DC] font-bold '>Contact</h2>
              <div className="text-[#515458] gap-y-4 text-sm">
                <p className='flex gap-x-3'><Phone width={18} className='text-[#6986DC]'/> (234) 80123456</p>
                <p className='flex gap-x-3'><Mail width={18} className='text-[#6986DC]'/> med5@gmail.com</p>
                <p className='flex gap-x-3'><MapPin width={18} className='text-[#6986DC]'/> 2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              </div>
            </div>
            <div className="items-center">
              <p className='text-[#515458] text-[.7rem] mb-4'>You can contact us by sending your email to us.</p>
              <div className="bg-[#fff] rounded-[30px] overflow-hidden h-[3rem] w-[90%]">
                <input type="text" placeholder='Your email' className='h-full text-[.9rem] relative w-full outline-[none] pl-4' style={{ outline: 'none' }} />
              </div>
            </div>
          </div>
      </div>
      <hr />
      <p className="font-montserrat text-center my-4 text-[.9rem]">&copy; {new Date().getFullYear()} Med 5 | Powered by Web5</p>
    </div>
  )
}

export default Footer;