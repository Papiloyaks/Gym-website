import './App.css'
import Navbar from './components/Navbar'
// import CarouselTwo from './components/CarouselTwo';
import Testimonials from './components/Testimonials'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WomenKit from './components/WomenKit'
import Home from './components/Home'




// const slides = [
//   {
//     imageUrl: 'src/assets/image/hero.png',
//     text: 'Comfortable Sports outfits helps you with better sports performance.',
//   },
//   {
//     imageUrl: 'src/assets/image/up.png',
//     text: 'Achieve your fitness goals with our premium sportswear.',
//   },
//   {
//     imageUrl: 'src/assets/image/hill.png',
//     text: 'Stay active and stylish with our new collection.',
//   },
// ];



function App() {


  return (
  
    <div>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womenkits" element={<WomenKit />} />
          {/* <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<ProductGrid />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/carousel" element={<CarouselTwo slides={slides}/>} />
          <Route path="/menkits" element={<MenSportsShorts />} /> */}
          



        </Routes>
        {/* <CarouselTwo slides={slides} /> */}
        {/* <Testimonials /> */}
      </div>
    
    
  );
};

export default App
