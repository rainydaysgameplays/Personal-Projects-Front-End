// Import css project files here
import './App.css';

// React imports
import React from "react"
import { Route, Routes } from 'react-router-dom'

// Component imports
import Home from './Components/Portfolio/Home';
import Projects from './Components/Portfolio/Projects';
import Resume from './Components/Portfolio/Resume';


export default function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Resume' element={<Resume />} />
      </Routes>

    </div>
  );
}

