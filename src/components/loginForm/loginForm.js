import React,{useState} from 'react'
import CardContainer from '../cardContainers/cardContainer'
import './loginForm.css'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import * as actiontype from '../store/action'
import HeaderRibbon from '../headerRibbon/headerRibbon'
import Loader from '../loader/loader'

const LoginForm = (props) => {
    const dispatch = useDispatch()
    const [userName,setUserName] = useState('')
    const[passwd, setPasswd] = useState('')
    const[isWaiting,setIsWaiting] = useState(false)
    const handleCancel = () =>{
        props.history.push('/')
    }
    const changeUserName = (value) => {
        setUserName(value)
    }
    const changePasswd = (value) => {
        setPasswd(value)
    }
    const handleLogin = async() => {
        const creds = { userName: userName, password: passwd}
        setIsWaiting(true)
        try{
            const response = await axios.post('https://hacker-voting.herokuapp.com/user/login',creds);
            console.log(response)
            dispatch({
                type: actiontype.SET_AUTH,
                data: response.data
            })
            setIsWaiting(false)
            props.history.push('/dock')
        }
        
        catch(error) {
            alert(error.response.data.errMsg)
        }
    }
    const loader = isWaiting? <Loader/>:null
 return(
     <div>
         <HeaderRibbon/>
     <div className="container">
    <CardContainer className="container">
        <div className = "contents">
        <h2 className="header-title"> Login ...</h2>
        <br/>
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
    {loader}
    </div>
 )
}

export default LoginForm