import './App.css'
import About from './components/About'
import Collection from './components/Collection'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import Items from './components/Items'
import CarouselTwo from './components/CarouselTwo';
import MenSportsShorts from './components/MenSportsShorts '



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
    <>
   <Navbar/>
   <Home/>
   <Collection/>
   <About/>
   <ProductGrid/>
   <Items/>
   <CarouselTwo slides={slides} />
   <MenSportsShorts/>
   
   
   

    </>
  )
}

export default App
