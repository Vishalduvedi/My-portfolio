import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import LatestWork from './Component/Latestwork/LatestWork'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <LatestWork></LatestWork>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
