import React from 'react'

const  NavBar = (props) =>{
  const adminControls = props.user.isAdmin?<div><a href="/home" className="w3-bar-item w3-button">Insert new Hackers</a>
  <a href="/home" className="w3-bar-item w3-button">Modify Hackers</a></div>:null

 return ( <div className="w3-bar w3-light-grey">
 <a href="/dock" className="w3-bar-item w3-button">Home</a>
 {adminControls}
 <div className="w3-dropdown-hover">
    <button className="w3-button">Sort records by</button>
    <div className="w3-dropdown-content w3-bar-block w3-card-4">
      <a href="/home" className="w3-bar-item w3-button">Number of votes</a>
      <a href="/home" className="w3-bar-item w3-button">Number of problems solved</a>
      <a href="/home" className="w3-bar-item w3-button">Expertise Level</a>
    </div>
  </div>
 <input type="text" className="w3-bar-item w3-input" placeholder="Search By Name..."/>
 <a href="/home" className="w3-bar-item w3-button w3-green">Go</a>
 <button className="w3-bar-item w3-button w3-red">Logout</button>
</div> )
}

export default NavBar