import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = () => {
    return (
        <div className ="search-bar-box">
            <h1>My Collection</h1>
            <input className="search-bar" type="search" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar