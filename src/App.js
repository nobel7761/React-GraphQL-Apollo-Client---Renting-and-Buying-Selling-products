import React from "react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import Home from "./Pages/Home";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/all-products" element={<RequireAuth><AllProducts /></RequireAuth>} />
      </Routes>
    </div>
  );
};

export default App;
