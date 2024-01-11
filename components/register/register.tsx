import {useForm} from 'react-hook-form'
import copy from "copy-to-clipboard"
import * as yup from 'yup'
import { useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import {Web5} from '@web5/api'
import {DidKeyMethod} from '@web5/dids'

function App() {

      const schema = yup.object().shape({
        name: yup.string().required(),
        surname: yup.string().required(),
        expertise: yup.string().required(),
        recidency: yup.string().required(),
        certificate: yup.mixed().required(),

      })
    
     const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

    const [connect, setConnect] = useState(false)
    const [dataArray, setDataArray] = useState([]);

    const onSubmit = (data) => {
      console.log(data); // Log the form data
      setDataArray([...dataArray, data]); 
      }

    

      const connectDid =async ()=>{
        setConnect(true)
        const docIssuerDID = await DidKeyMethod.create();
        copy(docIssuerDID.did);
        console.log(docIssuerDID.did);

      }
     
  
    return (
      <div>

            <><div>
        {!connect ? (
          <div>
            <button type="button" onClick={connectDid}>Connect to Agent</button>
            
          </div>) :

          (<div>
            <button type="button">Connected</button>
            <p>Your DID is Copied</p>
            
          </div>)}
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="name"

            {...register('name')}
            placeholder="Name" />
          <input
            type="text"
            name="surname"

            {...register('surname')}

            placeholder="Surname" />
          <input
            type="text"
            name="expertise"

            {...register('expertise')}

            placeholder="Expertise" />
          <input
            type="text"
            name="recidency"

            {...register('recidency')}

            placeholder="Recidency" />
          <input
            type="file"
            name="certificate"
            {...register('certificate')} />
          <input type='submit' />
        </form></>
            
       </div>
  );

}


export default App;
