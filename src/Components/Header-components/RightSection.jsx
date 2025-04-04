import '../../component-styles/Header-components/RightSection.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useState } from 'react'

function RightSection() {

    const [cartValue, setCartValue] = useState(0);
    
    return(
        <div
        className="right-section-flex"
        >
            <div
            className='cart-icon-container'>
                <CiShoppingCart
                size={60} 
                color='black'
                className='cart-icon'
                />
                    <p
                    className='cart-value'>
                        {cartValue}</p>
                <p className='cart-text'>Cart</p>
            </div>
            <div
            className='user-icon-container'>
                <CiUser
                size={60} 
                color='black'
                className='user-icon'
                />
                <p className='cart-text'>Sign in</p>
            </div>
        </div>
    )
}

export default RightSection;