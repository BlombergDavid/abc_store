import React from 'react'
import { useHistory } from 'react-router-dom';
import './ConfirmationPage.css'

const ConfirmationPage = ({cartItems, FinishPurchase}) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    const history = useHistory();

    function BackToShopping() {
       FinishPurchase();
       history.push('/shopping')
    }

    
    return (
        <div>
            <div className='confirmationContainer'>
                <div className='confirmationHeader'>
                    <h3 className='cartItemsHeader'>Cart Items</h3>
                </div>
                    {cartItems.length === 0 && (
                    <div><p className='emptyOrderConfirm'>You have not ordered anything</p> </div>
                    )}

                    <div>
                        <h4 className='confirmationThankYou'>Thank you so much for your order! A confirmation of your order will shortly be sent to "Example@gmail.com"</h4>
                        {cartItems.map((item) => (
                            <div key={item.id} className='confirmationItemList'>
                                <div><li>{item.name} - {item.quantity}x : {item.price}kr</li></div>
                            </div>
                        ))}
                    </div>
                    <div className='confirmationTotalPrice'>
                        Total Price:  {totalPrice}kr
                    </div>
            </div>
                <button className='BackToShoppingButton' onClick={BackToShopping}>Back to Shopping Items</button>
        </div>   
    )
}

export default ConfirmationPage
