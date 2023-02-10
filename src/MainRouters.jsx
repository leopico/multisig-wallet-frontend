import React from "react";
import { Routes, Route } from "react-router-dom";
import Assets from "./pages/Assets";
import Home from "./pages/Home";
import Transcations from "./pages/Transcations";
import Error from "./components/Error";
import Information from "./pages/Information";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/transcations" element={<Transcations />} />
      <Route path="/information" element={<Information />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default MainRouters;
