import React from 'react'
import images from "../images/imagepath"

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pt-10 items-center'>
      <div className='mb-10'>
        <p className='text-white text-[20px]'>Hello Welcome to my site</p>
        <p className='text-white text-[40px] font-bold'>I'm Shashi Bhushan singh</p>
        <p className='text-green-500 text-[40px] font-bold'>I'm React developer</p>
        <div className='mt-4 flex gap-4'>
          <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[1px] hover:border-white'>SEE PORTFOLIO</button>
          <button className='text-white text-[12px] px-3 pb-2 py-2 bg-red-500 rounded-full border-[1px] hover:border-white'>CONTACT ME</button>
        </div>
      </div>
      <div>
      <div className='flex justify-center '>
        <img src={images.shashi} alt="shashi_png"
        className='h-full w-[250px] object-cover rounded-[20px]'
        />
      </div>
      </div>
    </div>
  )
}

export default Hero
