'use client'
import Button from '@/components/layers/button'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'


export default function InsertContainer() {
  interface containerObj{
    numberContainer: string;
    cliente: string;
    typeContainer: string;
    statusContainer: string;
    categoriaContainer: string;
  }
  
  const createContainer = async (data: containerObj) => {
    const response = await axios.post(
      'http://localhost:8080/container/add', 
      data
    );
    console.log(response.status);
    setContainerController({
      numberContainer: '',
      cliente: '',
      typeContainer: '',
      statusContainer: '',
      categoriaContainer: '',
    });
    return response.data
  }
    const [ContainerController, setContainerController] = useState<containerObj>({
      numberContainer: '',
      cliente: '',
      typeContainer: '',
      statusContainer: '',
      categoriaContainer: '',
    });

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>,
      inputName: keyof containerObj
    ) => {
      const newContainer = event.target.value;
      
      setContainerController((prevInputValues:any) => ({
        ...prevInputValues,
        [inputName]: newContainer,
      }));
    }
    return (
     <div className={`
     flex-initial flex-col border-white border-8 rounded-2xl w-72 mr-10 h-auto space-y-4 p-4
     `}>
       <h2 className="titulosconc">Inserir</h2>
       <div className='relative'>
       <input className={`
       block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
       `} placeholder=' ' 
       type='text'
       value={ContainerController.numberContainer}
       onChange={(e) => handleInputChange(e, 'numberContainer')}
       maxLength={11}
       />
       <label className={`
       absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
       `}>Numero do Container</label>
       </div>
       <div className='relative'>
       <input className={`
       block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
       `} placeholder=' ' 
       type='text'
       value={ContainerController.cliente}
       onChange={(e) => handleInputChange(e, 'cliente')}
       />
       <label className={`
       absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
       `}>Cliente</label>
       </div>
       <div className='relative'>
       <input className={`
       block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
       `} placeholder=' ' 
       type='text'
       value={ContainerController.typeContainer}
       onChange={(e) => handleInputChange(e, `typeContainer`)}
       />
       <label className={`
       absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
       `}>Tipo de Container</label>
       </div>
       <div className='relative'>
       <input className={`
       block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
       `} placeholder=' ' 
       type='text'
       value={ContainerController.statusContainer}
       onChange={(e) => handleInputChange(e, `statusContainer`)}
       />
       <label className={`
       absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
       `}>Status do Container</label>
       </div>
       <div className='relative'>
       <input className={`
       block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
       `} placeholder=' ' 
       type='text'
       value={ContainerController.categoriaContainer}
       onChange={(e) => handleInputChange(e, `categoriaContainer`)}
       />
       <label className={`
       absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
       `}>Categoria do Container</label>
       </div>
       <Button texto='Inserir' onclick={() => createContainer(ContainerController)}/>
     </div>
   )
  }
