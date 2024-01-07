import { prescriptions } from '@/lib/constants'
import React from 'react'
import Card from './card'

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 p-[2.5rem]">
      {
        prescriptions.map((prescription, index)=>(
          <Card {...prescription} key={index} />
        ))
      }
    </div>
  )
}

export default Hero