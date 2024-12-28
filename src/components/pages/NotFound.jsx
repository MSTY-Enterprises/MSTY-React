import React from 'react'
import Navbar from '../elements/Navbar'
import Footer from '../elements/Footer'
import Animation from '../elements/Animation'

const NotFound = () => {
  return (
    <>
    <Navbar />
    <div className=' h-[calc(100vh-256px)] flex flex-col justify-center items-center'>
        <span className='text-3xl text-red-500'>404</span><br /> 
       <h1 className='text-6xl font-semibold'>
        Page Not Found.
       </h1>
       <p className='text-neutral-600 mt-4'>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
       </p>
    </div>
    <div className="flex justify-center my-4"><Animation /></div>
    
    <Footer />
    </>
  )
}

export default NotFound
