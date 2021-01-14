import React from 'react'
import './cardContainer.css'

const cardContainer = (props) => {
    return (<div className="w3-card w3-animate-zoom w3-white details-body" 
        data-testid="cardContainer">
            {props.children}

        </div>
    )
        
}

export default cardContainer