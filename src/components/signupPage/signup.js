import React, { useState } from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './signup.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import * as actiontype from '../store/action'
import HeaderRibbon from '../headerRibbon/headerRibbon'
const SignUp = (props) =>{
        const [userCreds,setUserCreds] = useState({})
        const dispatch = useDispatch()
        const handleCancel = () =>{
            props.history.push('/')
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
                dispatch({
                    type: actiontype.SET_AUTH,
                    data: response.data
                })
                props.history.push('/dock')
            }catch(error){
                console.log(error)
                alert(error)
            }
            
        }
     return(
         <div>
             <HeaderRibbon/>
         <div className="container">
        <CardContainer>
            <div className="contents">
            <h2 className="header-title"> Sign up ...</h2><br/>
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
        </div>
     )
    
}

export default SignUp