import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Page1 />} path="/" />
        <Route element={<Page2 />} path="result" />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
