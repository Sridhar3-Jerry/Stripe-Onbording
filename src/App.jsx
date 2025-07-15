import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from "./Register";
import { motion } from "framer-motion";
import google from "./assets/google.png";
import Content from "./Content";
import ReactFlagsSelect from "react-flags-select";
import GridLines from "./GridLines";
import Signup from "./Signup";
import Signin from "./Signin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </Router>
  )
}

export default App
