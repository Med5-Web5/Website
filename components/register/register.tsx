"use client"
import {useForm} from 'react-hook-form'
import copy from "copy-to-clipboard"
import * as yup from 'yup'
import { useEffect, useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'

interface IRegister{
  certificate: any;
  expertise: string;
  name: string;
  residency: string;
  surname: string;
}

function App() {

      const schema = yup.object().shape({
        name: yup.string().required(),
        surname: yup.string().required(),
        expertise: yup.string().required(),
        residency: yup.string().required(),
        certificate: yup.mixed().required(),

      })
    
     const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const [connect, setConnect] = useState(false)
    const [dataObj, setDataObj] = useState<IRegister|null>(null);
    const [docIssuerDID,setDocumentIssuerDID] = useState<{did:string|undefined}|null>(null);

    const onSubmit = (data: IRegister) => {
			console.log(data); // Log the form data
			setDataObj(data);
		};

      useEffect(() => {
       ( async function init (){
          const { Web5 } = await import('@web5/api/browser');
          const { DidKeyMethod } = await import("@web5/dids");
          const docIssuerDID = await DidKeyMethod.create();
          console.log(docIssuerDID);
          setDocumentIssuerDID(docIssuerDID);
        })();
      },[connect])
    

      const connectDid =async ()=>{
        setConnect(true)
        copy(docIssuerDID?.did !);
        console.log(docIssuerDID?.did);

      }
     
  
    return (
			<div>
				<>
					<div>
						{!connect ? (
							<div>
								<button type="button" onClick={connectDid}>
									Connect to Agent
								</button>
							</div>
						) : (
							<div>
								<button type="button">Connected</button>
								<p>Your DID is Copied</p>
								<p>{docIssuerDID?docIssuerDID.did?.slice(0,10) +""+ docIssuerDID.did?.slice(docIssuerDID.did.length -10,-1) :""}</p>
							</div>
						)}
					</div>

					<form onSubmit={handleSubmit(onSubmit)}>
						<input type="text" {...register("name")} placeholder="Name" />
						<input type="text" {...register("surname")} placeholder="Surname" />
						<input
							type="text"
							{...register("expertise")}
							placeholder="Expertise"
						/>
						<input
							type="text"
							{...register("residency")}
							placeholder="Residency"
						/>
						<input type="file" {...register("certificate")} />
						<input type="submit" />
					</form>
				</>
			</div>
		);

}


export default App;
