import React, {useState, useEffect} from 'react'
import InfoCard from './InfoCard'
import '../styles/MainPage.css'
import SearchBar from './SearchBar'
import MyCollection from './MyCollection'
import CollectionItem from './CollectionItem'
const rand = require('random-key')


const MainPage = (props) => {
    const [collectionArr, setCollectionArr] = useState([])
    const [userValue, setUserValue] = useState('loading...')
    const [numItems, setNumItems] = useState(0)
    const [canUpdate, setCanUpdate] = useState(true)



    if(canUpdate){
        setCollectionArr([])
        if(props.userInfo.item_collection){
            setNumItems(props.userInfo.item_collection.length)
            props.userInfo.item_collection.forEach((item) => {
                setCollectionArr(collectionArr => [...collectionArr, <CollectionItem 
                    key={rand.generateDigits(8)}
                    keyId={rand.generateDigits(8)}
                    name={item.item_name} 
                    url={item.item_url} 
                    price={item.item_price}
                    collectionArr={collectionArr}
                    setCollectionArr={setCollectionArr}
                    setUserValue={setUserValue}
                    setNumItems={setNumItems}/>])
            })

     // fetch('https://vv-stockx-api.herokuapp.com/users/fullvalue', {
        fetch('http://localhost:4000/users/fullvalue', {
            method: 'GET',
            credentials: 'include'})
            .then(res => res.json())
            .then(result => {setUserValue(result)})
            .catch((error) => console.log(error))
        
         }
        setCanUpdate(false)
    }

    

    return (
        <div className="main-page">
            <MyCollection collectionArr={collectionArr} setCollectionArr={setCollectionArr} userInfo={props.userInfo} userValue={userValue} numItems={numItems}/>
            <SearchBar collectionArr={collectionArr} setCollectionArr={setCollectionArr}
                        userValue={userValue} setUserValue={setUserValue}
                        setNumItems={setNumItems}/>
        </div>
        
    )
}



export default MainPage