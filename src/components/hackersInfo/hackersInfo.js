import React,{useState} from 'react'
import './hackersInfo.css'
import CardContainer from '../cardContainers/cardContainer'
import axios from 'axios'
import {useSelector} from 'react-redux'

const HackersInfo = (props) =>{
const [hackerData,setHackerData] = useState({expertIn:{}})
const auth = useSelector(state => state)
const handleValueChange =(value,field) =>{
    let data = hackerData
    if(field.includes("expertIn")){
        data.expertIn[field.split(".").pop()] = value
        return
    }
    data[field] = value
    setHackerData(data)
}
const handleClose = () =>{
    props.history.push('/dock')
}
const handleSubmit = async() =>{
    console.log(hackerData)
    console.log(auth)
    try{
        const response = await axios.post('https://hacker-voting.herokuapp.com/hacker',hackerData,
        {
            headers:{
                'Authorization':`Basic ${auth.authData.token}`
            }
        }
        )
        console.log(response.data)
        const form = new FormData()
        form.append("photo",hackerData.upload,hackerData.upload.name)
        const imageResponse = await axios.post(`https://hacker-voting.herokuapp.com/hacker/${response.data._id}/photo`,
        form,{
            headers:{
                'Authorization':`Basic ${auth.authData.token}`
            }
        })
        console.log(imageResponse.data)
        props.history.push('/dock')
    }catch(e){
        console.log(e)
    }
}
const values = []
for(let i=0;i<10;i++){
    values.push(i)
};
const valueOptions = values.map(data => <option key={data} value={data}>{data}</option>)
return(
<div className = "card-sizing">
<CardContainer>
    <div className="content">
        <h1 className="name-header">Insert details of the hacker</h1>
        <div className="w3-cell-row content">
            <div className = "w3-cell cellcontent">
                <label className="w3-text-blue"><b>Name of Hacker</b></label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.name}
                 placeholder="Insert full name" onChange={(event)=> handleValueChange(event.target.value,"name")}/>
                <label className="w3-text-blue"><b>Number of challenges</b></label>
                <select className="inputs w3-input w3-border" defaultValue={'DEFAULT'}
                onChange={(event)=> handleValueChange(event.target.value,"noOfChanllenges")}>
                <option selected value="DEFAULT" disabled>--select value--</option>
                {valueOptions}
                </select>
                <label className="w3-text-blue"><b>Level of expertise</b></label>
                <select className="inputs w3-input w3-border" defaultValue={'DEFAULT'}
                onChange={(event)=> handleValueChange(event.target.value,"expertiseLevel")}>
                <option selected value="DEFAULT" disabled>--select value--</option>
                {valueOptions}
                </select>
                <br/>
                <label className="w3-text-blue"><b>Add images for hacker's avatar</b></label>
                <input type="file" className="inputs w3-input w3-border" 
                onChange = {event => handleValueChange(event.target.files[0],"upload")}/>
            </div>
            <div className = "w3-cell cellcontent">
            <label className="w3-text-blue"><b>Level of expertise</b></label><br/>
            <span className="paragraphs">
                <label>Data structure</label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.expertIn.dataStructure} 
                placeholder="input value out of 10" onChange={event=>handleValueChange(event.target.value,"expertIn.dataStructure")}/>
                <label>Algorithms</label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.expertIn.algorithm}
                placeholder="input value out of 10" onChange={event=>handleValueChange(event.target.value,"expertIn.algorithm")}/>
                <label>C++</label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.expertIn.cplusplus} 
                placeholder="input value out of 10" onChange={event=>handleValueChange(event.target.value,"expertIn.cplusplus")}/>
                <label>Java</label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.expertIn.java}  
                placeholder="input value out of 10" onChange={event=>handleValueChange(event.target.value,"expertIn.java")}/>
                <label>Python</label>
                <input type="text" className="inputs w3-input w3-border" value={hackerData.expertIn.python} 
                placeholder="input value out of 10" onChange={event=>handleValueChange(event.target.value,"expertIn.python")}/>
            </span>
            </div>
        </div>
        <button className="button w3-btn w3-green" onClick={event=>handleSubmit()}>Submit</button>
        <button className="button w3-btn w3-blue" onClick={event=>handleClose()}>Close</button>
    </div>
</CardContainer>
</div>)
}

export default HackersInfo