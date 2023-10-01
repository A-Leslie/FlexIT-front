import React from 'react'
import Navbar from './navbar/page'
import Home from './home/page'
import Services from './services/page'

function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
    </div>
  )
}

export default page
