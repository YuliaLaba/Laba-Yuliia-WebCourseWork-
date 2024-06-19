import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './Navbar.css'


const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
        <ul className="navbar-menu">
            <Link to='/'  onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>головна</Link>
            <a href ='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>меню</a>
            <a href ='#footer' onClick={()=>setMenu("contact-us")} className={`${menu==="contact"?"active":""}`}>зв'язатись</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <Link to='/cart' className='navbar-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className={getTotalCartAmount()>0?"dot":""}></div>
            </Link>
            <button onClick={()=>setShowLogin(true)}>увійти</button>
        </div>
    </div>
  )
}

export default Navbar
