import React from "react";
import Dropdown from "./Dropdown";
import ProfileText from "./ProfileText";
import './TopHead.scss';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux'

function TopHead() {
  const cart = useSelector(state => state)

  return (
    <div className='shadowed'> 
    <div className="TopHead container">
      <div className="TopHead__Dropdown">
        <Dropdown text={"EN"} />
        <Dropdown text={"USD"} dClass={'ml-1'} />
      </div>
      <div className="TopHead__ProfileText">
        <ProfileText uniqueClass={<FaUserAlt />} text={"My Profile"} />
        <ProfileText uniqueClass={<FaShoppingCart />} text={`${cart} Items`} />
        <ProfileText uniqueClass={""} text={"$0.00"} />
        <ProfileText uniqueClass={"fas fa-search"} text={""} />
      </div>
    </div>
    </div>
  );
}

export default TopHead;