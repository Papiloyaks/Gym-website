import React from 'react'
import men from '../assets/Gym project/men.png'
import girl from '../assets/Gym project/girl.jpg'

const Collection = () => {
  return (
    <>
    <div>
        <div>
            <div>
            <img src={men} width={300} alt="" />
            <h1>Men collection</h1>
            <span><button>Shop Now</button></span> 
            </div>
            <div>
                <img src={girl} width={300} alt="" />
                <h1>Women collection</h1>
            <span><button>Shop Now</button></span> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Collection