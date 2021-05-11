import React from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './hackerDetails.css'
const HackerDetails = (props) => {
    let photo_url = `https://hacker-voting.herokuapp.com/hacker/${props.id}/photo`
    return(
        <div className="card-container">
        <CardContainer>
            <div className="content">
            <h1><span className="name-header">{props.name}</span></h1>
            <div className="w3-cell-row content">
                <div className = "w3-cell ">
                    <img alt="" src={photo_url} className="w3-round img-content"
                    onError={(event)=> {event.target.onError=null;
                    event.target.src=process.env.PUBLIC_URL+"/hacker.jpg"}}/>
                </div>
                <div className = "w3-cell ">
                    <h4><span className="lebel">Expert level:{props.expertiseLevel}</span></h4>
                    <h4><span className="vote-lebel">votes:{props.votes}</span></h4>
                </div>
                
                <div className = "w3-cell "> <button className="w3-btn w3-green"
                onClick={ props.detailsClicked}
                >See details</button></div>
            </div>
            </div>
            
            
        </CardContainer>
        </div>
    )
}

export default HackerDetails