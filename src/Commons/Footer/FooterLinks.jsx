import React from 'react'
import { footerLinks, footerLists } from '../../data/metadata.json'
import './FooterLinks.scss'

export default function FooterLinks() {
    return (
        <div className="FooterLinks">
            {
                footerLinks.map((val, i) => (
                    <div key={i}>
                    <h3>{val}</h3>
                    <ul>
                        {
                            footerLists.map((list, index) => (
                                <li key={index}>
                                    {list}
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                ))
            }     
        </div>
    )
}
