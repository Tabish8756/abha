import logo from '../../Assets/logo.png'
import styled from 'styled-components';
import './AdhaarDetails.scss'
import Consent from './UserConsent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Button} from '../userdetails/UserDetails'
import { useState } from 'react';
const Adhaar=()=>{
    const [number, setNumber] = useState()
    const [disable, setDisable] =useState(true)
    const [check, setCheck] =useState(true)

    // const arr=[...number]
    const handleChange=(e)=>{
        setNumber(e.target.value)
        console.log(e.target.value.length)
        if(e.target.value.length >11 ){
            console.log("true")
            setCheck(false)
        }
        else {
            setCheck(true)
        }
    }

    const handleSubmit=()=>{
        console.log("enable")
    }
    const handleCheckBox=(e)=>{
       console.log("chamge")
       setDisable(!e.target.checked)

    }
    return(
        
        <Section>
            <img src={logo} style={{width:"100px"}} alt="Adhaar Logo"/>
            <h3>Enter your Adhaar Number below:</h3>
            <div className='number'>
            <input maxLength='12' value={number} onChange={handleChange}/>
            </div>
            <div className='consent'>
            <Consent/>
            </div>
            <FormControlLabel label="I agree" control={<Checkbox disabled={check} />} onChange={handleCheckBox}   />
            <Button disabled={disable} onClick={handleSubmit} >Continue</Button>
            </Section>
            
           
      
    )
}
const Section= styled.div`
justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default Adhaar;