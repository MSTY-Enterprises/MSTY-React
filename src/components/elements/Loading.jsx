import React from 'react'
import { logo } from '../../assets'

const Loading = () => {
  return (
    <>
        <div className="w-full h-screen flex items-center justify-center">
           <div className="relative border rounded-full bg-white">
           <img src={logo} alt=""  className='w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
           <div className="animate-spin rounded-full h-32 w-32 border-t-2  border-b-2 border-blue-400"></div>
           </div>
        </div>
    </>
  )
}

export default Loading
