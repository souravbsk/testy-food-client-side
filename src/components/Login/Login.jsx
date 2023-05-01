import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="mt-20 bg-contain bg-top bg-no-repeat thingIntro-BG">
      <div className="pt-32 container">
        <div className="card p-6 max-w-full md:w-4/12 mx-auto shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Please Login</h1>
          </div>
          <form onSubmit={handleLogin} className=" py-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn primary-btn mt-3">Login</button>
            </div>
          </form>
          <div>
            <p className="text-center text-red-600">{error}</p>
            <p className="text-center">
              Create A New Account?{" "}
              <Link to="/register" className="underline text-orange-400">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
