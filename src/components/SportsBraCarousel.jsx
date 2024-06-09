import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const sportsBras = [
  { color: 'White', price: '$50.60', imgSrc: '/path/to/white-bra.jpg' },
  { color: 'Blue', price: '$50.60', imgSrc: '/path/to/blue-bra.jpg' },
  { color: 'Black', price: '$50.60', imgSrc: '/path/to/black-bra.jpg' },
  // Add more items here
];

const SportsBraCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Women Sports Bras</h2>
      <Slider {...settings}>
        {sportsBras.map((bra, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={bra.imgSrc} alt={`Stretch Sports Bra ${bra.color}`} />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Stretch Sports Bra</h3>
                <p className="text-gray-500">{bra.color}</p>
                <p className="text-xl font-bold">{bra.price}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SportsBraCarousel;
