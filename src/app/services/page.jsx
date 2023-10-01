import React from 'react'
import Card from './card';
import {CommandLineIcon} from '@heroicons/react/24/outline'
function Services() {
  return (
    <div className='bg-purple-side h-screen w-full'>
      <div className="title">
        <h2 className='text-blue-light font-medium text-lg'>. Services .</h2>
        <h1 className='text-white font-semibold text-4xl'>Services we offer </h1>
       <p className='text-white font-white text-md w-3/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
      </div>
      <div className='cards grid grid-cols-3 ml-10'>
         <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="Web development"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="Digital Marketing"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="SaaS Program"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="Apps Development"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="SeoS Services"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
       <Card
        icon={<CommandLineIcon className='w-7'/>} 
        title="Data Analysis"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"
        readMoreLink="/read-more" 
      />
   
      </div>
     
    </div>
  )
}

export default Services