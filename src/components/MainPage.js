import React, {useState, useEffect} from 'react'
import InfoCard from './InfoCard'
import '../styles/MainPage.css'
import logo from '../images/stock-x-assets-logo.png'
import SearchBar from './SearchBar'
import MyCollection from './MyCollection'
import CollectionItem from './CollectionItem'


const MainPage = (props) => {
    const [collectionArr, setCollectionArr] = useState([])
    const [allowedToAdd, setAllowedToAdd] = useState(true)
    //const [userValue, setUserValue] = useState(0)

    useEffect(() => {
        if(props.userInfo.item_collection && allowedToAdd){
            props.userInfo.item_collection.forEach((item) => {
                setCollectionArr(collectionArr => [...collectionArr, <CollectionItem name={item.item_name} 
                    url={item.item_url} 
                    price={item.item_price}/>])
            })
        }
        setAllowedToAdd(false)
        
        fetch('https://vv-stockx-api.herokuapp.com/users/fullvalue', {
            method: 'GET',
            credentials: 'include'})
            .then(res => res.json())
            .then(result => console.log(result))
            .catch((error) => console.log(error))
    })

    return (
        <div className="main-page">
            <img className='logo' src={logo} alt="Application Logo"/>
            <div className='card-set'>
                <InfoCard title="Collection Owner" value='___'/>
                <InfoCard title="Overall Value" value='__'/>
                <InfoCard title="Number of Items" value='___'/>
            </div>
            <SearchBar collectionArr={collectionArr} setCollectionArr={setCollectionArr}/>
            <MyCollection collectionArr={collectionArr} setCollectionArr={setCollectionArr}/>
        </div>
        
    )
}



export default MainPage