import React from 'react'
import shape from '../assets/image/shape.png'
import { Link } from "react-router-dom";
import Collection from './Collection';
import About from './About';
import ProductGrid from './ProductGrid';
import Items from './Items';
import Carousel from './CarouselTwo';


const Home = () => {
  return (
    <>
    <div>
     <section className='get py-20 p-10'>
      <div id='' className='lg:grid grid-cols-2 md:grid grid-cols-2 sm:grid grid-cols-2'>
        <div>
        <h1 id='h1' className='lg:text-4xl md:text-2xl  sm:text-2xl py-2 font-semi-bold mt-20'>GEAR UP AND DOMINATE YOUR <br />  ACTIVE LIFESTYLE WITH OUR PREMIUM SPORTWEAR</h1>
        <p className='lg:text-xl sm:text-xs md:text-xs text-[#7d7d7d] p-1'>Shop the finest collection of sportwear and accessories at unbeatable prices</p>
        <div className='flex p-2'>
          <Link to="/womenkits">
          <button className='bg-[#bf9046] text-white rounded text-xs p-5'>Shop Women</button>
          </Link>
          <button className='ms-2  bg-[#bf9046] p-4 rounded text-white text-xs'>Shop men</button>
        </div>
        </div>

        <div className=''>
    <img className='mt-10' src={shape} width={500}  alt="" />
    </div>
      
      </div>
     </section>
    </div>
    <Collection/>
    <About/>
   <ProductGrid/>
   <Items/>
   
  


    </>
  )
}

export default Home