import React from 'react'
import { BiCalendar } from 'react-icons/bi'
import { blog1, blog2, blog3 } from '../../../assets'
import { NavLink } from 'react-router-dom'

const Blogs = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="text-center">
          <h2 className='text-3xl lg:text-4xl font-semibold'>Blogs & News</h2>
          <p className='text-xs lg:text-sm max-w-[600px] mx-auto text-neutral-600 mt-2'>
            Stay updated with our latest articles and news about web development, design trends, and technology insights.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
          <div className="p-2">
            <img src={blog1} alt="Website Tips 2024 Msty enteprises" className='w-full rounded-2xl mb-2 ' />
            <span className='flex items-center gap-2 '><BiCalendar />03-12-2024</span>
            <h5 className='text-xl font-semibold'>The Secret to Building a High-Performing Website in 2024</h5>
            <p className='text-sm text-neutral-600 mb-4 mt-2'>Learn about the must-have features, trends, and optimization tips that every website needs to succeed in the modern digital age.</p>
            <NavLink to="/blogs/1" >Read</NavLink>
          </div>
          <div className="p-2">
            <img src={blog2} alt="Website Tips 2024 Msty enteprises" className='w-full rounded-2xl mb-2 ' />
            <span className='flex items-center gap-2 '><BiCalendar />03-12-2024</span>
            <h5 className='text-xl font-semibold'>Digital Marketing Hacks Every Small Business Should Know</h5>
            <p className='text-sm text-neutral-600 mb-4 mt-2'>Discover actionable tips to maximize your online visibility and grow your audience without breaking the bank</p>
            <NavLink to="/blogs/1" >Read</NavLink>
          </div>
          <div className="p-2">
            <img src={blog3} alt="Website Tips 2024 Msty enteprises" className='w-full rounded-2xl mb-2 ' />
            <span className='flex items-center gap-2 '><BiCalendar />03-12-2024</span>
            <h5 className='text-xl font-semibold'>Why Your Business Needs Responsive Web Design</h5>
            <p className='text-sm text-neutral-600 mb-4 mt-2'>Understand how responsive design can enhance user experience, improve SEO rankings, and boost conversion rates.</p>
            <NavLink to="/blogs/1" >Read</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs
