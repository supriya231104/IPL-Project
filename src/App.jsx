import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";
function App() {
  return (
    <div className="max-w-screen min-h-screen flex justify-center  bg-black text-white">
    <div className="md:w-[90%] w-[85%] h-full overflow-x-hidden lg:w-[50%] ">

    <Routes >
      <Route path="/" element={<Navbar></Navbar>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/news" element={<div className="w-full h-screen flex justify-center items-center text-2xl font-medium ">Coming soon ....</div>}></Route>
      <Route path="/pointsTable" element={<PointsTable></PointsTable>}></Route>
      <Route path="/matchDetail/:id" element={<MatchDetail></MatchDetail>}></Route>
      </Route>
     
    </Routes>
    </div>
    </div>
  )
}

export default App;
