import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (password.length < 6) {
      setError("password at lease 6 corrector");
      return;
    }
    if (email && password) {
        console.log('object');
    }
  };
  return (
    <div className="mt-20 bg-contain bg-top bg-no-repeat thingIntro-BG">
      <div className="pt-20 container">
        <div className=" p-6 card md:w-4/12 max-w-full mx-auto  shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Please Register</h1>
          </div>
          <form onSubmit={handleRegister} className=" py-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <button className="btn primary-btn mt-3">Register</button>
            </div>
          </form>
          <div>
            <p className="text-center text-red-600">{error}</p>
            <p className="text-center">
              Already Have An Account?{" "}
              <Link to="/login" className="underline text-orange-400">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
