import React from 'react'
import '../styles/InfoCard.css'

const InfoCard = (props) => {
    if(props.money){
    return (
        <div className = "info-card">
            <h2>{props.title}</h2>
            <p>${props.value}</p>
        </div>
    )
}
    else {
        return (
            <div className = "info-card">
                <h2>{props.title}</h2>
                <p>{props.value}</p>
            </div>
        )
    }
}

export default InfoCard;