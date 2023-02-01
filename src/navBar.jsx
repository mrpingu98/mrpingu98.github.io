import React from "react";
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Component from './component';
import Homepage from "./homepage";

const NavBar = () => {
    return(
    <div>
       
      <a href="/test"> Link to testpage</a>
      <a href="/">Link to homepage</a>
   
     <BrowserRouter>
     <Routes>
      <Route path="/test" element={<Component />} />
      <Route path="/" element={<Homepage />} />
      </Routes>
     </BrowserRouter>

     </div>
    )
}

export default NavBar