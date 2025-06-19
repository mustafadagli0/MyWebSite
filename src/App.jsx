import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Projects from './Pages/Projects.jsx' 

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path='/Projects' element={<Projects/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
