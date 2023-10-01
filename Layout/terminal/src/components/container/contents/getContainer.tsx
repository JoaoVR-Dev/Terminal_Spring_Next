import Button from '@/components/layers/button'
import React, { useState } from 'react'
import axios from 'axios'
import { error } from 'console';

export default function GetContainer() {
  interface containerObj{
    id: number;
    numberContainer: string;
    cliente: string;
    typeContainer: string;
    statusContainer: string;
    categoriaContainer: string;
  }
  
  return (
        <div className={`
    flex justify-center items-center mt-10
    `}>
      <button className={`
      relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
     w-8/12
      `}
      >
        <span className={`
        relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full
        `}>
          Lista de Container
        </span>
      </button>
    </div>
  )
}
