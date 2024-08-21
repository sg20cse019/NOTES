import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {  
    let [name,setName]=useState('')
    let [salary,setSalary]=useState('')
    let [company,setCompany]=useState('')

    let obj=useParams()
    console.log(obj.id);
    
    useEffect(()=>{
      axios.get(`http://localhost:4000/employee/${obj.id}`)
      .then((res)=>{
              setName(res.data.Name)
              setSalary(res.data.Salary)
              setCompany(res.data.Company)
      })
      .catch((err)=>{console.log(err);})
    },[`${obj.id}`])

    let navigate = useNavigate()
    
    function formData(e){
      e.preventDefault()
    alert("Data Updated");

      let pay = {
        Name:name,
        Salary:salary,
        Company:company
      }
      axios.put(`http://localhost:4000/employee/${obj.id}`,pay)
      .then(()=>{console.log("data saved");})
      .catch(()=>{console.log("not saved");})
      navigate('/users')
    }

  return (
        
    <div>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="text" placeholder='Salary' value={salary} onChange={(e)=>{setSalary(e.target.value)}}/>
        <input type="text" placeholder='Company' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
        <button onClick={formData}>Update</button>
    </div>
  )
}
export default EditUser