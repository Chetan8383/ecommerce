import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CiMail, CiRead, CiUnread } from "react-icons/ci";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Successfully Logged In!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg ">
          <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-zinc-400 to-zinc-900 bg-clip-text text-transparent sm:text-3xl saira-font-bold">
            Admin Panel
          </h1>

          <form
            onSubmit={onSubmitHandler}
            className="mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Empower control, streamline management.
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter email"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <CiMail />
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={visible ? "text" : "password"}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                  placeholder="Enter password"
                />
                <span
                  className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <CiUnread /> : <CiRead />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full cursor-pointer rounded-lg bg-gradient-to-r from-stone-500 to-stone-700 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="Login Illustration"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
