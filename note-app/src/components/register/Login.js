// src/Components/.js
import React, { useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: userRef.current.email.value,
      password: userRef.current.password.value,
    };

    const response = await axios.post("http://localhost:3033/login", userData);
    console.log(response.data);
    if (response.data.token) {
      localStorage.setItem("token", response.token);
      navigate("/note");
    }
  };

  return (
    <form ref={userRef} onSubmit={handleSubmit}>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <span className="text-2xl font-bold ">Login</span>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>

          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="email"
            name="email"
            placeholder="Name .."
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            name="password"
            placeholder="Password"
          />

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <div
              className="text-red-600 hover:underline hover:underline-offset-4"
              onClick={() => navigate("/signup")}
            >
              Register
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
