import React,{useState,useEffect} from 'react'
import Navbar from '../navbar/navbar'
import HackerDetails from '../hackerDetails/hackerDetails';
import HackersData from '../hackersData/hackersData'
import {useSelector} from 'react-redux'
import axios from 'axios'
import './dashBoard.css'
import VoteChart from '../voteChart/voteChart'
import * as comparotrs from '../hackerComparators/comparators'
const DashBoard = () =>{
    console.log('dash board rendered')
    const [hackers,setHackers] = useState([])
    const [isDetailsclicked, setIsDetailsclicked] = useState(false)
    const [selectedHacker,setselectedHacker] = useState(null)
    const auth = useSelector(state => state)
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get('https://hacker-voting.herokuapp.com/hackers',{
                    headers:{
                        'Authorization':`Basic ${auth.authData.token}`
                    }
                })
                await setHackers(response.data)
            }catch(e){
                alert(e.response.data.errMsg)
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
    const handleSearch =(data) =>{
        const filteredHacker = hackers.filter(element=>element.name.toUpperCase()
        ===data.toUpperCase())
        setHackers(filteredHacker)
    }
    const handleSort = (sortBy) =>{
        let hackerList = [...hackers]
        console.log(sortBy)
        switch(sortBy){
            case 'noc': hackerList.sort(comparotrs.numberOfChallengesCompare)
                        setHackers(hackerList)
                        return;
            case 'nov': hackerList.sort(comparotrs.numberOfVotesCompare)
                        setHackers(hackerList)
                        return;

            case 'exp': hackerList.sort(comparotrs.expertiseLevelCompare)
                        setHackers(hackerList)
                        return
            default:
                return
        }
    }

return(
    <div >
        <Navbar user={auth.authData} search={handleSearch} sort={handleSort}/>
        <div className="scrollable-position w-100 position-fixed position-trbl-0 
        dashboard-background">
            <div className="container-fluid position-relative
             position-trbl-0 overflow-hidden h-100">
                 <div className="row">
                    <div className="col">
                        <div className="col-inner">
                            {isDetailsclicked ?<HackersData hacker = {selectedHacker}
                             detailsclicked ={even=>handledetailsClicked()} />
                            : hackers.map(data => <HackerDetails key = {data._id} name={data.name}
                            id={data._id} expertiseLevel = {data.expertiseLevel} votes={data.votes}
                            detailsClicked ={event => handledetailsClicked(data._id)}
                            />)}
        </div>
        </div>
        <div class="col">
        <div class="col-inner">
            <VoteChart hackers={hackers}/>
            
            </div></div>
        </div>
        </div>
        </div>
    </div>
)
}

export default DashBoard