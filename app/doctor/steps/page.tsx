"use client"

import { Nav } from '@/components/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const Steps = () => {
    const [data, setData] = React.useState({
        gender: 'male',
        weight: '',
        treatment: 'Acute',
        allergies: {
            answer: 'No',
            description: ''
        },
        symptoms: ''
    });
    const [step, setStep] = React.useState<number>(0);
    const steps = [
        <Gender gender={data.gender} setGender={(something: string)=>setData({...data, gender:something})}/>,
        <Weight weight={data.weight} setWeight={(something: string)=>setData({...data, weight:something})}/>,
        <Treatment treatment={data.treatment} setTreatment={(something: string)=>setData({...data, treatment:something})}/>,
        <Allergies allergies={data.allergies.answer} description={data.allergies.description} setAllergies={(something: string, another: string)=>setData({...data, allergies:{
            answer: something,
            description: another
        }})}/>,
        <Symptoms symptoms={data.symptoms} setSymptoms={(something: string)=>setData({...data, symptoms:something})}/>,
        <Finals />
    ];
  return (
    <div className='sm:bg-[#E5FAFF]'>
        <Nav />
        <div className="p-[1.1rem] sm:p-12">
            <div className="mb-10 w-full sm:w-[70%] mx-auto bg-[transparent] sm:bg-[#fff] rounded-[28px] w-full text-center items-center">
                <div className="sm:w-[85%] flex mx-auto sm:p-4 gap-x-2 sm:gap-x-3 items-center text-center">
                    <p className='bg-[#EE75F0] p-1 px-3 rounded-full text-[#fff]'>1</p>
                    <div className={`w-full h-2 rounded-[20px] ${step >= 1 ? 'bg-[#EE75F0]' : 'bg-[#EFF0F6]'}`}/>
                    <p className={`${step >= 1 ? 'bg-[#EE75F0] text-[#fff]' : 'bg-[#EFF0F6] text-[#000]'} p-1 px-3 rounded-full`}>2</p>
                        <div className={`w-full h-2 rounded-[20px] ${step >= 2 ? 'bg-[#EE75F0]' : 'bg-[#EFF0F6]'}`}/>
                    <p className={`${step > 2 ? 'bg-[#EE75F0] text-[#fff]' : 'bg-[#EFF0F6] text-[#000]'} p-1 px-3 rounded-full bg-[#EFF0F6]`}>3</p>
                    <div className={`w-full h-2 rounded-[20px] ${step >= 3 ? 'bg-[#EE75F0]' : 'bg-[#EFF0F6]'}`}/>
                    <p className={`${step >= 3  ? 'bg-[#EE75F0] text-[#fff]' : 'bg-[#EFF0F6] text-[#000]'} p-1 px-3 rounded-full bg-[#EFF0F6]`}>4</p>
                    <div className={`w-full h-2 rounded-[20px] ${step >= 4 ? 'bg-[#EE75F0]' : 'bg-[#EFF0F6]'}`}/>
                </div>
            </div>
            <div className="">
                {steps[step]}
            </div>
        </div>
    </div>
  )
}

export default Steps;

const Gender = ({ gender, setGender }:{gender: string; setGender: Function}) => {
    // const router = useRouter();
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <p className="font-poppinsBold text-[1.3rem]">Gender</p>
            <div className='sm:flex gap-x-5 grid gap-y-4 w-full sm:w-[fit-content] mx-auto'>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setGender("male")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${gender === "male" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>Male</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setGender("female")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 bg-[transparent] rounded-full ${gender === "female" ? 'bg-[#000]' : "bg-[transparent]"} `}/>
                    </div>
                    <p>Female</p>
                </div>
            </div>
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Cancel</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Continue</button>
            </div>
        </div>
    )
}

const Weight = ({ weight, setWeight }:{ weight: string; setWeight: Function }) => {
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <p className="font-poppinsBold text-[1.3rem]">Weight</p>
            <div className='grid grid-cols-1 my-3 sm:grid-cols-2 gap-y-3  w-full space-between mx-auto'>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setWeight("20 to 40kg | 44 to 88lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 bg-[transparent] rounded-full ${weight === "20 to 40kg | 44 to 88lbs" ? 'bg-[#000]' : "bg-[transparent]"} `}/>
                    </div>
                    <p>20 to 40kg | 44 to 88lbs</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setWeight("40 to 60kg | 88 to 132lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${weight === "40 to 60kg | 88 to 132lbs" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>40 to 60kg | 88 to 132lbs</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setWeight("60 to 80kg | 132 to 176lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${weight === "60 to 80kg | 132 to 176lbs" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>60 to 80kg | 132 to 176lbs</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setWeight("80 to 100kg | 176 to 220lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${weight === "80 to 100kg | 176 to 220lbs" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>80 to 100kg | 176 to 220lbs</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setWeight("100 to 120kg | 220 to 264lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${weight === "100 to 120kg | 220 to 264lbs" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>100 to 120kg | 220 to 264lbs</p>
                </div>
                <div className="flex gap-x-2 items-center font-montserrat cursor-pointer" onClick={()=>setWeight("more than 120kg | 220 to 264lbs")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${weight === "more than 120kg | 220 to 264lbs" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>more than 120kg | 220 to 264lbs</p>
                </div>
            </div>
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md border-2 border-[#6986DC] text-[#6986DC]">Back</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Continue</button>
            </div>
        </div>
    )
}

const Treatment = ({ treatment, setTreatment }:{treatment: string; setTreatment: Function}) => {
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <p className="font-poppinsBold text-[1.3rem]">Treatment</p>
            <div className='sm:flex gap-x-5 grid gap-y-4 w-full sm:w-[fit-content] mx-auto'>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setTreatment("Acute")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 bg-[transparent] rounded-full ${treatment === "Acute" ? 'bg-[#000]' : "bg-[transparent]"} `}/>
                    </div>
                    <p>Acute</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setTreatment("Preventive")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${treatment === "Preventive" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>Preventive</p>
                </div>
            </div>
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md  border-2 border-[#6986DC] text-[#6986DC]">Back</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Continue</button>
            </div>
        </div>
    )
}

const Allergies = ({ allergies, setAllergies, description }:{allergies: string; setAllergies: Function; description: string;}) => {
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <p className="font-poppinsBold text-[1.3rem]">Treatment</p>
            <p className='font-montserrat my-4'>Do you have any allergies or medical conditions?</p>
            <div className='sm:flex gap-x-5 grid gap-y-4 w-full sm:w-[fit-content] mx-auto'>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setAllergies("Yes")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 bg-[transparent] rounded-full ${allergies === "Yes" ? 'bg-[#000]' : "bg-[transparent]"} `}/>
                    </div>
                    <p>Yes</p>
                </div>
                <div className="flex gap-x-2 items-center text-center font-montserrat cursor-pointer" onClick={()=>setAllergies("No")}>
                    <div className="border w-[fit-content] border-[#000] p-1 rounded-full">
                        <p className={`w-2 h-2 ${allergies === "No" ? 'bg-[#000]' : "bg-[transparent]"} rounded-full`}/>
                    </div>
                    <p>No</p>
                </div>
            </div>
            <input type="text" value={description} onChange={(e)=> setAllergies(allergies, e.target.value)} className='rounded-lg border font-montserrat border-[#51545880] p-4 w-full sm:w-[70%] mx-auto my-3' style={{
                outline: 'none'
            }} />
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md border-2 border-[#6986DC] text-[#6986DC]">Back</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Continue</button>
            </div>
        </div>
    )
}

const Symptoms = ({ symptoms, setSymptoms }:{symptoms: string; setSymptoms: Function;}) => {
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <p className="font-poppinsBold text-[1.3rem]">Symptoms</p>
            <p className='font-montserrat my-3'>What symptoms are you experiencing?</p>
            <input type="text" value={symptoms} onChange={(e)=> setSymptoms(e.target.value)} placeholder='Search, e.g, Headache' className='rounded-lg border font-montserrat border-[#51545880] p-4 w-full sm:w-[70%] mx-auto my-3' style={{
                outline: 'none'
            }} />
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md border-2 border-[#6986DC] text-[#6986DC]">Back</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Continue</button>
            </div>
        </div>
    )
};

const Finals = () =>{
    return(
        <div className="w-full sm:w-[70%] grid gap-y-5 mx-auto sm:p-6 bg-[#fff] rounded-2xl text-center">
            <div className="sm:flex items-center text-center sm:p-6">
                <Image 
                    src="/_static/images/thanks.svg"
                    alt="Thanks"
                    width={200}
                    height={200}
                />
                <p className="text-[#6986DC] font-poppinsBold text-2xl">Your inputs have been sent!</p>
            </div>
            <div className="sm:flex gap-x-7 grid gap-y-4 mt-5 w-full sm:w-[fit-content] mx-auto">
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md border-2 border-[#6986DC] text-[#6986DC]">Go back to search</button>
                <button className="font-montserrat font-bold px-[3rem] py-2 text-[.9rem] rounded-md bg-[#6986DC] text-[#fff]">Go to prescription</button>
            </div>
        </div>
    )
}