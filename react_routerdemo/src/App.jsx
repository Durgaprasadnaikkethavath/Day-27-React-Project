import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import StudentData from "./StudentData";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Error from "./Error";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/StudentData" element={<StudentData />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
