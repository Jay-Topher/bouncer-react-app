import React from 'react';
import './ProductHeader.scss';
import {bestSeller} from '../../data/metadata.json'

function ProductHeader() {

    return (
        <div className="ProductHeader">
            <h3>best seller</h3>
            <div>
                {bestSeller.list.map((value, index) => (
                    <a href="#" className="product-nav" key={index}>{value}</a>
                ))}
            </div>
        </div>
    )
}

export default ProductHeader;