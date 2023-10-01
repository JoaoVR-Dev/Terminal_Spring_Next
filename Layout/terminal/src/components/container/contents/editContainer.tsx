'use client'
import Button from '@/components/layers/button'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function EditContainer() {

  interface containerObj {
    id: number;
    numberContainer: string;
    cliente: string;
    typeContainer: string;
    statusContainer: string;
    categoriaContainer: string;
  }

  const [containerController, setContainerController] = useState<containerObj>({
      id: 0,
      numberContainer: '',
      cliente: '',
      typeContainer: '',
      statusContainer: '',
      categoriaContainer: '',
  });
  const [listContainer, setListContainer] = useState<containerObj[]>([]);
  
  useEffect(() =>{
    const findContainerList = async () => {
      try{
        const response = await axios.get('http://localhost:8080/container/findall');
        if(response.status === 200){
          setListContainer(response.data)
          }else{
          console.error(response.status);
        }
      }catch(error){
        console.error(error);
      }
    };
    findContainerList();
    const timeList = setInterval(findContainerList, 1000);
    return () => clearInterval(timeList);
  },[]);

  const handleSelectChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    if((parseInt(event.target.value) - 1) >= 0){
    let id = event.target.value;
    try{
    const response = await axios.get('http://localhost:8080/container/find/' + id);
    if(response.status === 200){
      setContainerController(response.data)
    }else{
      console.error(response.status)
    }
  }catch(error){
    console.error(error);
  }
    }else{
      setContainerController({
      id: 0,
      numberContainer: '',
      cliente: '',
      typeContainer: '',
      statusContainer: '',
      categoriaContainer: '',
      })
    }
  };

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

  const editContainer = async (data: containerObj) => {
    const response = await axios.put(
      'http://localhost:8080/container/edit/' + data.id, 
      data
    );
    return response.data
  }
  
  return (
    <div className={`
     flex flex-col mr-10 border-8 border-white border-solid rounded-2xl space-y-2 h-auto p-4 w-72
    `}>
      <h1 className='titulosconc'>Edição</h1>
      <div>
      <label className={`
      sr-only
      `}></label>
        <select className={`
       block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer
       `}
       value={containerController.id}
       onChange={handleSelectChange}
       >
        <option selected value='0'>- none -</option>
        {listContainer.map((container) =>(
          <option key={container.id} value={container.id}>
            {container.id} - {container.numberContainer}
          </option>
        ))}
        </select>
    </div>
      <div className='relative'>
      <input className={`
      block w-full px-0 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer
      `} placeholder=' ' 
      type='text'
      value={containerController.numberContainer}
      onChange={(e) => handleInputChange(e, 'numberContainer')}
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
      value={containerController.cliente}
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
      value={containerController.typeContainer}
      onChange={(e) => handleInputChange(e, 'typeContainer')}
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
      value={containerController.statusContainer}
      onChange={(e) => handleInputChange(e, 'statusContainer')}
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
      value={containerController.categoriaContainer}
      onChange={(e) => handleInputChange(e, 'categoriaContainer')}
      />
      <label className={`
      absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6
      `}>Categoria do Container</label>
      </div>
      <Button texto='Editar' onclick={() => editContainer(containerController)}/>
    </div>
  )
}
