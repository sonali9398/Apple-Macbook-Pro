import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all'
import Showcase from './components/Showcase'
import Performance from './components/Performance'
import  Features  from './components/Features'
import Highlights from './components/Highlights'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {

  return (
    <>
      <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlights/>
        <Footer/>
      </main>
    </>
  )
}

export default App
