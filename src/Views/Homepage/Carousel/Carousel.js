import React from 'react';
import CarouselText from './CarouselText';
import './Carousel.scss'
import iPhonex from '../../../assets/img/iPhone_x.png';

function Carousel() {

    return (
        <div className="Carousel">
            <div className="caro container">

            <CarouselText title={'iPhone X'} body={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."} footer={'MORE'} />

            <img src={iPhonex} alt="iPhone X"/>
            </div>
        </div>

    )
}

export default Carousel;