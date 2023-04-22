import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Slider from './components/Slider/Slider'
import Categories from './components/Categories/Categories'
import Flooring from './components/Flooring/Flooring'
import Paints from './components/Paints/Paints'
import Products from './components/Products/Products'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Slider/>
      <Categories/>
      <Products/>
    </div>
  )
}

export default App