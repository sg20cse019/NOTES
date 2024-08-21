import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
    let [user,setUser]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/employee')
        .then((res)=>{setUser(res.data)})
        .catch((err)=>{console.log(err);})
    },[])

    let deleteUser=(a)=>{
        console.log("data Deleted");
        axios.delete(`http://localhost:4000/employee/${a}`)
        window.location.assign('/users')
    }
  return (
    <div>
        {
        user.map((data)=>{
                return(
                    <div>
                        <table border={1}>
                            <tr>
                                <td>Name:{data.Name}</td>
                            </tr>
                            <tr>
                                <td>Email:{data.Salary}</td>
                            </tr>
                            <tr>
                                <td>Phone:{data.Company}</td>
                            </tr>
                            <tr> 
                                <td><button><Link to={`/edit/${data.id}`}> Edit</Link></button>
                                <button onClick={()=>{deleteUser(data.id)}}>Delete</button></td>
                            </tr>                           
                        </table>
                    </div>  
                )
            })}
    </div>
  )
}

export default Users