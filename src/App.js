import './App.css';
import React, { useState }  from "react"
import { Route, Routes } from 'react-router-dom'
import Home from '/Components/Portfolio/Home.jsx'


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

