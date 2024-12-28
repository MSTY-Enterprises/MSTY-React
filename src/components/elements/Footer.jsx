import React from 'react'
import { BsMailbox } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { HiOutlinePhone, HiPhone } from 'react-icons/hi'
import { IoMailOutline } from 'react-icons/io5'
import { TiPhoneOutline } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-blue-400 via-violet-300 to-purple-300 text-neutral-800 py-4">
      <img src={logo} alt="Msty Enterprises" className=' absolute w-40 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50' />
      <div className="container mx-auto  flex flex-col lg:flex-row gap-2 p-4">
           <div className="lg:w-1/3 p-2">
            <h5 className='text-2xl font-semibold'>About Us</h5>
            <p className='text-sm max-w-[400px]'>
              MSTY Enterprises is a leading provider of web development, mobile app development, and digital marketing services. We specialize in creating innovative solutions that help businesses thrive in the digital world.

            </p>
           </div>
           <div className=" lg:w-1/3">
            <h5 className='text-2xl font-semibold'>Quick Links</h5>
            <div className="flex gap-8">
            <ul className='flex flex-col gap-1 p-2'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About Us</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/contact">Career</NavLink></li>
              <li><NavLink to="/contact">Blogs</NavLink></li>
              <li><NavLink to="/contact">Privacy & Pocilies</NavLink></li>
              
              </ul>
            <ul className='flex flex-col gap-1 p-2'>
              <li><NavLink to="/service/Web Development">Web Development</NavLink></li>
              <li><NavLink to="/service/Content Creation">Content Creation</NavLink></li>
              <li><NavLink to="/service/Digital Marketing">Digital Marketing</NavLink></li>
              <li><NavLink to="/service/Business Solution">Business Solution</NavLink></li>
              </ul> 
            </div>
           </div>
           <div className="lg:w-1/3">
            <h5 className='text-2xl font-semibold'>Contact Us</h5>
            <p>
              <a href="mailto:info@msty.com" className='flex items-center gap-2' ><IoMailOutline /> info@mstyenterprises.com</a>
              <a href="tel:9910741417" className='flex items-center gap-2'><HiOutlinePhone /> +91 99107 41417</a>
              <a href="tel:9910741417" className='flex items-center gap-2 max-w-[400px]'><CiLocationOn className='text-3xl' /> <span>33/33A, Tower No. 6, 3rd Floor, Rama Road, Industrial Area, New Delhi 110015</span></a>
              <div className="">
                <h5 className='font-semibold my-2'>Subscribe Newsletter</h5>
                <input type="text" placeholder='Enter Your Email' className='p-2 px-4 w-2/3 rounded-full' />
                <button className='bg-gradient-to-tr from-blue-400 via-violet-400 to-purple-400 text-white px-4 py-1 rounded-3xl -translate-x-[105%]'>Subscribe</button>
              </div>
            </p>
           </div>
      </div>

      <div className="flex justify-center">
        <p>MSTY Enterprises Copyright © {new Date().getFullYear()} </p>
      </div>
    </footer>
  )
}

export default Footer
