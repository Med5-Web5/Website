import Image from 'next/image'
import React from 'react'

const Something = () => {
  return (
    <div className="sm:flex block gap-y-[3rem] min-h-screen sm:gap-x-[4rem] items-center bg-[#E5FAFF] p-7 sm:p-12">
      <Image 
        src="/_static/images/something.svg"
        alt="Something"
        width={150}
        height={150}
        className="sm:w-1/2 w-full mb-[2rem]"
      />
      <div className="text-[#515458] sm:w-1/2 px-4">
          <h1 className="font-montserrat text-[#6986DC] font-bold text-lg">Forget shady scribbles & suspicious meds! Med 5 makes getting prescriptions easy & safe for everyone:</h1>
          <p>Just 3 steps:</p>
          <ol className='list-decimal'>
              <li>Tell your doctor "Yes!" to Med 5. No more paper slips, just secure digital prescriptions delivered straight to your phone.</li>
              <li>See it in your Med 5 app. No more scrambling for prescriptions, they're always there, organized and ready.</li>
              <li>Take it to any pharmacy. No more wondering if it's real, a quick scan verifies your prescription instantly.</li>
          </ol>
          <p>Med 5 keeps you safe & your meds legit. Say goodbye to forgery, hello to peace of mind! ✌️ Plus, it benefits everyone: safer meds, less crime, lower healthcare costs.</p>
      </div>
    </div>
  )
}

export default Something