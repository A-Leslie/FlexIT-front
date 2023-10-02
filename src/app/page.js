import React from 'react'
import Navbar from './navbar/page'
import Home from './home/page'
import Services from './services/page'
import About from './about/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
    </div>
  )
}

export default page
