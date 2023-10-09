import React from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon,SunIcon} from '@heroicons/react/24/outline'

function Navbar() {
  return (
    <div>
        <div className='bg-blue-default flex p-4'>
            
               <div className='title text-white font-bold text-2xl md:ml-20 lg:ml-20 ml-10'> 
               Flex.IT
               </div>
               <ul className='lg:flex lg:gap-10 text-sm text-white lg:ml-56 hidden  '>
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
               <div className='flex gap-5 lg:ml-20 md:ml-[500px] lg:ml-20 ml-32'>
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
