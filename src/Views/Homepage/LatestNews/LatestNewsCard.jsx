import React from "react";
import './LatestNewsCard.scss'


export default function LatestNewsCard({ image, title, body, date }) {
  return (
    <div className="LatestNewsCard">
      <div className="img">
        <img src={require(`../../../assets/img/${image}`)} alt="" />
      </div>
      <div className="card-description">
        <p className="date">{date}</p>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
}
