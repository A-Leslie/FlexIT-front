import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon,SunIcon } from '@heroicons/react/24/outline'

function Navbar() {
  return (
    <div>
        <div className='bg-blue-default flex p-4'>
            
               <div className='title text-white font-bold text-2xl ml-20'> 
               Flex.IT
               </div>
               <ul className='flex gap-10 text-white ml-80 '>
                 <li>
            <Link href="/">Home</Link>
               </li>
               <li>
            <Link href="/service">Services</Link>
               </li>
               <li>
            <Link href="/about">About</Link>
               </li>
               <li>
            <Link href="/port">Portfolio</Link>
               </li>
               <li>
            <Link href="/price">Pricing</Link>
               </li>
               <li>
                <Link href="/testimony">Testimonials</Link>
               </li>
               <li>
                <Link href="/faq">FAQ</Link>
               </li>
               <li>
            <Link href="/contact">Contact Us</Link>
               </li>
            
               </ul>
               <div className='flex gap-5 ml-20'>
                 <MagnifyingGlassIcon className='w-6 text-white'/>
                <SunIcon className='w-6 text-white'/>
               </div>
              
               <div>
               

               </div>
          
        </div>
    </div>
  )
}

export default Navbar
