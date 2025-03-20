import React, { useContext, useEffect, useState } from "react";
import { CiRead, CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";
import axios from "axios";

const login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        // SIGN UP LOGIC
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });

        // SETTING TOKEN IF SUCCESSFUL
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Created Account");
        } else {
          toast.error(response.data.message);
        }
      } else {
        // LOGIN LOGIC
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        // SETTING TOKEN IF SUCCESSFUL
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("login successful");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
      scrollToTop();
    }
  }, [token]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 saira-font">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Link to="/"> */}
        <p className="text-lg  sm:text-3xl saira-font-bold flex flex-row items-center justify-center">
          <CiShop /> &nbsp;Otaku <span className="text-violet-500">Mart</span>
        </p>
        {/* </Link> */}
        <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900 shadows-into-light-regular">
          {currentState === "Login"
            ? "Sign in to your account"
            : "Create Your Account Now"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* FORM */}
        <form className="space-y-6" onSubmit={onSubmitHandler} method="POST">
          {/* FULL NAME INPUT  */}
          {currentState === "Login" ? (
            ""
          ) : (
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                FULL NAME
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6"
                />
              </div>
            </div>
          )}
          {/* Email input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6"
              />
            </div>
          </div>
          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link className="font-semibold text-violet-600 hover:text-violet-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-violet-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full cursor-pointer justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              {currentState === "Login" ? "Login" : "CREATE ACCOUNT"}
            </button>
          </div>
        </form>

        {currentState === "Login" ? (
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <b
              onClick={() => setCurrentState("Sign Up")}
              className="font-semibold text-violet-600 hover:text-black hover:underline cursor-pointer"
            >
              Create Account
            </b>
          </p>
        ) : (
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have Account
            <b
              onClick={() => setCurrentState("Login")}
              className="font-semibold text-violet-600 hover:text-black hover:underline cursor-pointer"
            >
              Login here
            </b>
          </p>
        )}
      </div>
    </div>
  );
};

export default login;
