import React from 'react'
import './ManageItems.css'
import { Link } from 'react-router-dom';

const ManageItems = ({storageItems, SetPrice, SetQuantity}) => {

    return (
        <div className='manangeItemContainer'>
            <h1 className='manageItemsMainHeader'>Admin Page</h1>
            <Link to='/'>
                    <button className='adminReturnButton'>Return to start</button>
            </Link>
            <hr />
            <div className='manageItemsBorder'>
                {storageItems.map((item) => (
                    <div className='manageItemNames'>{item.name}. ID-number: {item.id}
                        <form className='managePrice'>
                            <label>
                                Change price: (Old Price = {item.price})
                                <input className='managePriceInput' type='number' value={item.price} onChange={(e) => SetPrice(item.id-1,e.target.value)}  placeholder="Change the price for this product"/>
                                <br />
                                <button className='setChangeButton'/*  onClick={SetPrice(item.id)} */>Confirm</button>
                            </label> 
                            
                        </form>
                        <form className='manageQuantity'>
                            <label>
                                Change quantity: (Old Quantity = {item.quantity})
                                <input className='manageQuantityInput' type='number' value={item.quantity} onChange={(e) => SetQuantity(item.id-1, e.target.value)} placeholder='Change the current quantity in stock for this product' />
                                <br />
                                <button className='setChangeButton' /* onClick={SetQuantity(item.id)} */>Confirm</button >
                            </label>
                        </form>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageItems
