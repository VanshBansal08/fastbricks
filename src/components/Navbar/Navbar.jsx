import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <img src="/img/logonew-removebg-preview@2x.png" className='logo' alt="" />
        </div>
        <div className="center">
            <div className="search-container">
                <SearchIcon/>
                <input type="text" placeholder='Search Your Product , Brand Or More' />
                <MicIcon/>
            </div>
            <div>
            <button className="login">Login</button>
            </div>
            <div>
            <h1 className='seller'>Become a Seller</h1>
            </div>
        </div>
        <div className="right">
            <div className="cart">
                <ShoppingCartOutlinedIcon className='cart-icon'/>
                <h1>Cart</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar