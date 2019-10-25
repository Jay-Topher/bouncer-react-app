import React from 'react';
import './CarouselText.scss';

function CarouselText({ title, body, footer }) {

    return (
        <div className="CarouselText">
            <h2>{title}</h2>
            <p className="body">{body}</p>
            <p className="underline">{footer}</p>

        </div>
    )
}

export default CarouselText;