import React from 'react'

const Qrcode = (data: { text: string }) => {
  return (
    <div className="p-8 grid rounded-xl bg-[#fff] font-montserrat text-center items-center h-auto w-full sm:w-2/3">
        <p>The QR Code is to be scanned by a licensed Pharmacist to verify your prescriptions before purchase.</p>
    </div>
  )
}

export default Qrcode