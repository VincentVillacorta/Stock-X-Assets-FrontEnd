import React  from 'react'
// import CollectionItem from './CollectionItem'
// import SearchItem from './SearchItem'

import '../styles/SearchBar.css'
import '../styles/SearchItem.css'
import '../styles/MyCollection.css'

const MyCollection = (props) => {

    return (
        <div className='my-collection-box'>
            <div className='my-collection-title'>
                <h1>My Collection</h1>
            </div>
            <div className='my-collection'>
                {props.collectionArr}
            </div>
        </div>
    )
}

export default MyCollection