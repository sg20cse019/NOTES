import React from 'react'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CreateUser from './Components/CreateUser'
import Users from './Components/Users'
import EditUser from './Components/EditUser'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Home/>
        <Routes>
                <Route path='/' element={<CreateUser/>}></Route>
                <Route path='/users' element={<Users/>}></Route>
                <Route path='/edit/:id' element={<EditUser/>}></Route>
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App