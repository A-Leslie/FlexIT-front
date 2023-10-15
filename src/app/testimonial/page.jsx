import React from 'react'
import Card from './card'
import {ArrowRightIcon} from '@heroicons/react/24/outline'
import profile from '../../../public/assets/profile.png'
import rating from '../../../public/assets/rating.png'

function Testimonial() {
  return (
    <div className='bg-purple-side lg:h-full md:h-screen  w-full'>
    <div className=' lg:flex md:flex pt-1 ml-16'>
         <div className="title">
      <h2 className='text-blue-light font-medium text-lg mt-9'>. Testimony .</h2>
      <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Testimonials from successful clients </h1>
     <p className='text-white font-white text-md lg:w-8/12 md:w-8/12 w-12/12  mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
    </div>
      <button className='py-2 h-12 px-8 lg:mt-24 md:mt-24 my-5 text-white flex  rounded-tr-xl rounded-bl-xl bg-blue-light lg:ml-[400px]'>View all
    <span>
    <ArrowRightIcon className='w-4 text-white my-2 mx-2'/>
      </span>
      </button>  
    </div>
 
    <div className='cards grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 ml-10'>
         <Card
        rate={rating}
        photo={profile} 
        name="John Doe"
        desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"

      />
        <Card
        rate={rating}
        photo={profile} 
        name="Lara Jones"
        desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"

      />
            <Card
        rate={rating}
        photo={profile} 
        name="Eddy Vox"
        desc="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet"

      />
</div>
<div className='w-full bg-purple-default h-40 ' style={{
        clipPath: 'polygon(0% 0, 0% 80%, 100% 80%)',
      }}></div>
   
  </div>
  )
}

export default Testimonial
