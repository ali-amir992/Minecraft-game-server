import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import PriceCards from '../components/PriceCards'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div >
      <Navbar />
      <HeroSection />
      <PriceCards />
      <Footer />
    </div>
  )
}

export default HomePage