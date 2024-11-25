import React, { useRef } from 'react'

import Header from './Header/Header'
import Services from './Services/Services'
import Slider from './Slider/Slider'
import Testimonials from './Testimonials/Testimonials'
import About from './About/About'
import Footer from './Footer/Footer'
import News from './News/News'
import Contact from './Contact/Contact'
import Navbar from '../../layouts/Navbar/Navbar'

const Home = () => {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
        <Navbar onContactClick={scrollToContact} />
        <Header />
        <Services />
        <Slider />
        <Testimonials />
        <About />
        <News />
        <Contact ref={contactRef} />
        <Footer />
    </>
  )
}

export default Home
