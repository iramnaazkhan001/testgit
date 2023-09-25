import React from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import SideBar from './comp/SideBar'
import User from './comp/User'
import Adduser from './comp/Adduser'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/adduser' element={<Adduser/>}/> 
    <Route path='/' element={<SideBar/>}/>
    <Route path='/users' element={<User/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App