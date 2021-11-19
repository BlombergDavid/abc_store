import React from 'react'
import './itemDetail.css';
import { Link, useLocation, useHistory } from 'react-router-dom';

const ItemDetail = ({ cartItems, storageItems, AddProduct, RemoveProduct }) => {
    const {search } = useLocation();
    const match = search.match(/id=(.*)/);
    const itemID = match?.[1];
    const link =  '/shopping/item?id=';
    const forward = '>';
    const backward = '<';


    const selectedItem = storageItems.find((x) => x.id == itemID);
    console.log(itemID.valueOf);
    console.log(selectedItem);

    const history = useHistory();

    const showNextItem = () => {
        itemID > 8 ? history.push(link+1) : history.push(link+(parseInt(itemID)+1));
    }

    const showPreviousItem = () => {
        itemID < 2 ? history.push(link+9) : history.push(link+(parseInt(itemID)-1));
    }


    return (
        <div className='container'>
            <button className='nextItemButton' onClick={showNextItem}>{forward}</button>
            <button className='previousItemButton' onClick={showPreviousItem}>{backward}</button>
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

export default ItemDetail
