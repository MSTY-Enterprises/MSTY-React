import React from 'react'
import { useParams } from 'react-router-dom'
import Process from '../sections/Service/Process'
import Banner from '../sections/Service/Banner'
import ServiceAbout from '../sections/Service/ServiceAbout'
import Offers from '../sections/Service/Offers'
import WhyUs from '../sections/Service/WhyUs'
import KeyFeature from '../sections/Service/KeyFeature'
import Blogs from '../sections/Home/Blogs'
import Contact from '../sections/Home/Contact'
import OtherService from '../sections/Service/OtherService'

const Service = () => {

  const {service} = useParams()
  return (
    <>
    <Banner />
    <ServiceAbout />
    <Offers />
    <KeyFeature />
    <WhyUs />
    <Process />
    <OtherService />
    <Blogs />
    <Contact />
    </>
  )
}

export default Service
