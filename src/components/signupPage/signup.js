import React, { useContext, useState } from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './signup.css'
import axios from 'axios'
import {Authcontext} from '../../context/authContext'
const SignUp = (props) =>{
        const [userCreds,setUserCreds] = useState({})
        const [auth,setAuth] = useContext(Authcontext)
        const handleCancel = () =>{
            props.history.push('/home')
        }
        const handleFieldChange = (value,field) =>{
            const userData = userCreds
            userData[field]=value
            setUserCreds(userData)
        }
        const handleSignup = async() =>{
            try{
                if(userCreds.password!==userCreds.cnfmpasswd){
                    throw new Error('Password and confirmed password did not match!!!')
                }
                const response = await axios.post('https://hacker-voting.herokuapp.com/user/signUp', userCreds)
                await setAuth(response.data)
                props.history.push('/dock')
            }catch(error){
                console.log(error)
                alert(error)
            }
            
        }
     return(
         <div className="container">
        <CardContainer>
            <div className="contents">
            <h1> Sign up ...</h1>
            <input type="text" className="w3-input w3-border input" placeholder="User Name ..."
            onChange={event => handleFieldChange(event.target.value,"userName")}/>
            <input type="password" className="w3-input w3-border input" placeholder="Password ...."
            onChange={event => handleFieldChange(event.target.value,"password")}/>
            <input type="password" className="w3-input w3-border input" placeholder="Confirm Password ...."
            onChange={event => handleFieldChange(event.target.value,"cnfmpasswd")}/>
            <input type="text" className="w3-input w3-border input" placeholder="Email id ...."
            onChange={event => handleFieldChange(event.target.value,"email")}/>
            <button className="w3-btn w3-green buttons" onClick={event=>handleSignup()}>Sign up</button>
            <button className="w3-btn w3-grey buttons" onClick={(event)=>handleCancel()}>Cancel</button>
            </div>
        </CardContainer>
        </div>
     )
    
}

export default SignUp