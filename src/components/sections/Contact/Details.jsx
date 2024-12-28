import React from 'react'
import { BiHome, BiPhone } from 'react-icons/bi'
import { BsMailbox } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaLocationArrow } from 'react-icons/fa'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'

const Details = () => {
  return (
    <section>
        <div className="container mx-auto py-8 ">
          <div className=" flex justify-between p-8 border rounded-3xl shadow-lg bg-white">
          <div className="">
            <h2 className='text-4xl font-semibold mb-8'>Contact Details</h2>
          <div className="flex flex-col gap-6 justify-center  ">
            <div className="flex items-center gap-4">
                <div className=" rounded-full bg-violet-500 p-4 text-white text-3xl "><BiHome /></div>
                <div className="">
                  <h3 className='text-xl font-semibold'>Address</h3>
                <p className='text-base text-neutral-800 max-w-[500px]'>No. 33 3rd Floor, 33A, Building, Rama Rd, Industrial Area, Najafgarh Road Industrial Area, New Delhi, Delhi, 110015</p>
                </div>
          </div>
          <div className="flex items-center gap-4">
              <div className=" rounded-full bg-violet-500 p-4 text-white text-3xl "><BiPhone /></div>
              <div className="">
                <h3 className='text-xl font-semibold'>Phone</h3>
              <p className='text-base text-neutral-800'>+91 99107 41417</p>
              </div>
                        </div>
           <div className="flex items-center gap-4">
            <div className=" rounded-full bg-violet-500 p-4 text-white text-3xl "><MdOutlineEmail /></div>
            <div className="">
              <h3 className='text-xl font-semibold'>Email</h3>
            <p className='text-base text-neutral-800'>info@mstyenterprises.com</p>
            </div>
           </div>
          </div>
          </div>
          <div className="">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14003.856730650416!2d77.1518712!3d28.6607911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d037977ecfe2b%3A0xeaaac29c89049faa!2sMsty%20Enterprises!5e0!3m2!1sen!2sin!4v1733728214983!5m2!1sen!2sin" width="600" height="450" className='' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div>
          </div>
        </div>
    </section>
  )
}

export default Details
