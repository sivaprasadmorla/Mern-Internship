import React, { useState } from "react";
import Login from "./page/loginPage/Login";
import Navbar from "./component/navbar/Navbar";
import Home from "./page/homePage/Home";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/"?<Navbar/>:null}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
