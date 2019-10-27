import React from 'react'
import LatestNewsCard from './LatestNewsCard'
import { latestNews } from '../../../data/metadata.json'
import './LatestNews.scss'

export default function LatestNews() {
    return (
        <div className="LatestNews">
            <h2>Latest News</h2>
            <div className="container latest">
                {latestNews.map(({ date, title, body, image }, index) => (
                    <LatestNewsCard image={image} title={title} body={body} date={date} key={index} />
                ))}
            </div>
            
        </div>
    )
}
