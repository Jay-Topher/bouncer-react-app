import React from 'react';
import Header from '../../Commons/Header/Header'
import Carousel from './Carousel/Carousel'
import BridgeComponent from './Bridge/BridgeComponent'
import Products from '../../Commons/Products/Products'
import MidBanner from './MidBanner/MidBanner'
import SubBridge from './SubBridge'



function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Carousel />
      <BridgeComponent />
      <Products />
      <MidBanner />
      <SubBridge />


    </div>
  );
}

export default Homepage;
