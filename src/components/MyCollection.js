import React, { useState, useEffect }  from 'react'
import CollectionItem from './CollectionItem'
import SearchItem from './SearchItem'

import '../styles/SearchBar.css'
import '../styles/SearchItem.css'

const MyCollection = () => {
    const [collectionArr, setCollectionArray] = useState([<SearchItem name="Jordan 1 Retro High Dark Mocha" url="https://stockx.imgix.net/images/Air-Jordan-1-Retro-High-Dark-Mocha-2-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1608736454" price='12'/>]);

    return (
        <div>
            <div>
                <h1>MyCollection</h1>
            </div>
            {collectionArr}
        </div>
    )
}

export default MyCollection