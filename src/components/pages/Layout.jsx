import React from 'react'
import Navbar from '../elements/Navbar'
import Footer from '../elements/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../../SrollToTop'
import Whatsapp from '../elements/Whatsapp'

const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Whatsapp />
    <main>
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout
