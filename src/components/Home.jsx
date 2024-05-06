import React from 'react'
import shape from '../assets/Gym project/shape.png'

const Home = () => {
  return (
    <>
    <div className='py-10 mt-20'>
     <section>
      <div className='grid grid-cols-2'>
        <div>
        <h1 className='text-4xl'>GEAR UP AND DOMINATE YOUR <br /> ACTIVE LIFESTYLE WITH OUR <br /> PREMIUM SPORTWEAR</h1>
        <p>shop the finest collection of sportwear and accessories at unbeatable prices</p>
        <div className=''>
          <button className='bg-red-300 '>Shop Women</button>
          <button className='bg-red-300 ms-2'>Shop men</button>
        </div>
        </div>

        <div>
    <img src={shape} width={400} alt="" />
    </div>
      
      </div>
     </section>
    </div>
    </>
  )
}

export default Home