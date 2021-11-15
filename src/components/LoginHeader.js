import React from "react";
import './LoginHeader.css';

const LoginHeader = () => {
    return (
        <header className='header'>
            <div>
                <h1>ABC Webshop</h1>
                <h2>Your favorite online shop</h2>
                <h6>Free shipping to over 100 countries</h6>
            </div>
        </header>
    )
}
/* <h5 className='aboutUS2' onClick={() =>  alert('Clicking here would take the user to the\n"About us" part of the website.')}>About us</h5>
<h5 className='faq2' onClick={() => alert('Username: DavidBlomberg\nPassword: test123\nTODO: Styling, QOL changes and bugfixes')}>FAQ</h5>
 */
export default LoginHeader
