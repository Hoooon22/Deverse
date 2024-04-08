import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import SignUp from "./pages/signUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/signUP' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}