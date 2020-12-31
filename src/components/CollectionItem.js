import React from 'react'
import '../styles/CollectionItem.css'


const CollectionItem = (props) => {
    return (
        <div className ="collection-item">
            <img className='item-image' src={props.url} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
    

}

export default CollectionItem;