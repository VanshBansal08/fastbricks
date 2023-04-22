import React from 'react'
import './Flooring.css'
const Flooring = () => {
  return (
    <div className="florings">
      <div className="banner_flooring">
        <h1>Floorings</h1>
      </div>
      <div className="flooring_product">
        <div className="f_p_col">
          <div className="product_img">
            <img src="img/flooring_1.png" alt="" />
          </div>
          <div className="product_info">
           <p className='product_info_Heading'>Laminate Wooden Flooring</p>
           <p className='product_info_Desc'>Resindetial Building Epox/Wooden 8 Inch Designer Flooring .For Indoor</p>
           <p className='product_info_Price'>₹ 575 Per Square Feet <span>12% Off</span></p>
          </div>
        </div>
        <div className="f_p_col">
          <div className="product_img">
            <img src="img/flooring_2_f.png" alt="" />
          </div>
          <div className="product_info">
           <p className='product_info_Heading'>Laminate Wooden Flooring</p>
           <p className='product_info_Desc'>Resindetial Building Epox/Wooden 8 Inch Designer Flooring .For Indoor</p>
           <p className='product_info_Price'>₹ 575 Per Square Feet <span>12% Off</span></p>
          </div>
        </div>
        <div className="f_p_col">
          <div className="product_img">
            <img src="img/flooring_4.png" alt="" />
          </div>
          <div className="product_info">
           <p className='product_info_Heading'>Laminate Wooden Flooring</p>
           <p className='product_info_Desc'>Resindetial Building Epox/Wooden 8 Inch Designer Flooring .For Indoor</p>
           <p className='product_info_Price'>₹ 575 Per Square Feet <span>12% Off</span></p>
          </div>
        </div>
        <div className="f_p_col">
          <div className="product_img">
            <img src="img/flooring_3.png" alt="" />
          </div>
          <div className="product_info">
           <p className='product_info_Heading'>Laminate Wooden Flooring</p>
           <p className='product_info_Desc'>Resindetial Building Epox/Wooden 8 Inch Designer Flooring .For Indoor</p>
           <p className='product_info_Price'>₹ 575 Per Square Feet <span>12% Off</span></p>
          </div>
        </div>
      </div>
      
      <div className="view_btn">
        <h1>View All</h1>
      </div>
    </div>
  )
}

export default Flooring