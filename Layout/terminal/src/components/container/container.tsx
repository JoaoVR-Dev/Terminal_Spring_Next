import React from 'react'
import InsertContainer from './contents/insertContainer'
import EditContainer from './contents/editContainer'
import DeleteContainer from './contents/deleteContainer'
import GetContainer from './contents/getContainer'

export default function Container() {
  return (
    <div className={`
    flex flex-col border-4 border-white pb-10
    `}>
      <div className={`
      flex justify-center mt-10
      `}>
      <h1 className={`
       text-ellipsis text-center text-9xl font-sans
      `}>Container</h1>
      </div>
      <div className={`
      flex flex-row justify-center items-center mt-20
      `}>
      <InsertContainer/>
      <EditContainer/>
      <DeleteContainer/>
      </div>
      <GetContainer/>
      </div>
  )
}
