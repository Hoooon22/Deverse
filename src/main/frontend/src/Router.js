import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/Main";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}