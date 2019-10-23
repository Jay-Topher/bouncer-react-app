import React from 'react';
import './BridgeCard2.scss';
import cam from "../img/cam.png";


function BridgeCard2() {

    return (
        <div className="BridgeCard2">
            <div>
                <h3>GoPro Hero 6</h3>
                <p className="desc">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                <p className="cash">$299</p>
            </div>
            <img src={cam} alt="products"/>
        </div>
    )
}

export default BridgeCard2;