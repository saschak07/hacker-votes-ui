import React,{useState} from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './hackersData.css'
const HackersData = (props) => {
    const photo_url = `https://hacker-voting.herokuapp.com/hacker/${props.hacker._id}/photo`
    const [clikedVoting,setClickedVoting] = useState(false)
    const handleVote = () => {
        setClickedVoting(true)
    }
    const content = clikedVoting?
    <div>
        <span className="name-header"> <h1 className="confirm-header">you are about to vote!</h1></span>
        <div className="confirm-content">
        <p className="lebel">Candidate: {props.hacker.name}</p>  <br/>
        <img alt="" src={photo_url} className="w3-round img-content confirm-image"
                    onError={(event)=> {event.target.onError=null;
                    event.target.src=process.env.PUBLIC_URL+"/hacker.jpg"}}/>
        <br/>
        <p className="lebel">once you confirm your vote it cant be edited without admin intervention!</p>  <br/>
        </div>
        <button className="w3-btn w3-red button-title"
            >Confirm vote!</button>
        <button className="w3-btn w3-blue button-title"
            onClick={props.detailsclicked}
            >close</button>
    </div>
    :<div className="content">
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
            <button className="w3-btn w3-green button-title" onClick={event=>handleVote()}
            >Vote</button>
            <button className="w3-btn w3-blue button-title"
            onClick={props.detailsclicked}
            >close</button>
        </div>
 return (<CardContainer>
        {content}
 </CardContainer>)
}

export default HackersData