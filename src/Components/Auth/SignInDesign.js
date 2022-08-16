import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow, BiHide } from "react-icons/bi";
import { useState } from "react";
import SocialMediaLogin from "./SocialMediaLogin/SocialMediaLogin";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from '@apollo/client';
import { GET_USER_BY_EMAIL } from "../../queries/gql-queries";


const SignInDesign = () => {
  const [show, setShow] = useState(false);
  const [emailData, setEmailData] = useState("")
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();


  // const email = "rokaiahfardous@gmail.com"
  const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, {
    variables: { email: emailData }
  });
  if (loading) return <LoadingSpinner />
  if (error) return <p>Something Wrong!!!</p>

  console.log("display", data);


  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setEmailData(email);



    data.users.map(user => {
      if (email === user.email && password === user.password) {
        console.log("Success");
      }
      else {
        console.log("Wrong!");
      }
    })
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

              <input
                type="Submit"
                value="LOGIN"
                className="bg-btnPrimary text-white px-4 py-1 rounded cursor-pointer w-full hover:bg-black"
              />

              <SocialMediaLogin />
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
