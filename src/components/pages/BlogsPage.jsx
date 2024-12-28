import React from 'react'
import Blogs from '../sections/Home/Blogs'  // Renaming using 'as'
import Banner from '../sections/Service/Banner'

const BlogsPage = () => {
  return (
    <>
      <Banner />
      <Blogs />  {/* Using the renamed component */}
    </>
  )
}

export default BlogsPage
