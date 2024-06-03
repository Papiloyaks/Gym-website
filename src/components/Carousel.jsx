import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-96 max-w-4xl mx-auto">
      <button onClick={handlePrev} className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-[#bf9046] hover:bg-black text-white font-bold text-4xl py-2 px-5 rounded-full">
        &#8249;
      </button>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="p-3 bg-gray-200">
                <img src={item.imageUrl} alt={item.title} className="w-96 object-cover rounded-lg mb-4" />
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.color}</p>
                <p className="text-lg font-bold">{item.price}</p>
                <button className="mt-2 bg-[#bf9046] hover:bg-black text-white font-medium py-2 px-5 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#bf9046] hover:bg-black text-white font-bold py-2 px-5 rounded-full text-4xl">
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
