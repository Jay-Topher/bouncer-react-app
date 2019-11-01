import React from 'react';
import './BottomHead.scss';
import {NavLink} from 'react-router-dom'

function BottomHead({navLinks}) {
    

    return (
        <div className='BottomHead'>
            <h1>
                BOUNCER
            </h1>
            <nav className='navlink'>
                {navLinks.map((item, index) => (
                   <NavLink exact to={item.path} activeStyle={{color:"#33a0ff"}} className='mx-2 navlink--items' key={index}>{item.name}</NavLink>
                ))}
            </nav>
        </div>

    )
}

BottomHead.defaultProps = {
    navLinks: [
        {
            name: "home",
            path: "/"
        },
        {
            name: "store",
            path: "/store"
        },
        {
            name: "iphone",
            path: "/iphone"
        },
        {
            name: "ipad",
            path: "/ipad"
        },
        {
            name: "macbook",
            path: "/macbook"
        },
        {
            name: "accessories",
            path: "/accessories"
        }
    ]
}

export default BottomHead;