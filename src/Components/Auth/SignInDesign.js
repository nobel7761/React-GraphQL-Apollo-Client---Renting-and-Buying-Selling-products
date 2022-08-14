import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";

const SignInDesign = () => {
  const [show, setShow] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // const email = event.target.email.value;
    // const password = event.target.password.value;

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
        <div className="border border-gray-300 p-10">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="email"
              ref={emailRef}
              className="w-full px-4 py-1 rounded my-2 border border-gray-300"
              placeholder="Email"
              required
            />

            <div className="relative">
              <input
                type={show ? "text" : "password"}
                ref={passwordRef}
                className="w-full px-4 py-1 rounded my-2 border border-gray-300 "
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

            <div className="flex justify-center my-5">
              <input
                type="Submit"
                value="LOGIN"
                className="bg-btnPrimary text-white px-4 py-1 rounded cursor-pointer"
              />
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
