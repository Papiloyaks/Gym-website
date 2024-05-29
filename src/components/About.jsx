import React from 'react'
import three from '../assets/image/three.png'
import two from '../assets/image/two.png'
import jump from '../assets/image/jump.png'
import twoo from '../assets/image/twoo.png'
import medal from '../assets/image/medal.png'
import group from '../assets/image/group.png'
import headphone from '../assets/image/headphone.png'


const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-8 mt-10 bg-white">
      <div className="md:w-1/2 text-center md:text-left p-10">
        <h1 className="text-3xl font-semibold font-serif mb-4">About us</h1>
        <p className="text-base mb-6">
          At Rockme, we believe that your performance is a reflection of your gear, that is why we have curated a collection of handpicked premium sportswear that combines style, functionality and durability tailored to enhance your performance in every game and work out.
        </p>
        <button className="bg-[#bf9046] text-white py-2 px-4 rounded">Get Started</button>
      </div>
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <img src={three} alt="Sportswear 1" className="w-full h-auto" />
        <img src={two} alt="Sportswear 2" className="w-full h-auto" />
        <img src={jump} alt="Sportswear 3" className="w-full h-auto" />
        <img src={twoo} alt="Sportswear 4" className="w-full h-auto" />
      </div>
    </div>




    <div className="flex flex-col items-center justify-center p-10 bg-white">
    <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold mb-8">Why you should shop with us</h1>
        <p className="text-base">
          At Rockme, we give you the best and finest fittings to showcase your physique and our clients' satisfaction is our <br /> number one priority.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col items-center text-center">
          <img src={medal} alt="Premium products" className="mb-4 w-12 h-12" />
          <h2 className="text-base font-bold mb-2">Premium products</h2>
          <p className="text-base">
            We provide you with nothing but <br /> the absolute best quality products.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={group}alt="Speedy Delivery" className="mb-4 w-12 h-12" />
          <h2 className="text-base text-black font-bold mb-2">Speedy Delivery</h2>
          <p className="text-base">
            We deliver your products <br /> within 24 hours of purchase.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={headphone} alt="Exceptional customer service" className="mb-4 w-12 h-12" />
          <h2 className="text-base font-bold mb-2">Exceptional customer service</h2>
          <p className="text-base">
            We deliver your products <br /> within 24 hours of purchase.
          </p>
        </div>
      </div>
    </div>

    {/* boxing */}
    <div className="box relative flex items-center h-screen bg-cover p-5 mt-20 bg-center">
      <div className="p-6 rounded-lg">
        <p className="text-white text-3xl md:text-4xl font-semibold font-serif">
          We provide you with comfortable <br /> sports bras to enhance maximum <br /> performance.
        </p>
      </div>
    </div>
    </>
  )
}

export default About