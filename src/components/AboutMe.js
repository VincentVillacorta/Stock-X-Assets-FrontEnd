import React from 'react'
import '../styles/AboutMe.css'
import profilepic from '../images/profile-pic.png'

const AboutMe = () => {
    return (
        <div className>
            <img className='profile-pic'src={profilepic} alt="profile-pic"></img>
            <h2>Developed By: Vincent Villacorta</h2>
            <p><bold>This site is NOT AFFILIATED with StockX.</bold> I developed this web-app to learn more about the MERN stack.</p>
            <p>I will most likely be continuing to add more and more features, so check back in soon!</p>
        </div>
        
    )
}



export default AboutMe