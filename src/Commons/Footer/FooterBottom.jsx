import React from 'react'
import './FooterBottom.scss'

export default function FooterBottom() {
    return (
        <div className="FooterBottom">
            <div className="copyright">&copy; 2018 Ecommerce theme by www.bisenbaev.com</div>
            <div className="sponsors">
                <img src={require(`../../assets/img/western_union.png`)} alt=""/>
                <img src={require(`../../assets/img/mastercard.png`)} alt=""/>
                <img src={require(`../../assets/img/paypal.png`)} alt=""/>
                <img src={require(`../../assets/img/visa.png`)} alt=""/>
            </div>
        </div>
    )
}
