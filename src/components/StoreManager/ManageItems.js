import React from 'react'
import './ManageItems.css'
import { Link } from 'react-router-dom';
import data from '../../data/data';

const ManageItems = ({storageItems, SetPrice, SetQuantity}) => {
    const {productItems} = data;

    return (
        <div className='manangeItemContainer'>
            <h1 className='manageItemsMainHeader'>Admin Page</h1>
            <Link to='/'>
                    <button className='adminReturnButton'>Return</button>
            </Link>
            <hr />
            <div className='manageItemsBorder'>
                {storageItems.map((item) => (
                    <div className='manageItemNames'>
                        <h3 className='manageItemID'>{item.name}. ID-number: {item.id}</h3>
                        <p className='manageCurrentPrice'>Current Price = {item.price}</p>
                        <label className='labelPrice'>Change Price <input type='number' value={item.price} onChange={SetPrice(item.id)}/></label>
                        <br/>
                        <p className='manageCurrentQuantity'>Current Quantity = {item.quantity}</p>
                        <label className='labelQuantity'>Change Quantity <input type='number' value={item.quantity} onChange={SetQuantity(item.id)}/></label>
                        <hr /> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageItems
