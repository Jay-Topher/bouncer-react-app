import React from "react";
import Dropdown from "./Dropdown";
import ProfileText from "./ProfileText";
import './TopHead.scss';

function TopHead() {
  return (
    <div className='shadowed'>
    <div className="TopHead container">
      <div className="TopHead__Dropdown">
        <Dropdown text={"EN"} />
        <Dropdown text={"USD"} dClass={'ml-1'} />
      </div>
      <div className="TopHead__ProfileText">
        <ProfileText uniqueClass={"far fa-user"} text={"My Profile"} />
        <ProfileText uniqueClass={"far fa-user"} text={"0 Items"} />
        <ProfileText uniqueClass={""} text={"$0.00"} />
        <ProfileText uniqueClass={"fas fa-search"} text={""} />
      </div>
    </div>
    </div>
  );
}

export default TopHead;