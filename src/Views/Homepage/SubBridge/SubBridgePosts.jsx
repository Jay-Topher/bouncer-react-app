import React from "react";
import "./SubBridgePosts.scss";

export default function SubBridgePosts({ image, title, body }) {
  return (
    <div className="SubBridgePosts">
      <div className="img">
      <img src={require(`../../../assets/img/${image}`)} alt="avatar" />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
