import React from "react";
import FooterBouncer from "./FooterBouncer";
import './Footer.scss'
import FooterLinks from './FooterLinks'
import FooterBottom from './FooterBottom'


export default function Footer() {
  return (
    <div className="Footer">
        <hr/>
      <div className="container foot">
        <FooterBouncer />
        <hr/>
        <FooterLinks />
      </div>
      <hr/>
      <div className="container foot">
        <FooterBottom />
      </div>
    </div>
  );
}
