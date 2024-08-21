import React from 'react'
// import CreateUser from './CreateUser'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <button> <Link to='/'>Create-User</Link> </button> <br />
      <button> <Link to='/users'>Users</Link> </button> 
    </div>
  )
}

export default Home