import React from 'react'
import Navbar from './components/Navbar'
import Lander from './components/Lander'
import Mission from './components/Mission'
import Features from './components/Services'
import Impact from './components/Impact'
import Positions from './components/Positions'
import Contact from './components/Contact'
import './index.css'

function App() {
  return (
    <div className=' md:min-h-screen md:flex md:justify-center bg-black'>
      <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
        <Navbar />
        <Lander />
        <Mission />
        <Features />
        <Impact />
        <Positions />
        <Contact />
      </div>
    </div>
  )
}
    
export default App
