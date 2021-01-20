import React  from 'react'
import CollectionItem from './CollectionItem'
import '../styles/SearchItem.css'
const rand = require('random-key')


const SearchItem = (props) => {

    const onClickHandler = (event) => {
        
        fetch('http://localhost:4000/users/items', {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "item_name": props.name,
                "item_url": props.url,
                "item_price": props.price,
                "item_bid_price": props.bid_price
            })
        })

        props.setUserValue((userValue) => {
            return userValue + props.price
        })

        props.setBidValue((bidValue) => {
            return bidValue + props.bid_price
        })

        props.setNumItems((numItems) => {
            return numItems + 1
        })

        props.setCollectionArr((collectionArr) => {
            return [...collectionArr,
                <CollectionItem 
                    key={rand.generateDigits(8)}
                    keyId={rand.generateDigits(8)}
                    name={props.name} 
                    url={props.url} 
                    price={props.price}
                    bid_price={props.bid_price}
                    collectionArr={collectionArr}
                    setCollectionArr={props.setCollectionArr}
                    setUserValue={props.setUserValue}
                    setBidValue={props.setBidValue}
                    setNumItems={props.setNumItems}/>
                ]
        })

    }

    return (
        <div className ="search-item" onClick={onClickHandler}>
            <img className='item-image' src={props.url} alt={props.name} />
            <h1>{props.name}</h1>
            <p>Retail Price: ${props.price}</p>
            <p>Highest Bid: ${props.bid_price}</p>
        </div>
    )
}

export default SearchItem