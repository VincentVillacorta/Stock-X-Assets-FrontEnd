import React  from 'react'
import CollectionItem from './CollectionItem'
import '../styles/SearchItem.css'



const SearchItem = (props) => {

    const onClickHandler = (event) => {
        props.setCollectionArr((collectionArr) => 
            {
                return [...collectionArr,
                    <CollectionItem name={props.name} 
                        url={props.url} 
                        price={props.price}/>
                    ]
            })
    }

    return (
        <div className ="search-item" onClick={onClickHandler}>
            <img className='item-image' src={props.url} alt={props.name} />
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default SearchItem