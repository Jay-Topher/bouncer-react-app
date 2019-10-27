import React from 'react';
import './BottomHead.scss';

function BottomHead() {

    const navLinks = ['HOME', 'STORE', 'IPHONE', 'IPAD', 'MACBOOK', 'ACCESSORIES'];
    

    return (
        <div className='BottomHead'>
            <h1>
                BOUNCER
            </h1>
            <nav className='navlink'>
                {navLinks.map(item => (
                   <a href='/' className='mx-2 navlink--items' >{item}</a>
                ))}
            </nav>
        </div>

    )
}

export default BottomHead;