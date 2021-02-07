import React from 'react'
import {useHistory} from 'react-router-dom'
const  NavBar = (props) =>{

  const history = useHistory()
  const handleInsertData = () => {
    history.push('/addHackers')
  }
  const adminControls = props.user.isAdmin?<div><button className="w3-bar-item w3-button" 
  onClick={event=>handleInsertData()}>Insert new Hackers</button>
  <button className="w3-bar-item w3-button"
  >Modify Hackers</button></div>:null

 return ( <div className="w3-bar w3-light-grey">
 <button className="w3-bar-item w3-button" >Home</button>
 {adminControls}
 <div className="w3-dropdown-hover">
    <button className="w3-button" >Sort records by</button>
    <div className="w3-dropdown-content w3-bar-block w3-card-4" >
      <a href="/" className="w3-bar-item w3-button" >Number of votes</a>
      <a href="/" className="w3-bar-item w3-button" >Number of problems solved</a>
      <a href="/" className="w3-bar-item w3-button" >Expertise Level</a>
    </div>
  </div>
 <input type="text" className="w3-bar-item w3-input" placeholder="Search By Name..."/>
 <a href="/" className="w3-bar-item w3-button w3-green">Go</a>
 <button className="w3-bar-item w3-button w3-red">Logout</button>
</div> )
}

export default NavBar