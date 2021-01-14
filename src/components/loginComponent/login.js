import React from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './login.css'
const login =(props) =>{

    const handleLogin = () => {
        props.history.push('/login')
    }

    const handleSignUp = () =>{
        props.history.push('/signup')
    }
    return(
    <div className="card-location">
    <CardContainer className="card-location">
        <h1 className="header-title">Welcome to voters app</h1>
        <br/>
        <button className="w3-button w3-blue button-title"
        onClick = {(event) => handleLogin()}
        >Login</button>
        <br/>
        <br/>
        <hr className="line"></hr>
        <span className="w3-badge w3-grey separator">OR</span>
        <hr className="line"></hr>
        <br/>
        <br/>
        <button className="w3-button w3-green button-title"
        onClick = {(event) => handleSignUp()}
        >Sign up</button>

    </CardContainer>
    </div>)
    
}

export default login