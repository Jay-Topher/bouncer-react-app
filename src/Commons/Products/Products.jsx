import React from "react";
import ProductHeader from "./ProductHeader";
import ProductCard from "./ProductCard";
import { bestSeller } from "../../data/metadata.json";
import "./Products.scss";

const { data } = bestSeller;

export default function Products() {
  return (
    <div className="container">
      <ProductHeader />
      <div className="Products">
        {data.map(value => (
          <ProductCard
            productName={value.productName}
            ratings={value.ratings}
            currentPrice={value.currentPrice}
            oldPrice={value.oldPrice}
          />
        ))}
      </div>
      <div className="more">Load More</div>
    </div>
  );
}
