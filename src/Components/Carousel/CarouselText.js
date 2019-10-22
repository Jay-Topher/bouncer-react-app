import React from 'react';
import './CarouselText.scss';

function CarouselText({ title, body }) {

    return (
        <div className="CarouselText">
            <h2>{title}</h2>
            <p>{body}</p>
            <p className="underline">MORE</p>

        </div>
    )
}

export default CarouselText;