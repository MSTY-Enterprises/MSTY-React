import React from 'react'
import Banner from '../sections/Services/Banner'
import Service from '../sections/Services/Service'
import Technologies from '../sections/Services/Technologies'
import KeyFeature from '../sections/Services/KeyFeature'
import Faq from '../sections/Services/Faq'
import WhyUs from '../sections/Home/WhyUs'
import Blogs from '../sections/Home/Blogs'
import Contact from '../sections/Home/Contact'
import HowWeWork from '../sections/Services/HowWeWork'

const Services = () => {
  return (
    <>
     <Banner />
     <Service />
     <KeyFeature />
     <HowWeWork />
     <Technologies />
     <WhyUs />
     <Faq />
     <Blogs />
     <Contact />

     
    </>
  )
}

export default Services
