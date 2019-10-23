import React from 'react';
import './BridgeCard.scss';
import iPhone6 from "../img/iPhone_6.png";

function BridgeCard() {
    

    return (
        <div className="BridgeCard">
            <div>
                <h3>iPhone 6</h3>
                <p className="desc">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                <p className="cash">$399</p>
            </div>
            <img src={iPhone6} alt="products"/>
        </div>
    )
}

export default BridgeCard;