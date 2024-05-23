import React from 'react'
import men from '../assets/image/men.png'
import girl from '../assets/image/girl.jpg'

const Collection = () => {
  return (
    <>
   <section>
    <div>
        <div className='grid grid-cols-2 gap-10 mx-10'>
            <div className=''>
            <img className='h-3/4 w-full' src={men}  alt="" />
            <h1 className='men text-white mx-5 text-2xl font-serif'>Men’s Collection </h1>
           <p> <button className='bg-red-300 p-2 text[rgb(191,144,70)]'>Shop Now</button></p>
            </div>

            <div className=''>
                <img className='h-3/4 w-full' src={girl} alt="" />
                <h1 className='men text-white mx-5  text-2xl font-serif'>Women’s Collection</h1>
            <span><button className=''>Shop Now</button></span> 
            </div>
        </div>
    </div>
    </section>
   
    </>
  )
}

export default Collection