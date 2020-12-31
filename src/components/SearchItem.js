import React, { useState, useEffect }  from 'react'

import '../styles/SearchItem.css'



const SearchItem = (props) => {


    return (
        <div className ="search-item">
            <img className='item-image' src={props.url} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default SearchItem