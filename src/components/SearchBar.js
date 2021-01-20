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
            fetch('http://localhost:4000/search?item_name=' + event.target.value,{crossDomain: true})
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(Array.isArray(result)){
                    setSearchTerm([])
                    result.forEach((item) => {
                        console.log(item.price)
                        setSearchTerm( searchTerm => [...searchTerm, <SearchItem name={item.name} url={item.thumbnail_url} price={item.price} bid_price={item.highest_bid}
                            collectionArr={props.collectionArr} setCollectionArr={props.setCollectionArr}
                            userValue={props.userValue} setUserValue={props.setUserValue} 
                            bidValue={props.bidValue} setBidValue={props.setBidValue} setNumItems={props.setNumItems}/>])
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
                <h1>Add New Items </h1>
                <p>(search and click to add)</p>
            </div>
            <input className="search-bar" type="search" placeholder="Search..." onChange={onChangeHandler} />
            <div className = "searches">{searchTerm}</div>
            
        </div>
    )
}

export default SearchBar