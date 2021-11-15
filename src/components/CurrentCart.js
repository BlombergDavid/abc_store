import React from 'react'
import './CurrentCart.css'

const CurrentCart = ({cartItems}) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    return (
        <div>
             <div className='currentCart'>
            {cartItems.map((cItem) => (
                    <li>{cItem.quantity}x {cItem.name} - ${cItem.quantity * cItem.price}kr</li>
                 ))} 
                 <p className='currentCartTotalPrice'>Total: {totalPrice}kr</p>
            </div>
        </div>
    )
}

export default CurrentCart
