import React,{useState,useEffect,useContext} from 'react'
import Navbar from '../navbar/navbar'
import HackerDetails from '../hackerDetails/hackerDetails';
import {Authcontext} from '../../context/authContext'
import HackersData from '../hackersData/hackersData'
import axios from 'axios'
const DashBoard = () =>{
    console.log('dash board rendered')
    const [hackers,setHackers] = useState([])
    const [isDetailsclicked, setIsDetailsclicked] = useState(false)
    const [selectedHacker,setselectedHacker] = useState(null)
    const [auth,setAuth] = useContext(Authcontext)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get('https://hacker-voting.herokuapp.com/hackers',{
                    headers:{
                        'Authorization':`Basic ${auth.token}`
                    }
                })
                console.log(auth)
                console.log(response.data)
                await setHackers(response.data)
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
        
    },[auth])

    const handledetailsClicked = (id) =>{
        console.log(id)
        setIsDetailsclicked(!isDetailsclicked)
        if(id){
            setselectedHacker(hackers.find(data => data._id===id))
        }
    }


return(
    <div>
        <Navbar user={auth}/>
        {isDetailsclicked ?<HackersData hacker = {selectedHacker}
        detailsclicked ={even=>handledetailsClicked()} />
        : hackers.map(data => <HackerDetails key = {data._id} name={data.name}
        id={data._id} expertiseLevel = {data.expertiseLevel} votes={data.votes}
        detailsClicked ={event => handledetailsClicked(data._id)}
        />)}
    </div>
)
}

export default DashBoard