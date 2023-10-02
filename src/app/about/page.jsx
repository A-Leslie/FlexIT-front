import React from 'react'
import Card from './card';
import home from '../../../public/assets/home2.png'
import Image from 'next/image';
import {CommandLineIcon,GlobeAltIcon,UserCircleIcon,MagnifyingGlassIcon,WrenchScrewdriverIcon,ArrowRightIcon} from '@heroicons/react/24/outline'

function About() {
  return (
    <div className='bg-purple-side h-screen w-full'>
    <div className=' flex ml-16'>
         <div className="title">
      <h2 className='text-blue-light font-medium text-lg mt-9'>. About us .</h2>
      <h1 className='text-white font-semibold text-4xl w-8/12'>Trusted by Worldwide Clients over <span className='text-blue-light underline'>1980</span> </h1>
     <p className='text-white font-white text-md w-8/12 mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
    </div>
    </div>
 
<div className='w-12/12 flex'>
    <div className='cards  ml-10 w-6/12'>
      <div className='mr-20 flex'>
        <Card
      icon={<CommandLineIcon className='w-7'/>} 
      title="First on the field"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
      readMoreLink="/read-more" 
    />
     <Card
      icon={<GlobeAltIcon className='w-7'/>} 
      title="Easy to reach"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
      readMoreLink="/read-more" 
    />
      </div>
       
    <div className='mr-20 flex'>
       <Card
      icon={<CommandLineIcon className='w-7'/>} 
      title="World wide services"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
      readMoreLink="/read-more" 
    />
     <Card
      icon={<UserCircleIcon className='w-7'/>} 
      title="24/7 support"
      description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
      readMoreLink="/read-more"
    />
    </div>
    <button className='py-2 h-12 px-8 mt-16 ml-10 text-white flex  rounded-tr-xl rounded-bl-xl bg-blue-light '>Get in touch 
      </button>  
    
    </div>
    <div className="image">
    <Image
          src={home}
          width={700}
          height={500}
          alt="image"
          className='mr-20'
        />
    </div>
</div>
  
   
  </div>
  )
}

export default About
