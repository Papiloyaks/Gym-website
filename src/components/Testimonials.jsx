import React from 'react';


const testimonials = [
  {
    name: 'Seun Hannah',
    text: 'Started buying my gym wears from Rockme and it has been perfect.. I highly recommend them.',
    img: 'src/assets/image/round.png', // Replace with the actual image path
  },
  {
    name: 'Sepideh Yazdi',
    text: 'I highly recommend Rockme for your comfortable and premium quality sportswear',
    img: 'src/assets/image/roud.png', // Replace with the actual image path
  },
  {
    name: 'Jeodes John',
    text: 'Rockme is simply exceptional',
    img: 'src/assets/image/cap.png', // Replace with the actual image path
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

    <div className="bg-beige flex flex-col md:flex-row items-center justify-between p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-8">
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
</>
  );
};

export default Testimonials;
