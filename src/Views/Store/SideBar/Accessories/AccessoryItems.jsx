import React from 'react'
import './AccessoryItems.scss'

export default function AccessoryItems({item, quantity}) {
    return (
        <div className="AccessoryItems">
            <span>{item}</span>
            <span>{quantity}</span>
        </div>
    )
}
