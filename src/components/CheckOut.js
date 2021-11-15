import React from "react";
import './CheckOut.css';
import { Link } from 'react-router-dom';



const CheckOut = ({ cartItems, AddProduct, RemoveProduct }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div>
            <div className='items'>
                <div className='itemsHeader'><h3>Cart Items</h3></div>
                    {cartItems.length === 0 && (
                    <div className='itemsEmpty'>No items </div>
                    )}

                    <div className='cartContainer'>
                        {cartItems.map((item) => (
                            <div key={item.id} className='itemsList'>
                                <div className='itemsImage'>
                                    <img 
                                        className='cart-items-image'
                                        src={item.image}
                                        alt={item.name}
                                        style={{ width: 150, height: 150}}
                                    />
                                </div>
                                <div className='itemName'>{item.name}</div>
                                    <div className='manageItems'>
                                        <button className='plusButton2' onClick={() => AddProduct(item)}>+</button>
                                        <button className='minusButton2' onClick={() => RemoveProduct(item)}>-</button>
                                    </div>
                                <div className='itemsPrice'>
                                    {item.quantity}x - ${item.price}
                                </div>   
                            </div>
                        
                        ))}
                    </div>
                    <div className='totalPriceHeader'>
                        Total Price -  
                        <div className='totalPrice'>${totalPrice}kr</div>
                    </div>

                </div>
                    <Link to='/shopping/confirmation'>
                        <button className='confirm'>
                            Confirm your order
                        </button>
                    </Link>
        </div>
        
    );
};



export default CheckOut


