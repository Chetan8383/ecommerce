import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Route, Routes, useSearchParams } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import toast, { Toaster } from "react-hot-toast";

export const currency = "₹";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Toaster />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex w-full">
            <SideBar setToken={setToken} />
            <div className="w-[80%] mx-auto ml-[max(5vh, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
