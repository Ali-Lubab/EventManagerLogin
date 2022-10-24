import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"
import Login from "./AppHistory";
import Navbar from "./Compnents/Navbar/indexNav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/old" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


