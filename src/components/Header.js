import React from "react";
import './Header.css';
import bagIcon from '../assets/icons/bagIcon.jpg'
import checkoutIcon from '../assets/icons/checkOut.png'
import signOutIcon from '../assets/icons/signOut.png'
import { useHistory } from "react-router";

const Header = ({ asUser, NotLoggedIn, EmptyCart }) => {
    const history = useHistory();

    function GoToCheckOut () {
        history.push('/shopping/checkout');
    }

    function GoToHome () {
        history.push('/shopping');
    }

    function LogOut () {
        NotLoggedIn();
        EmptyCart();
        history.push('/');
    }


    
    return (
        <header className='header'>
            <div>
                <h1 className='abcHeader' onClick={GoToHome}>ABC Webshop</h1>
                <h2>Your favorite online shop</h2>
                <hr></hr>
                { asUser ? <p className='loggedStatus'>Shopping as David Blomberg</p> : <p className='loggedStatus'>Shopping as guest</p> }
                <button className='homeButton' onClick={GoToHome}><img src={bagIcon} alt="checkout icon"/></button>
                <button className='checkOutButton' onClick={GoToCheckOut}><img src={checkoutIcon} alt="checkout icon"/></button>
                <button className='signOutButton' onClick={LogOut}><img src={signOutIcon} alt="checkout icon"/></button>
            </div>
        </header>
    )
}


export default Header;