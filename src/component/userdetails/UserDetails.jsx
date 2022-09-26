import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import './UserDetails.css'
import { RelationData, Gender, BloodGroup } from './FormData'
import { useState } from 'react';
import { MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import {useNavigate} from 'react-router-dom'

const Details = () => {
    const [value, setValue] = useState(null);
    const navigate = useNavigate();
    const [data, setData] =useState({
            name:"",
            relation:"",
            dateOfBirth:"",
            gender:"",
            bloodGroup:""
    })
    // const [relation, setRelation] = useState([])
   
    // const [gender, setGender] = useState([])
    // const [blood, setBlood] = useState([])

    // const handleRelation = (event) => {
    //     setRelation(event.target.value)
        
    // }
    // const handleGender= (event)=>{
    //     setGender(event.target.value)
    // }

    // const handleBlood=(event)=>{
    //     setBlood(event.target.value)
    // }
// working handle change
    const handleChange=(e)=>{
        // console.log(e.target)
        // const {name, value}=e.target
        if(e.$d){
            setValue(e.$d)
            setData({
                ...data,dateOfBirth:e.$d
            })}
        else{
            const {name,value}=e.target;
            setData((prevState)=>{
                return {...prevState,[name]:value}
            })
        }
        // setData({
        //     ...data, dateOfBirth:e
        // })
    }

    // const handleChange=({$d})=>{
    //     console.log($d)
    //     setValue($d)
    //     setData({
    //         ...data,dateOfBirth:$d
    //     })
    // }
    const submitData=()=>{
        if(data){
            navigate("/AdhaarDetails")
        }
        console.log(data)
    }
    return (
        <div className='mainClass'>
            <Form>
                <h2>Please provide details</h2>
                <FormContent>
                <TextField id="fullName" label="Full Name" variant="standard"
                  InputLabelProps={{
                    style:{fontSize: "14px",fontWeight: "600",color: "#bdbdbd"}
                 }}
                 name="name"
                 value={data.name}
                 style={{marginBottom:"20px"}}
                 onChange={handleChange}

                 />
                <TextField id="relation" label="Relationship" variant="standard"
                InputLabelProps={{
                    style:{fontSize: "14px",fontWeight: "600",color: "#bdbdbd"}
                 }}
                 style={{marginBottom:"20px"}}
                    select
                    name="relation"
                    value={data.relation}
                    onChange={handleChange}>
                    {RelationData.map((option) => {
                        return <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    })}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                        label="Date of Birth"
                        value={value}
                        // onChange={handleChange}
                        // onChange={(newValue) => {
                        //     setValue(newValue.$d);
                        //    handleChange(newValue.$d)
                        // }}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} variant="standard" 
                        style={{marginBottom:"20px"}}
                        InputLabelProps={{
                            style:{fontSize: "14px",fontWeight: "600",color: "#bdbdbd"}
                         }}
                         name="dateOfBirth"
                         value={data.dateOfBirth}
                         
                        // onChange={handleChange}
                         />}
                    />
                </LocalizationProvider>

                <TextField id="gender" label="Choose Gender" variant="standard"
                     InputLabelProps={{
                        style:{fontSize: "14px",fontWeight: "600",color: "#bdbdbd"}
                     }}
                     style={{marginBottom:"20px"}}
                    select
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}>
                    {Gender.map((option) => {
                        return <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    })}
                </TextField>

                <TextField id="blood" label="Blood Group(Optional)" variant="standard"
                 style={{marginBottom:"20px"}}
                   InputLabelProps={{
                    style:{fontSize: "14px",fontWeight: "600",color: "#bdbdbd"}
                 }}
                    select
                    name="bloodGroup"
                    value={data.bloodGroup}
                    onChange={handleChange}>
                    {BloodGroup.map((option) => {
                        return <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    })}
                </TextField>
                
                </FormContent>
                <Button onClick={submitData}>continue</Button>

            </Form>

        </div>
    )
}
const Form = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
align-items: center;
justify-content: center; 
background-color:#e3f2fd;
`
const FormContent= styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
   
`
export const Button=styled.button`
background-color: #9575cd;
color: white;
width: 30%;
font-size: 15px;
padding: 15px;
border-radius: 25px;
border:none;
margin-top:20px;
&:hover{
    cursor:pointer;
}
&:disabled{
    background-color: #ede7f6;
}
    
`

export default Details;