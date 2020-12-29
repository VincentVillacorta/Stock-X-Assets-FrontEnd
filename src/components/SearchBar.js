import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = () => {
    return (
        <div className ="search-bar-box">
            <div className="search-bar-title">
                <h1>My Collection</h1>
                <button>Add New</button>
            </div>
            <input className="search-bar" type="search" placeholder="Search..."/>
        </div>
    )
}

export default SearchBar