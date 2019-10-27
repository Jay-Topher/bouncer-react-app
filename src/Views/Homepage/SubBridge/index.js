import React from "react";
import SubBridgePosts from "./SubBridgePosts";
import { subBridge } from "../../../data/metadata.json";
import './SubBridge.scss'

export default function index() {
  return (
    <div className="SubBridge">
      <div className="sub container">
        {subBridge.map((value, index) => (
          <SubBridgePosts
            key={index}
            image={value.image}
            title={value.title}
            body={value.body}
          />
        ))}
      </div>
    </div>
  );
}
