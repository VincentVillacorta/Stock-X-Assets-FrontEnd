import React from 'react'
import '../styles/InfoCard.css'

const InfoCard = (props) => {
    return (
        <div className = "info-card">
            <h2>{props.title}</h2>
            <a>{props.value}</a>
        </div>
    )
}

export default InfoCard;