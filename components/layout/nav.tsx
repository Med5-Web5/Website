"use client"

import React from 'react'
import { Suspense } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoveRight } from 'lucide-react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/web-doctor': {
    name: 'Web Doctor',
  },
  '/prescriptions': {
    name: 'Prescriptions',
  },
  '/register': {
    name: 'Register as a doctor',
  },
};

const Nav = () => {
  return (
    <div className="bg-[transparent] "> 
      <div className="hidden sm:block">
        <div className="w-[80%] bg-[#fff] rounded-b-md flex flex-row space-between items-center text-center px-[3rem] mx-auto h-[5rem]" style={{ justifyContent: 'space-between' }}>
          <h1 className='text-[#6986DC] font-montserrat text-lg font-black'>Med<span className='text-[#EE75F0]'>5</span></h1>
          <div className="flex space-x-0">
            <Suspense fallback={null}>
              {Object.entries(navItems).map(([path, { name }]) => {
                return <NavItem key={path} path={path} name={name} />;
              })}
            </Suspense>
          </div>
          <button className='flex rounded-md flex-row w-[fit-content] gap-x-2 text-[#fff] bg-[#6986DC] p-3 px-4'>
              <p>Connect Wallet</p> 
              <MoveRight />
          </button>
        </div>
      </div>
      <div className="block sm:hidden h-[2rem] ">
        <p>Hello guys</p>
        <div className="w-[2rem] h-[2rem] gap-y-[.5rem]">
          <span className='bg-[#fff] block w-full h-[.2rem] rounded-lg' />
          <span className='bg-[#fff] block w-[65%] h-[.2rem] rounded-lg' />
          <span className='bg-[#fff] block w-[30%] h-[.2rem] rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Nav;

const NavItem =({ name, path }: { name: string, path: string }) => {

  let pathname = usePathname() || '/';
  const isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      prefetch={true}
      className={clsx(
        'transition-all flex text-[#6986DC] font-poppinsMedium font-bold align-middle',
      )}
    >
      <span className="relative py-1 mx-3">
        {name}
        {path === pathname ? (
          <div
            className="absolute h-[2px] top-7 inset-0 bg-[#EE75F0]"
          />
        ) : null}
      </span>
    </Link>
  );
}
