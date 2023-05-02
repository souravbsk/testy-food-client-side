import React, { useContext, useRef, useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import SocialLogin from "../SocialLogin/SocialLogin";
const Login = () => {
  const { loginUser, forgetPass } = useContext(AuthContext);
  const [error, setError] = useState("");
  const emailValue = useRef(null);
const location = useLocation();
const navigate = useNavigate();

const from = location?.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      loginUser(email, password)
        .then((result) => {
          const currentUser = result.user;
          console.log(currentUser);
          toast.success(`Hey ${currentUser.displayName}, Welcome to Testy Food`)
          navigate(from,{replace:true})
          form.reset()
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  const handlePassReset = () => {
    const email = emailValue.current.value;
    if (!email) {
      toast.error("Please Enter your Email");
      return;
    }
    forgetPass(email)
      .then(() => {
        toast.success("password reset link send in your email");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="mt-20 bg-contain bg-top bg-no-repeat thingIntro-BG">
      <div className="py-20 container">
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
                required
                name="email"
                ref={emailValue}
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
                required
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <button
                  type="button"
                  onClick={handlePassReset}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
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

          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
