import React from 'react';
import './itemDetail.css';
import { Link } from 'react-router-dom';


const AdidasPants = ({ cartItems, storageItems, AddProduct, RemoveProduct }) => {
     const selectedItem = storageItems.find((x) => x.id === 5);
     return (
        <div className='container'>
            <div className='itemInfo'>
                    <h2 className='itemHeader'>{selectedItem.name}</h2>
                    <img className='itemImage' src={selectedItem.image} alt={selectedItem.description}/>
                    <p className='itemText1'>{selectedItem.detailedDescription}</p>
                    <p className='itemText2'>Price: {selectedItem.price}kr</p>
                    <div className='itemButtons'>
                        <button className='plusButton' onClick={() => AddProduct(selectedItem)}>+</button>
                        <button className='addToCartButton' onClick={() => AddProduct(selectedItem)}>Add to cart</button>
                        <button className='minusButton' onClick={() => RemoveProduct(selectedItem)}>-</button>
                    </div>
                    <Link to='/shopping'><button className='returnShoppingButton'>Continue Shopping</button></Link>

            </div>
        </div>
    )
}

export default AdidasPants
