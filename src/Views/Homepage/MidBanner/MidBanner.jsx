import React from "react";
import CarouselText from "../Carousel/CarouselText";
import "./MidBanner.scss";

export default function MidBanner() {
  return (
    <div className="MidBanner">
      <div className="MidBanner__body container">
        <CarouselText
          title={"iPhone 6 Plus"}
          body={"Performance and design. Taken right to the edge."}
          footer={"SHOP NOW"}
        />
        <div className="banner-img">
          <img
            src={require("../../../assets/img/iPhone_6_banner.png")}
            alt="iPhone 6"
          />
        </div>
      </div>
    </div>
  );
}
