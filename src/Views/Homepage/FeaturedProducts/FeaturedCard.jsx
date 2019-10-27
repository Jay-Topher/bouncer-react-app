import React from "react";
import money from "../../../Utils/Utils";
import { MdStar } from "react-icons/md";
import "./FeaturedCard.scss";

export default function FeaturedCard({
  image,
  productName,
  currentPrice,
  oldPrice,
  ratings
}) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < ratings) {
      stars.push(<MdStar className="goldStar" />);
    } else {
      stars.push(<MdStar className="greyStar" />);
    }
  }
  return (
    <div className="FeaturedCard">
        <div className="FeaturedCard-image">
          <img src={require(`../../../assets/img/${image}`)} alt="laptop" />
        </div>
        <div className="FeaturedCard-body">
          <p>{productName}</p>
          <div className="stars">{stars}</div>
          <div>
            <span>{money(currentPrice)}</span>
            <span className="crossed">{money(oldPrice)}</span>
          </div>
      </div>
    </div>
  );
}
