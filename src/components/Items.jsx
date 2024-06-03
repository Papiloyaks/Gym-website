import React from 'react';
import '../components/Apps.css';
import Carousel from './Carousel';

function App() {
  const items = [
    {
      title: 'Durable Sports Leggings',
      color: 'Blue',
      price: '$50.60',
      imageUrl: 'src/assets/image/pics.png', // replace with actual image URL
    },
    {
      title: 'Crossover Sports Bra',
      color: 'Yellow',
      price: '$50.60',
      imageUrl: 'src/assets/image/yellow.png', // replace with actual image URL
    },
    {
      title: 'Longline Sports Bra',
      color: 'Light Pink',
      price: '$50.60',
      imageUrl: 'src/assets/image/white.png', // replace with actual image URL
    },
    // Add more items as needed
  ];

  return (
    <div className="App">
      <h1 className="text-2xl font-bold mb-4 font-serif">Women Top picks</h1>
      <Carousel items={items} />
    </div>
  );
}

export default App;
