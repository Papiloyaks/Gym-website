import React from 'react'
import men from '../assets/image/men.png'
import girl from '../assets/image/girl.jpg'

const Collection = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 p-6">
      {/* Men's Collection */}
      <div className="relative w-full md:w-1/2 ">
        <img id='girl'
          src={men}
          alt="Men's Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-white relative -top-96 text-2xl md:text-3xl font-bold font-serif">Men's Collection</h2>
          <button className="mt-2 px-4 py-2 bg-white text-[#bf9046] font-bold w-40 rounded hover:bg-black">Shop Now</button>
        </div>
      </div>

      {/* Women's Collection */}
      <div className="relative w-full md:w-1/2">
        <img id='girl'
          src={girl}
          alt="Women's Collection"
          className="w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-white relative -top-96 text-2xl md:text-3xl font-bold font-serif">Women's Collection</h2>
          <button className="mt-2 px-4 py-2 bg-white font-bold w-40 rounded text-[#bf9046] hover:bg-black">Shop Now</button>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Collection