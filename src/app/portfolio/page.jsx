import React from 'react'
import Image from 'next/image'
import port2 from '../../../public/assets/port2.jpeg'

function Portfolio() {
  return (
    <div className='bg-purple-side lg:h-full md:h-screen h-[2300px] w-full'>
    <div className=' lg:block md:flex pt-1 ml-16'>
    <div className="title">
        <h2 className='text-blue-light font-medium text-lg mt-9'>. Portfolio .</h2>
        <h1 className='text-white font-semibold lg:text-4xl md:text-4xl text-2xl'>Recent products and works </h1>
       <p className='text-white font-white text-md lg:w-6/12 md:w-6/12 w-12/12  mt-3 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum</p>
      </div>
      <div className="title float-left">
       <p className='text-white font-white text-md lg:w-10/12 md:w-6/12 w-12/12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis laborum lorem</p>
      </div>  
    <div className="grid grid-cols-2 w-5/12 gap-4">
        <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
         <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
           <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
         <Image
          src={port2}
          width={500}
          height={500}
          alt="image"
          className='rounded-tr-xl rounded-bl-xl'
        />
      </div>
  </div>  
     </div>
  )
}

export default Portfolio
