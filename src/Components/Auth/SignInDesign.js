import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const SignInDesign = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/'

  //handle error
  let displayError;
  if (error) {
    displayError = (
      <p className="text-red-500 font-bold text-sm text-center">
        Error: {error.message}
      </p>
    );
  }

  //handle loading
  if (loading) {
    <LoadingSpinner></LoadingSpinner>
  }

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate])

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-1/5 flex flex-col">
        <h1 className="uppercase text-center text-3xl font-bold my-5">
          sign in
        </h1>
        <div className="border-2 border-gray-400 p-10">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="email"
              ref={emailRef}
              className="w-full px-4 py-1 rounded my-2 border border-gray-700"
              placeholder="Email"
              required
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                ref={passwordRef}
                className="w-full px-4 py-1 rounded my-2 border border-gray-700 "
                placeholder="Password"
                required
              />

              <div
                className="absolute top-4 right-2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <BiShow /> : <BiHide />}
              </div>
            </div>

            <div className="flex flex-col gap-2 my-5">
              {displayError}
              <input
                type="Submit"
                value="LOGIN"
                className="bg-btnPrimary text-white px-4 py-1 rounded cursor-pointer w-full hover:bg-black"
              />

              <button
                className="bg-btnPrimary text-white px-4 py-1 rounded uppercase hover:bg-black"
                onClick={() => signInWithGoogle()}
              >
                Google Login
              </button>
            </div>
          </form>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-blue-500 font-bold">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInDesign;
