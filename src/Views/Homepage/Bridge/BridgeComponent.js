import React from "react";
import BridgeCard from "./BridgeCard";
import BridgeCard2 from "./BridgeCard2";
import BridgeCardMiddle from "./BridgeCardMiddle";
import './BridgeComponent.scss'

function BridgeComponent() {
  return (
    <div className="BridgeComponent">
      <div className="bridge container">
        <BridgeCard />
        <BridgeCardMiddle />
        <BridgeCard2 />
      </div>
    </div>
  );
}

export default BridgeComponent;
