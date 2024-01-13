"use client"
import {useForm} from 'react-hook-form'
import copy from "copy-to-clipboard"
import * as yup from 'yup'
import { FormEvent, useEffect, useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import { DoctorsProfileStore } from '@/lib/web5/store';
import { convertImageToBase64 } from '@/lib/utils';
import { Web5 } from "@web5/api";

interface IRegister {
	certificate: any;
	expertise: string;
	name: string;
	hospitalOfResidence: string;
	surname: string;
}

function App() {
    const [web5, setWeb5] = useState<any>(null);
		const [connect, setConnect] = useState(false);
		const [dataObj, setDataObj] = useState<IRegister | null>(null);
		const [docIssuerDID, setDocumentIssuerDID] = useState<string>("");
    const [imageValue, setImageValue] = useState<string>("");


    const schema = yup.object().shape({
      name: yup.string().required(),
      surname: yup.string().required(),
      expertise: yup.string().required(),
      hospitalOfResidence: yup.string().required(),
      certificate: yup.mixed().required(),
    });
  
    const { register, handleSubmit ,setValue} = useForm({ resolver: yupResolver(schema) });

    // useEffect(() => {
    //   async function init (){
    //     try {
		// 			// const { DidKeyMethod } = await import("@web5/dids");
		// 			// const docIssuerDID = await DidKeyMethod.create();
		// 			const { web5, did } = await Web5.connect({
		// 				sync: "5s",
		// 			});
		// 			// console.log(did);
		// 			setWeb5(web5);
		// 			setDocumentIssuerDID(did);
		// 		} catch (error) {
    //       console.error(error);
    //     }
    //   };
    //   init().then(()=>console.log("web5 initialized"));
    // },[connect])
    

    const connectDid =async ()=>{
      setConnect(true)
      copy(docIssuerDID !);
      const { web5, did } = await Web5.connect({
					sync: "5s",
      });
      // console.log(did);
      setWeb5(web5);
      setDocumentIssuerDID(did);
      console.log(docIssuerDID);

    }
    const handleFileChange = (e: any) => {
      const selectedFile = e.target?.files[0];

      if (selectedFile) {
        convertImageToBase64(selectedFile, (base64String: string) => {
          // Set the base64 string in the form field
          setValue("certificate", base64String);
          setImageValue(base64String);
        });
      }
    };

    const onSubmit = async (data: IRegister) => {
      setDataObj({...data,certificate:imageValue});
      const nProfile = new DoctorsProfileStore(web5);
      //store data in dwn
      const profile = await nProfile.createDoctorsProfile(data);
      console.log("hello from profile",profile);
    };

  
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
								<p>
									{docIssuerDID
										? docIssuerDID?.slice(0, 10) +
										  "" +
										  docIssuerDID?.slice(docIssuerDID.length - 10, -1)
										: ""}
								</p>
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
							{...register("hospitalOfResidence")}
							placeholder="Hospital Of Residency"
						/>
						<input
							type="file"
							{...register("certificate")}
							onChange={handleFileChange}
						/>
						<input type="submit" />
					</form>
				</>
			</div>
		);

}


export default App;
