import React from 'react'
import InfoCard from './InfoCard'
import '../styles/MainPage.css'
import logo from '../images/stock-x-assets-logo.png'
import SearchBar from './SearchBar'
const MainPage = () => {
    return (
        <div className="main-page">
            <img className='logo' src={logo} alt="Application Logo"/>
            <div className='card-set'>
                <InfoCard title="Collection Owner" value="Vince"/>
                <InfoCard title="Overall Value" value="$XXX"/>
                <InfoCard title="Number of Items" value="$XXX"/>
            </div>
            <SearchBar/>
        </div>
        
    )
}



export default MainPage