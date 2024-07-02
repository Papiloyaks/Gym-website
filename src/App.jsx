import './App.css'
import About from './components/About'
import Collection from './components/Collection'
// import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import Items from './components/Items'
import CarouselTwo from './components/CarouselTwo';
import MenSportsShorts from './components/MenSportsShorts '
import Testimonials from './components/Testimonials'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WomenKit from './components/WomenKit'
import Home from './components/Home'




const slides = [
  {
    imageUrl: 'src/assets/image/hero.png',
    text: 'Comfortable Sports outfits helps you with better sports performance.',
  },
  {
    imageUrl: 'src/assets/image/up.png',
    text: 'Achieve your fitness goals with our premium sportswear.',
  },
  {
    imageUrl: 'src/assets/image/hill.png',
    text: 'Stay active and stylish with our new collection.',
  },
];



function App() {


  return (
  
    <div>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womenkits" element={<WomenKit />} />
        </Routes>
        <Collection />
        <About />
        <ProductGrid />
        <Items />
        <CarouselTwo slides={slides} />
        <MenSportsShorts />
        <Testimonials />
      </div>
    
    
  );
};

export default App
