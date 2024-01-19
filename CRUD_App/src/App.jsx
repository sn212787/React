import React from 'react'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import User from './User'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<User />}></Route>
   <Route path='/create' element={<CreateUser />}></Route>
   <Route path='/update' element={<UpdateUser />}></Route>

   </Routes>
   
   </BrowserRouter>
   </div>
  )
}

export default App
