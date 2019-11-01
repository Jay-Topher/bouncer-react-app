import React from 'react';
import Carousel from './Carousel/Carousel'
import BridgeComponent from './Bridge/BridgeComponent'
import Products from '../../Commons/Products/Products'
import MidBanner from './MidBanner/MidBanner'
import SubBridge from './SubBridge'
import LatestNews from './LatestNews'
import FeaturedProducts from './FeaturedProducts'
import SearchQuery from './SearchQuery'



function Homepage() {
  return (
    <div className="Homepage">
      <Carousel />
      <BridgeComponent />
      <Products />
      <MidBanner />
      <SubBridge />
      <LatestNews />
      <FeaturedProducts />
      <SearchQuery />
    </div>
  );
}

export default Homepage;
