import React from 'react';

const products = [
  {
    id: 1,
    name: 'Cotton men sport short',
    color: 'Gray',
    price: '$50.60',
    imageUrl: 'src/assets/image/waist.png', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Men sport short',
    color: 'Black',
    price: '$50.60',
    imageUrl: 'src/assets/image/stand.png', // Replace with actual image path
  },
  {
    id: 3,
    name: 'Men sport Tight',
    color: 'Black',
    price: '$50.60',
    imageUrl: 'src/assets/image/black.png', // Replace with actual image path
  },
];

const MenSportsShorts = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Men Sports Shorts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
            <img className="w-full h-48 object-cover mb-4" src={product.imageUrl} alt={product.name} />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.color}</p>
            <p className="text-gray-800 font-bold">{product.price}</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenSportsShorts;