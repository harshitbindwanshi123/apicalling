import React, { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import CardDetail from './components/CardDetail'

function App() {



  return (
    <>
   <Routes>
<Route path='/' element={<Card/>}></Route>
<Route path='/cardDetails/:id' element={<CardDetail/>}></Route>

   </Routes>
  
    </>
  )}

export default App