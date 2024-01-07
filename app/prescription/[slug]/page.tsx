import React from 'react';
import { Nav } from '@/components/layout';
import PrescriptionDetails from '@/components/prescription/prescription-details';
import Qrcode from '@/components/prescription/qrcode';
import { prescriptionDetails } from '@/lib/constants';

const Prescription = () => {
    return(
        <main className="bg-[#E5FAFF]">
            <Nav />
            <div className="sm:flex sm:gap-x-8 p-4 sm:p-12">
                <PrescriptionDetails {...prescriptionDetails[0]} />
                <Qrcode text="Hello" />
            </div>
        </main>
    )
};
export default Prescription;