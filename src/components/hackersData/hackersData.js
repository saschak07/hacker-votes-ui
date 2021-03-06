import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import CardContainer from '../cardContainers/cardContainer'
import './hackersData.css'
import axios from 'axios'
const HackersData = (props) => {
    const photo_url = `https://hacker-voting.herokuapp.com/hacker/${props.hacker._id}/photo`
    const [clikedVoting,setClickedVoting] = useState(false)
    const auth = useSelector(state => state)
    const handleVote = () => {
        setClickedVoting(true)
    }
    const handleConfirmVote = async() =>{
        try{
            await axios.put(`https://hacker-voting.herokuapp.com/hackers/vote/${props.hacker._id}`,null,{
            headers:{
                'Authorization':`Basic ${auth.authData.token}`
            }
        })
         }catch(error){ alert(error.response.data.errMsg)}
         window.location.reload()
    }
    const content = clikedVoting?
    <div>
        <span className="name-header"> <h1 className="confirm-header">you are about to vote!</h1></span>
        <div className="confirm-content">
        <p className="lebel-data">Candidate: {props.hacker.name}</p>  <br/>
        <img alt="" src={photo_url} className="w3-round img-content confirm-image"
                    onError={(event)=> {event.target.onError=null;
                    event.target.src=process.env.PUBLIC_URL+"/hacker.jpg"}}/>
        <br/><br/>
        <p className="lebel-data">once you confirm your vote it cant be edited without admin intervention!</p> 
        </div>
        <button className="w3-btn w3-red confitm-button"
            onClick={event=>handleConfirmVote()}>Confirm vote!</button>
        <button className="w3-btn w3-blue confitm-button"
            onClick={props.detailsclicked}
            >close</button>
    </div>
    :<div className="content">
            <span className="header-style"> <h3>{props.hacker.name}</h3></span>
            <div className="w3-cell-row ">
                <div className = "w3-cell cellsize">
                        <span className="paragraphs">
                            <br/>
                            <img alt="" src={photo_url} className="w3-round img-content"
                    onError={(event)=> {event.target.onError=null;
                    event.target.src=process.env.PUBLIC_URL+"/hacker.jpg"}}/>
                    <br/>
                    <br/>
                            <p className="paracontent">Number of Challenges:{props.hacker.noOfChanllenges}</p>
                            <p className="paracontent">Level of Expertise: {props.hacker.expertiseLevel}</p>
                        </span>
                    </div>
                
                <div className = "w3-cell cellsize">
                    <span className="paragraphs">
                        <p className="paracontent">Expert in:</p>
                        <table className="table-content">
                                <tr><td>Data structure:</td><td>{props.hacker.expertIn.dataStructure}</td></tr>
                                <tr><td>Algorithms:</td><td>{props.hacker.expertIn.algorithm}</td></tr>
                                <tr><td>C++:</td><td>{props.hacker.expertIn.cplusplus}</td></tr>
                                <tr><td>Java:</td><td>{props.hacker.expertIn.java}</td></tr>
                                <tr><td>Python:</td><td>{props.hacker.expertIn.python}</td></tr>
                            
                        </table>
                        <p className="lebel paracontent">Total votes:{props.hacker.votes}</p>
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