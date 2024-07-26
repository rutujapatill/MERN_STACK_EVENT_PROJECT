import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    
    
    <>
    <BrowserRouter>

    <Navbar/>
    <HeroSection/>
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
    <Toaster/>

    
    </BrowserRouter>
    </>
   
  )
}

export default App