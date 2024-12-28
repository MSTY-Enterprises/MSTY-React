import React from 'react'
import { NavLink } from 'react-router-dom'
import { logo } from '../../assets' 

const Navbar = () => {
  return (
    <header className="header p-4 w-full fixed top-0 left-0 z-50">  
      <div className="container m-auto flex items-center justify-between font-medium text-base bg-slate-50 p-2 border rounded-xl shadow-md ">
      <div className="logo mx-4 cursor-pointer">
        <a href="/"><img src={logo} alt="MSTY Enterprises" className='w-10 h-10 lg:w-14 lg:h-14' /></a>
      </div>
      <div className="justify-center items-center gap-8 hidden md:flex">
      <nav >
        <ul className="flex">
         
          <li><NavLink className="cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-md" to="/about">About</NavLink></li>
          <li><NavLink className="cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-md" to="/services">Services</NavLink></li>
          <li><NavLink className="cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-md" to="/blogs">Blogs</NavLink></li>
          <li><NavLink className="cursor-pointer hover:bg-slate-300 px-4 py-2 rounded-md" to="/career">Careers</NavLink></li>
        </ul>
      </nav>
      <div className="contact-btn mr-4  ">
        <button className='bg-red-600 text-slate-50 px-4 py-2 rounded-xl'><NavLink to="/contact" >Contact Us </NavLink></button>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
