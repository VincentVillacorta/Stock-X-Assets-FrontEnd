import React from 'react'
import InfoCard from './InfoCard'
import '../styles/MainPage.css'
import logo from '../images/stock-x-assets-logo.png'
import SearchBar from './SearchBar'
const MainPage = () => {
    return (
        <div className>
            <img className='logo' src={logo} alt="Application Logo"/>
            <div className='card-set'>
                <InfoCard title="Collection Owner" value="Temp Name"/>
                <InfoCard title="Overall Value" value="$XXX"/>
                <InfoCard title="Number of Items" value="$XXX"/>
            </div>
            <SearchBar/>
        </div>
        
    )
}



export default MainPage