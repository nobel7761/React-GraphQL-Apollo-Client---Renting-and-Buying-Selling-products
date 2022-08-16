import React from "react";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import Home from "./Pages/Home";
import RequireAuth from "./Components/Auth/RequireAuth/RequireAuth";
import Services from "./Pages/Services";
import Navbar from "./Components/Shared/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";


const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {
        user && <Navbar />
      }
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/all-products" element={<RequireAuth><AllProducts /></RequireAuth>} />
        <Route path="/services" element={<RequireAuth><Services /></RequireAuth>} />
      </Routes>
    </div>
  );
};

export default App;
