import React from 'react';
import image from '../img/vr_goggle.png';
import './BridgeCardMiddle.scss'

function BridgeCardMiddle() {

    return (
        <div className="BridgeCardMiddle">
            <img src={image} alt="Oculus Rift"/>
            <div>
                <h3>Oculus Rift</h3>
                <p className="cash">$349</p>
            </div>
        </div>
    )
}

export default BridgeCardMiddle