import React from 'react';
import Header from '../../Commons/Header/Header'
import Carousel from './Carousel/Carousel'
import BridgeComponent from './Bridge/BridgeComponent'
import Products from '../../Commons/Products/Products'



function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Carousel />
      <BridgeComponent />
      <Products />

    </div>
  );
}

export default Homepage;
