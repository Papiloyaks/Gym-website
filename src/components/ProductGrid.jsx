import React from 'react';

const products = [
  { id: 1, image: 'src/assets/image/leg.png'},
  { id: 2, image: 'src/assets/image/shortt.png'},
  { id: 3, image: 'src/assets/image/short.png'},
  { id: 4, image: 'src/assets/image/leg.png' },
  { id: 5, image: 'src/assets/image/shortt.png', label: 'BRA' },
  { id: 6, image: 'src/assets/image/short.png' },
];

const ProductGrid = () => {
  return (
    <div className=" p-10">
      <h1 className='text-3xl font-bold font-serif text-gray-600'>Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {products.map((product) => (
          <div key={product.id} className="relative w-full h-96">
            <img src={product.image} alt={product.label} className="w-full h-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
              <span className="text-white text-2xl font-bold">{product.label}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-gold-500 text-white py-2 px-4 rounded">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductGrid;
