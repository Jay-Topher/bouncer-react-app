import React from "react";
import { MdStar } from "react-icons/md";
import "./ProductCard.scss";
import money from '../../Utils/Utils';
import { useDispatch } from 'react-redux'
import add from '../../Action/index'

export default function ProductCard({
  productName,
  ratings,
  currentPrice,
  oldPrice
}) {

  const dispatch = useDispatch()

  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < ratings) {
      stars.push(<MdStar className="goldStar" key={i} />);
    } else {
      stars.push(<MdStar className="greyStar" key={i} />);
    }
  }

  return (
    <div className="ProductCard" onClick={() => dispatch(add())}>
      <div className="product-image">
        <img src={require('../../assets/img/apple_laptop.png')} alt="laptop" />
      </div>
      <hr />
      <div className="ProductCard__body">
        <h4>{productName}</h4>
        <div className="stars">{stars}</div>
        <div>
          <span>{money(currentPrice)}</span>
          <span className="crossed">{money(oldPrice)}</span>
        </div>
      </div>
    </div>
  );
}
