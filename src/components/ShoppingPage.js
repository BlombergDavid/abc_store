import React from 'react'
import './ShoppingPage.css'
import { Link } from 'react-router-dom';



const ShoppingPage = ({ AddProduct, RemoveProduct, storageItems}) => {
    //const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
   
    function viewItemDetails(idNr) {
        var link = '/shopping/';
        var result = link.concat(idNr);
        return result;
    }

    

    return (
        <div>
            <div className='itemContainer'>
                {storageItems.map((item) => (
                    <div>
                    <h3 className='itemNameList'>{item.name}</h3>
                    <Link to={viewItemDetails(item.id)}><img src={item.image} alt={item.description} style={{ width: 300, height: 300 }} /></Link>
                    <li className='itemDescription'>{item.description}</li>
                    <li className='itemPrice'>Price: {item.price}kr</li>
                    <li className='itemInStock'>In Stock: {item.quantity}</li>
                    <Link to={viewItemDetails(item.id)}><button className='viewDetailsButton'>View Details</button></Link>
                    <br/>
                    <button className='plusButton' onClick={() => AddProduct(item)}>+</button>
                    <button className='addToCartButton' onClick={() => AddProduct(item)}>Add to cart</button>
                    <button className='minusButton' onClick={() => RemoveProduct(item)}>-</button>
                    </div>
                ))}   
            </div>
       </div>
    )
}

export default ShoppingPage


/* import React, { useState } from "react";
import ITEMS from "../data/items";
import { useHistory } from "react-router";
import './ShoppingPage.css' */



/* const Item = (productItems) => {
    const { name, description, image, price, quantity } = productItems.item;
    return (
            <div style={{ display: 'inline-block', verticalAlign: 'top', width: 400, margin: 15 }}>
                <h3>{name}</h3>
                <img src={image} alt={description} style={{ width: 300, height: 300 }} />
                <p>{description}</p>
                <p>Price: ${price}kr</p>
                <p>Current quantity: {quantity}</p>
                <button className='plusButton' onClick={() => console.log('+ ' + name)}>+</button>
                <button className='addToCartButton' onClick={() => console.log(name + ' has been added to the cart')}>Add to cart</button>
                <button className='minusButton' onClick={() => console.log('-' + name)}>-</button>
            </div>     
    )
}




const ShoppingPage = () => {

    const [ cartItems, setCartItems] = useState([]);
    const history = useHistory();

    function GoToCheckOut () {
        history.push('/shopping/checkout');
    }

    return (
        <div>
            <div className='itemContainer'>
                {
                    ITEMS.map((i) => {
                        return (
                            <Item key={i.id} item={i}/>
                        );
                    })
                }
            </div>
            <button onClick={GoToCheckOut}>CheckOut</button>
        </div>
    )
}

export default ShoppingPage; */

