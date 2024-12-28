import React from 'react'
import { BiCheckDouble } from 'react-icons/bi'

const KeyFeature = () => {
  return (
    <section>
      <div className='container mx-auto flex gap-4 py-8'>
          <div className="w-1/2">
            <h2 className='text-5xl font-light'>Key <strong>Features</strong> That <br /> Set Us Apart</h2>

          </div>
          <div className="w-3/4">
            <ul >
              <li className='p-4 bg-whie rounded-2xl mb-2'>
                <span><BiCheckDouble className='text-4xl text-purple-500' /></span>
                <h3 className='text-2xl font-semibold'>Tailored Solutions for Every Need</h3>
                <p className=''>No two businesses are the same, and neither are our solutions. We take the time to understand your unique goals and create strategies that align perfectly with your vision. Whether it's web development, digital marketing, or content creation, our services are built for you.</p>
              </li>
              <li className='p-4 bg-whie rounded-2xl mb-2'>
                <span><BiCheckDouble className='text-4xl text-purple-500' /></span>
                <h3 className='text-2xl font-semibold'>Cutting-Edge Technology</h3>
                <p className=''>We leverage the latest tools and technologies to deliver top-tier results. From advanced frameworks in web development to AI-driven insights for digital marketing, we ensure your business stays ahead of the curve.</p>
              </li>
              <li className='p-4 bg-whie rounded-2xl mb-2'>
                <span><BiCheckDouble className='text-4xl text-purple-500' /></span>
                <h3 className='text-2xl font-semibold'>Innovation and Creativity</h3>
                <p className=''>We stay at the forefront of industry trends and technologies. Our team is dedicated to exploring innovative solutions that drive your business forward.</p>
              </li>
              <li className='p-4 bg-whie rounded-2xl mb-2'>
                <span><BiCheckDouble className='text-4xl text-purple-500' /></span>
                <h3 className='text-2xl font-semibold'>A Team You Can Trust</h3>
                <p className=''>At the heart of everything we do is a passionate, experienced team dedicated to helping your business succeed. When you work with us, you’re not just hiring a service—you’re gaining a trusted partner.</p>
              </li>
              </ul>
          </div>
        </div>
    </section>
  )
}

export default KeyFeature
