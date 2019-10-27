import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import './FooterBouncer.scss'

export default function FooterBouncer() {
  return (
    <div className="FooterBouncer">
      <div className="bouncer">
        <h2>Bouncer</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.Since the 1500s, when an unknown printer.
        </p>
      </div>
      <div className="follow">
        <h6>Follow Us</h6>
        <p>
          Since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
        <div className="icons">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
      </div>
      <div className="contact">
        <h6>Contact Us</h6>
        <p>
          My Company , 4578 Marmora Road, Glasgow<br />
          D04 89GR<br /> 
          Call us now: 0123-456-789<br />
          Email: support@whatever.com
        </p>
      </div>
    </div>
  );
}
