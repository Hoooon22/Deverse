import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Workspace from "./pages/workspace";
//import SignUp from "./pages/signUp";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/workspace' element={<Workspace />} />
        {/* <Route exact path='/signUP' element={<SignUp />} />*/}
      </Routes>
    </BrowserRouter>
  );
}