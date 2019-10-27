import React from 'react';
import Header from '../../Commons/Header/Header'
import Carousel from './Carousel/Carousel'
import BridgeComponent from './Bridge/BridgeComponent'
import Products from '../../Commons/Products/Products'
import MidBanner from './MidBanner/MidBanner'
import SubBridge from './SubBridge'
import LatestNews from './LatestNews'
import FeaturedProducts from './FeaturedProducts'



function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <Carousel />
      <BridgeComponent />
      <Products />
      <MidBanner />
      <SubBridge />
      <LatestNews />
      <FeaturedProducts />



    </div>
  );
}

export default Homepage;
