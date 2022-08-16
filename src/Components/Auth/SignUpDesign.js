import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import SocialMediaLogin from "./SocialMediaLogin/SocialMediaLogin";

const SignUpDesign = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const addressRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const address = addressRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    console.log(
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      password,
      confirmPassword
    );
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="uppercase text-center text-3xl font-bold my-5">
          sign up
        </h1>
        <div className="border-2 border-gray-400 p-10">
          <form onSubmit={handleSubmit}>
            {/* first and last name section */}
            <div className="flex gap-x-8">
              <input
                ref={firstNameRef}
                type="text"
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
                placeholder="First Name"
                required
              />

              <input
                ref={lastNameRef}
                type="text"
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
                placeholder="Last Name"
                required
              />
            </div>

            {/* address section */}
            <input
              ref={addressRef}
              type="text"
              className="w-full px-4 py-1 rounded my-2 border border-gray-700"
              placeholder="Address"
              required
            />

            {/* email and phone number section */}
            <div className="flex gap-x-8">
              <input
                ref={emailRef}
                type="text"
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
                placeholder="Email"
                required
              />

              <input
                ref={phoneNumberRef}
                type="tel"
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* password section */}
            <div className="relative">
              <input
                ref={passwordRef}
                type={show ? "text" : "password"}
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
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

            {/* confirm password section */}
            <div className="relative">
              <input
                ref={confirmPasswordRef}
                type={show1 ? "text" : "password"}
                className="w-full px-4 py-1 rounded my-2 border border-gray-700"
                placeholder="Confirm Password"
                required
              />

              <div
                className="absolute top-4 right-2 cursor-pointer"
                onClick={() => setShow1(!show1)}
              >
                {show1 ? <BiShow /> : <BiHide />}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="Submit"
                value="REGISTER"
                className="w-full bg-btnPrimary text-white px-4 py-1 rounded hover:bg-black"
              />
              <SocialMediaLogin />
            </div>
          </form>



          <p className="text-center mt-5">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500 font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpDesign;
