import React  from 'react'
// import CollectionItem from './CollectionItem'
// import SearchItem from './SearchItem'
import InfoCard from './InfoCard'
import '../styles/SearchBar.css'
import '../styles/SearchItem.css'
import '../styles/MyCollection.css'


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    console.log(obj)
    return true;
}

const MyCollection = (props) => {

    return (
        <div className='my-collection-box'>
            <div className='header-group'>
                <InfoCard title="Overall Value" value={props.userValue}/>
                <InfoCard title="Number of Items" value={props.numItems}/>
                <InfoCard title="Collection Owner" value={!isEmpty(props.userInfo)? props.userInfo.username : '__'}/>
            </div>
            <div className='my-collection-title'>
                <h3>My Collection</h3>
                <div className='my-collection'>
                    {props.collectionArr}
                </div>
            </div>
            
        </div>
    )
}

export default MyCollection