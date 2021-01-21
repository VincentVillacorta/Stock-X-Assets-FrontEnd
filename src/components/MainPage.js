import React, {useState, useEffect} from 'react'
import '../styles/MainPage.css'
import SearchBar from './SearchBar'
import MyCollection from './MyCollection'
import CollectionItem from './CollectionItem'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const rand = require('random-key')

const MainPage = (props) => {
    const [collectionArr, setCollectionArr] = useState([])
    const [bidValue, setBidValue] = useState('loading...')
    const [userValue, setUserValue] = useState('loading...')
    const [numItems, setNumItems] = useState(0)
    const [canUpdate, setCanUpdate] = useState(true)
    let history = useHistory();


    if(!props.userInfo.item_collection){
        return (
            <p style={{"margin-top": "30vh"}}>Please log in or create account.</p>
        )
    }
    else {
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
                        bid_price={item.item_bid_price}
                        collectionArr={collectionArr}
                        setCollectionArr={setCollectionArr}
                        setUserValue={setUserValue}
                        setBidValue={setBidValue}
                        setNumItems={setNumItems}/>])
                })
    
         // fetch('https://vv-stockx-api.herokuapp.com/users/fullvalue', {
            fetch('https://vv-stockx-api.herokuapp.com/users/fullvalue', {
                method: 'GET',
                crossDomain: true,
                credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                })
                .then(res => res.json())
                .then(result => {setUserValue(result)})
                .catch((error) => console.log(error))
            
            
            fetch('https://vv-stockx-api.herokuapp.com/users/bidvalue', {
                method: 'GET',
                credentials: 'include',
                crossDomain: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
                })
                .then(res => res.json())
                .then(result => {setBidValue(result)})
                .catch((error) => console.log(error))
            
            setCanUpdate(false)
            }
        }
    }
    

    

    return (
        <div className="main-page">
            <MyCollection collectionArr={collectionArr} setCollectionArr={setCollectionArr}
                         userInfo={props.userInfo} userValue={userValue} 
                         bidValue={bidValue} numItems={numItems}/>
            <SearchBar collectionArr={collectionArr} setCollectionArr={setCollectionArr}
                        userValue={userValue} setUserValue={setUserValue}
                        bidValue={bidValue} setBidValue={setBidValue}
                        setNumItems={setNumItems}/>
        </div>
        
    )
}



export default MainPage