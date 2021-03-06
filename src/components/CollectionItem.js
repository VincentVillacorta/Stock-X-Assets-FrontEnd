import React from 'react'
import '../styles/CollectionItem.css'


const CollectionItem = (props) => {

    const onDeleteClickHandler = (event) => {
        
        // fetch('http://localhost:3000/users/items', {
        fetch('https://vv-stockx-api.herokuapp.com/users/items', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "item_name": props.name,
            })
        })

        props.setNumItems((numItems) => {
            return numItems - 1
        })
        
        props.setBidValue((bidValue) => {
            return bidValue - props.bid_price
        })

        
        props.setUserValue((userValue) => {
            return userValue - props.price
        })

        props.setCollectionArr((collectionArr) => {
            return collectionArr.filter((item) => item.props.keyId !== props.keyId)
        })
         
    }
    

    return (
        <div className ="collection-item">
            <img className='item-image' src={props.url} alt={props.name}/>
            
            <button className='delete-button' onClick={onDeleteClickHandler}>Delete</button>
            <p className='item-name'>{props.name}</p>
            <p className='item-price'>Retail: ${props.price ? props.price : 'unlisted'} | Highest Bid: ${props.bid_price ? props.bid_price : 'unlisted'}</p>
        </div>
    )
    

}

export default CollectionItem;