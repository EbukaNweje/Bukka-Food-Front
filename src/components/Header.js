import React from 'react'
import "../css/mobile.css"
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
    <div className="Header">
        <div className='Logo'></div>
        <div className='SreachIcon'>
            <input type="text" placeholder="What on your mind?"/>
            <AiOutlineSearch className='IconS'/>
        </div>
        <div className='CartContainer'>
            <AiOutlineShoppingCart className='Cart'/>
            <span className='CartLight'>0</span>
        </div>
    </div>
  )
}

export default Header