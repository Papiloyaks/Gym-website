import React from 'react';


const testimonials = [
  {
    name: 'Seun Hannah',
    text: 'Started buying my gym wears from Rockme and it has been perfect.. I highly recommend them.',
    img: 'src/assets/image/round.png'
  },
  {
    name: 'Sepideh Yazdi',
    text: 'I highly recommend Rockme for your comfortable and premium quality sportswear',
    img: 'src/assets/image/roud.png', 
  },
  {
    name: 'Jeodes John',
    text: 'Rockme is simply exceptional',
    img: 'src/assets/image/cap.png', 
  },
];

const Testimonials = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-8">Here’s what people are saying</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-start space-x-4">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-[#f9f4ec] flex flex-col md:flex-row items-center justify-between p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-8">
      <div className="text-center md:text-left mb-6 md:mb-0 md:mr-6">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Are You Ready To Take Your Sport Performance To Another Level?
        </h2>
        <p className="text-lg md:text-xl mb-4">Shop With Us Now.</p>
        <button className="bg-[#bf9046] text-white font-bold py-2 px-4 rounded hover:bg-black">
          Shop Now
        </button>
      </div>
      <div className="flex justify-center">
        <img
          src="src/assets/image/image 1.png"
          alt="Athletes"
          className="w-full h-auto max-w-md"
        />
      </div>
    </div>

    <footer className="bg-white mt-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-1/4 text-center sm:text-left mb-6 sm:mb-0">
          <img src="src/assets/image/else.png" alt="RMF Logo" className=" mx-auto sm:mx-0 mb-4 sm:mb-0" />
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur. Libero nec at aenean sit donec cursus adipiscing proin. Suscipit scelerisque vivamus amet placerat nisi.
          </p>
        </div>
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 text-center sm:text-left">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact us</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0 text-center sm:text-left">
          <h3 className="font-bold text-lg mb-2">Categories</h3>
          <ul>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Men</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Women</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-800">Accessories</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/4 text-center sm:text-left">
          <h3 className="font-bold text-lg mb-2">Payment Methods</h3>
          <div className="flex justify-center sm:justify-start space-x-4">
            <img src="src/assets/image/visa.png" alt="Visa" className="h-4" />
            <img src="src/assets/image/group.png" alt="Mastercard" className="h-4" />
            <img src="src/assets/image/paypal.png" alt="Paypal" className="h-5" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 text-center border-t pt-4 mt-4">
        <p className="text-gray-600 text-sm">&copy; 2023 Rockme. All rights reserved</p>
      </div>
    </footer>
</>
  );
};

export default Testimonials;
