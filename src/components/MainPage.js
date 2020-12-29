import React from 'react'
import InfoCard from './InfoCard'
import './MainPage.css'
import logo from '../images/stock-x-assets-logo.png'
const MainPage = () => {
    return (
        <div>
            <img className='logo' src={logo}/>
            <div className='card-set'>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
            </div>
        </div>
        
    )
}



export default MainPage