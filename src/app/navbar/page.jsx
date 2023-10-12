"use client"
import React from 'react'
import { MagnifyingGlassIcon,SunIcon} from '@heroicons/react/24/outline'

function Navbar() {
   const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div>
        <div className='bg-blue-default flex p-4'>
            
               <div className='title text-white font-bold text-2xl md:ml-20 lg:ml-20 ml-10'> 
               Flex.IT
               </div>
               <ul className='lg:flex lg:gap-10 text-sm text-white lg:ml-56 hidden  '>
                
        <li>
          <button onClick={() => scrollToSection('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('services')}>Services</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('testimonial')}>Testimonials</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('pricing')}>Pricing</button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact')}>Contact Us</button>
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
