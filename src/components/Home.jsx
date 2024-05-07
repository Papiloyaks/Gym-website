import React from 'react'
import shape from '../assets/Gym project/shape.png'

const Home = () => {
  return (
    <>
    <div className='py-10 mt-20'>
     <section className='get'>
      <div id='' className='grid grid-cols-2'>
        <div>
        <h1 id='h1' className='lg:text-4xl md:text-2xl  sm:text-2xl py-2 '>GEAR UP AND DOMINATE YOUR  ACTIVE LIFESTYLE WITH OUR PREMIUM SPORTWEAR</h1>
        <p className='text-lg text-[#7d7d7d] p-1'>Shop the finest collection of sportwear and <br /> accessories at unbeatable prices</p>
        <div className='flex p-2'>
          <button className='bg-[#bf9046] text-white rounded text-xs p-5'>Shop Women</button>
          <button className='ms-2  bg-[#bf9046] p-4 rounded text-white text-xs'>Shop men</button>
        </div>
        </div>

        <div>
    <img id='img' src={shape}  alt="" />
    </div>
      
      </div>
     </section>
    </div>
    </>
  )
}

export default Home