import React from 'react'
import './SearchQuery.scss'

export default function SearchQuery() {
    return (
        <div className="SearchQuery">
            <form>
                <input className="search" type="text" placeholder="Search Query..."/>
                <button className="but">Search</button>
            </form>
        </div>
    )
}
