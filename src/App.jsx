import React from 'react'
import Navigation from './Component/Navigation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './HomeComponent/Home'
import Course from './CourseComponent/Course'
import Tutorials from './Tutorials Component/Tutorials'
import Notes from './Notes Component/Notes'
import Contact from './ContactComponent/Contact'
import Login from './LoginComponent/Login'
import Sign from './signupComponent/sign'

function App() {
  return <>
  

  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/course' element={<Course/>}></Route>
    <Route path='/totorials' element={<Tutorials/>}></Route>
    <Route path='/notes' element={<Notes/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/sign-up' element={<Sign/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App
