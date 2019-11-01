import React from 'react'
import AccessoryItems from './AccessoryItems'
import {accessories} from '../../../../data/metadata.json'
import './Accessories.scss'

export default function Accessories() {
    return (
        <div className="Accessories">
            <h3>Accessories</h3>
            {accessories.map((value, index) => (
                <AccessoryItems item={value.name} quantity={value.quantity} key={index} />
            ))}
        </div>
    )
}
