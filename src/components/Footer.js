import React from 'react'
import './Footer.css'
import phone from '../assets/icons/phoneIcon.png'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footers'>
                <h2 className='aboutUS' onClick={() => alert('Clicking here would take the user to the\n"About us" part of the website.')}>About us</h2>
                <h2 className='faq' onClick={() => alert('Username: DavidBlomberg\nPassword: test123\nTODO: Styling, QOL changes and bugfixes')}>FAQ</h2>
            </div>
            <img src={phone} alt='Call us'></img>
            <p className='number'>Call us at +46735287832</p>
        </div>
    )
}

export default Footer
