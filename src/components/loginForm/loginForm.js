import React,{useContext,useState} from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './loginForm.css'
import {Authcontext} from '../../context/authContext'
import axios from 'axios'

const LoginForm = (props) => {
    const [auth,setAuth] = useContext(Authcontext)
    const [userName,setUserName] = useState('')
    const[passwd, setPasswd] = useState('')
    const handleCancel = () =>{
        props.history.push('/home')
    }
    const changeUserName = (value) => {
        setUserName(value)
    }
    const changePasswd = (value) => {
        setPasswd(value)
    }
    const handleLogin = async() => {
        const creds = { userName: userName, password: passwd}
        try{
            const response = await axios.post('https://hacker-voting.herokuapp.com/user/login',creds);
            console.log(response)
            await setAuth(response.data)
            console.log(auth)
            props.history.push('/dock')
        }
        
        catch(error) {
            console.log(error)
        }
    }

 return(
     <div className="container">
    <CardContainer>
        <div className="contents">
        <h1> Login ...</h1>
        <input type="text" className="w3-input w3-border" placeholder="User Name ..."
        value={userName} onChange={event => changeUserName(event.target.value)}/>
        <br/>
        <input type="password" className="w3-input w3-border" placeholder="Password ...."
        value={passwd} onChange={event => changePasswd(event.target.value)}/>
        <button className="w3-btn w3-blue buttons" onClick={event=>handleLogin()}>Login</button>
        <button className="w3-btn w3-grey buttons" onClick={(event)=>handleCancel()}>Cancel</button>
        </div>
    </CardContainer>
    </div>
 )
}

export default LoginForm