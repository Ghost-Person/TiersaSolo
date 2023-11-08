import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReviewDisplay from './components/ReviewDisplay'
import ReviewForm from './components/ReviewForm'
import EditReview from './components/EditReview'
import OneReview from './components/OneReview'
import MainPage from './components/MainPage'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <ReviewDisplay/> } />
        <Route path="/newreview" element={ <ReviewForm/> } />
        <Route path="/editreview/:id" element={ <EditReview/> } />
        <Route path="/review/:id" element={ <OneReview/> } />
        <Route path="/main" element={ <MainPage/> } />
        <Route path="/about" element={ <AboutUs/> } />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
