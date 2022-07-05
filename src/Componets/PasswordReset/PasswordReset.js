import React, { useState } from 'react';
import styled from "styled-components";
import axios from 'axios';

const ResetPassword = styled.div` position:relative; top:70px`;
const EmailForm = styled.form``;
const EmailWraaper = styled.div`display:flex; flex-direction:column;gap:10px; padding-left:20px; padding-top:40px`;
const EmailInput= styled.input`width: 30ch; border-width: 0; border-bottom-width: 1px;padding:10px`;
const EmailLabel= styled.label`border: none`;
const Errors = styled.p``;
var lightBlue= 'rgba(198, 211, 240,1)'; 
export default function PasswordReset() {
  const [email, setEmail]= useState("");
  const [error, setError]= useState('');

  const handleChange=(event)=>{
    const value = event.target.value;
    setEmail(value);
  }
  const ENDPOINT= "http://localhost:5001/api/getusers";

  const handleSumbit=(event)=>{
    event.preventDefault();
    console.log("staer",email,"herw")
  };
  return (
    <ResetPassword >
        <EmailForm onSubmit={handleSumbit}>
        <EmailWraaper>
        <EmailLabel>Please type in your email or user name</EmailLabel>
        <EmailInput type="text" onChange={handleChange} name="email"
                id="email" required ></EmailInput>
        <input type="submit" style={{marginTop:'25px',width:"8ch", textAlign:"center", backgroundColor:lightBlue, borderRadius:'40px', borderWidth:'1px', padding:"3px"}}></input>
        <Errors> {error}</Errors>
       </EmailWraaper>
       
       </EmailForm>
    </ResetPassword >
  )
}
