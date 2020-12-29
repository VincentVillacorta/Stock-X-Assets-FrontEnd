import React from 'react'
import '../styles/SideNav.css'

const SideNav = () => {
    return (
        <div className="sideNav">
            <div className="sideNav-link-group">
                <a className="sideNav-link">Login</a>
                <a className="sideNav-link">Collection</a>
                <a className="sideNav-link">About</a>
            </div>
        </div>
    )
}



export default SideNav