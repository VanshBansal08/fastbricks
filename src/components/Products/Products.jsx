import React from 'react'
import Flooring from '../Flooring/Flooring'
import Paints from '../Paints/Paints'
import './Products.css'
import Tiles from '../Tiles/Tiles'
import Door from '../Door/Door'
import Wallpaper from '../Wallpaper/Wallpaper'
import Brand from '../BrandedProducts/Brand'
import Glass from '../Glasses/Glass'
const Products = () => {
  return (
    <div className='product'>
        <Flooring/>
        <Paints/>
        <Tiles/>
        <Door/>
        <Wallpaper/>
        <Brand/>
        <Glass/>
    </div>
  )
}

export default Products