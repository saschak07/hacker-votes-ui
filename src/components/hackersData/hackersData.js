import React from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './hackersData.css'
const HackersData = (props) => {
    const photo_url = `http://localhost:9000/hacker/${props.hacker._id}/photo`
 return (<CardContainer>
        <div className="content">
            <span className="name-header"> <h1>{props.hacker.name}</h1></span>
            <div className="w3-cell-row content">
                <div className = "w3-cell cellcontent">
                        <span className="paragraphs">
                            <br/>
                            <img alt="" src={photo_url} className="w3-round img-content"
                    onError={(event)=> {event.target.onError=null;
                    event.target.src=process.env.PUBLIC_URL+"/hacker.jpg"}}/>
                            <p>Number of Challenges:{props.hacker.noOfChanllenges}</p>
                            <p>Level of Expertise: {props.hacker.expertiseLevel}</p>
                        </span>
                    </div>
                
                <div className = "w3-cell cellcontent">
                    <span className="paragraphs">
                        <p>Expert in:</p>
                        <table className="table-content">
                                <tr><td>Data structure:</td><td>{props.hacker.expertIn.dataStructure}</td></tr>
                                <tr><td>Algorithms:</td><td>{props.hacker.expertIn.algorithm}</td></tr>
                                <tr><td>C++:</td><td>{props.hacker.expertIn.cplusplus}</td></tr>
                                <tr><td>Java:</td><td>{props.hacker.expertIn.java}</td></tr>
                                <tr><td>Python:</td><td>{props.hacker.expertIn.python}</td></tr>
                            
                        </table>
                        <p className="lebel">Total votes:{props.hacker.votes}</p>
                    </span>
                </div>
            </div>
            <button className="w3-btn w3-blue button-title"
            onClick={props.detailsclicked}
            >close</button>
        </div>
 </CardContainer>)
}

export default HackersData