import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import './Main.css'
import Login from './Login'
import Destinations from './Destinations'
import Register from './Register'
import Add from './Add'
import Manage from './Manage'
import Contact from './Contact'
import About from './About'
import Blog from './Blog'
import Edit from './Edit'
import Makebooking from './Makebooking'

export default function Main() {
  return (
    <div>
        <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/Home' element={<Home></Home>}></Route>
            <Route path='/' element={<Login></Login>}></Route>
            <Route path='/Register' element={<Register></Register>}></Route>
            <Route path='/Add' element={<Add></Add>}></Route>
            <Route path='/Manage' element={<Manage></Manage>}></Route>
            <Route path='/Blog' element={<Blog></Blog>}></Route>
            <Route path='/Destinations' element={<Destinations></Destinations>}></Route>
            <Route path='/Contact' element={<Contact></Contact>}></Route>
            <Route path='/About' element={<About></About>}></Route>
            <Route path='/Edit/:id' element={<Edit></Edit>}></Route>
            <Route path='/Makebooking/:id' element={<Makebooking></Makebooking>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
