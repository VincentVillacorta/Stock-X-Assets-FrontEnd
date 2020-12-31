import React, { useState}  from 'react'
import SearchItem from './SearchItem'

import '../styles/SearchBar.css'

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState([]);

    const onChangeHandler = (event) => {
        if(event.target.value === ''){
            setSearchTerm([])
        }
        else{
            fetch('https://vv-stockx-api.herokuapp.com/search?item_name=' + event.target.value,{crossDomain: true})
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(Array.isArray(result)){
                    setSearchTerm([])
                    result.forEach((item) => {
                        setSearchTerm( searchTerm => [...searchTerm, <SearchItem name={item.name} url={item.thumbnail_url} price={item.price} collectionArr={props.collectionArr} setCollectionArr={props.setCollectionArr}/>])
                    })
                }
                else{
                    setSearchTerm([])
                }
            })
        }
        
    }

    return (
        <div className ="search-bar-box">
            <div className="search-bar-title">
                <h1>Add New Item</h1>
                <button>Add</button>
            </div>
            <input className="search-bar" type="search" placeholder="Search..." onChange={onChangeHandler} />
            <div className = "searches">{searchTerm}</div>
            
        </div>
    )
}

export default SearchBar