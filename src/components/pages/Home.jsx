import React from 'react'
import HeroSection from '../sections/Home/HeroSection'
import ServiceSection from '../sections/Home/ServiceSection'
import Mission from '../sections/Home/Mission'
import OurPartner from '../sections/Home/OurPartner'
import AboutUs from '../sections/Home/AboutUs'
import Contact from '../sections/Home/Contact'
import Blogs from '../sections/Home/Blogs'
import WhyUs from '../sections/Home/WhyUs'
import TrustUs from '../sections/Home/TrustUs'

const Home = () => {
  return (
      <>
        <HeroSection />
        <Mission />
        <ServiceSection />
        <TrustUs />
        <AboutUs />
        <OurPartner />
        <WhyUs />
        <Blogs />
        <Contact />
      </>
  )
}

export default Home
