import React from "react";
import FeaturedCard from "./FeaturedCard";
import { featuredProducts } from "../../../data/metadata.json";
import './FeaturedProducts.scss'

export default function FeaturedProducts() {
  return (
    <div className="FeaturedProducts">
        <h2>Featured Products</h2>
      <div className="container featured">
        {featuredProducts.map(
          ({ id, productName, ratings, currentPrice, oldPrice, image }) => (
            <FeaturedCard
              key={id}
              productName={productName}
              ratings={ratings}
              currentPrice={currentPrice}
              oldPrice={oldPrice}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
}
