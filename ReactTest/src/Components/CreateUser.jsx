import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
    let [name,setName]=useState('')
    let [salary,setSalary]=useState('')
    let [company,setCompany]=useState('')

    let formData=()=>{
        let pay ={
            Name:name,
            Salary:salary,
            Company:company
        }
        console.log(pay);
        axios.post('http://localhost:4000/employee',pay)
        .then(()=>{console.log('sent');})
        alert("Data Submitted")
    }
  return (
    <div>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='Salary' value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>
        <input type="text" placeholder='Company' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        <button onClick={formData}>Submit</button>
    </div>
  )
}

export default CreateUser