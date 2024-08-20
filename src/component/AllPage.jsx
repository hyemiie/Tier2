import React from 'react'
import About from '../Components/About'
import Categories from '../Components/Categories'
import Footer from '../Components/Footer'
import MidSection from '../Components/MidSection'
import './allPage.css'
import Hero from './Hero'
import Navbar from '../Components/navbar'

const AllPage = () => {
  return (
    <div className='allPage'>
    <Navbar/>
    <div>    <Hero/>
</div>
          <About />
        <MidSection/>
        <Categories />
         <Footer />
    </div>
  )
}

export default AllPage