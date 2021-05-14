import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'
const  NavBar = (props) =>{
  const auth = useSelector(state => state)
  const [searchData,setSearchData] = useState(null)
  const history = useHistory()
  const handleInsertData = () => {
    history.push('/addHackers')
  }
  const handleLogout = async() => {
    try{
      await axios.post('https://hacker-voting.herokuapp.com/user/logout',null,{
        headers:{
            'Authorization':`Basic ${auth.authData.token}`
        }
    })
    }catch(error){
      alert(error.response.data.errorMsg);
    }
    history.push('/')
  }
  const handleSearchString = (event) =>{
    setSearchData(event.target.value)
  }

  const adminControls = auth.authData.isAdmin?<div><button className="w3-bar-item w3-button" 
  onClick={event=>handleInsertData()}>Insert new Hackers</button>
  </div>:null

 return ( <div className="w3-bar w3-light-grey">
 <a href="/dock" className="w3-bar-item w3-button">Home</a>
 {adminControls}
 <div className="w3-dropdown-hover">
    <button className="w3-button" >Sort records by</button>
    <div className="w3-dropdown-content w3-bar-block w3-card-4" >
      <button className="w3-bar-item w3-button" 
      onClick={event=>props.sort('nov')}>Number of votes</button>
      <button className="w3-bar-item w3-button" 
      onClick={event=>props.sort('noc')}>Number of challanges solved</button>
      <button className="w3-bar-item w3-button" 
      onClick={event=>props.sort('exp')}>Expertise Level</button>
    </div>
  </div>
 <input type="text" className="w3-bar-item w3-input" placeholder="Search By Name..." 
 onChange = {event => handleSearchString(event)}
 />
 <button className="w3-bar-item w3-button w3-green" onClick={event => props.search(searchData)}>Go</button>
 <button className="w3-bar-item w3-button w3-red" onClick={event => handleLogout()}>Logout</button>
</div> )
}

export default NavBar