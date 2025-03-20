import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  CiCircleChevLeft,
  CiMenuFries,
  CiSearch,
  CiShop,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";
import { ShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    setToken,
    token,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    toast.success("logout");
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div
      className={`nav fixed z-40 top-4 left-1/2 transform -translate-x-1/2 max-w-5xl w-full flex items-center justify-between py-5 px-6 font-medium backdrop-blur-lg rounded-xl shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <p className="text-lg sm:text-2xl saira-font-bold flex flex-row items-center">
          <CiShop />
          {/* <img src="/logo.svg" alt="" /> */}
          &nbsp;Otaku <span className="text-violet-500">Mart</span>
        </p>
      </Link>

      {/* Navigation Links (Hidden on Mobile) */}
      <div className="hidden sm:block">
        <nav className="flex gap-6 saira-font">
          <NavLink
            to="/"
            className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-violet-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-violet-700"
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-violet-700"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-violet-700"
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <CiSearch
          onClick={() => setShowSearch(true)}
          className="text-xl sm:text-2xl cursor-pointer"
        />

        {/* User Profile Dropdown */}
        <div className="relative group">
          {/* <Link to="/login"> */}
          <CiUser
            onClick={() => (token ? null : navigate("/login"))}
            className="text-xl sm:text-2xl cursor-pointer hover:text-amber-700"
          />
          {/* </Link> */}
          {token && (
            <div className="absolute right-0 hidden group-hover:block bg-violet-50 text-gray-700 font-normal rounded-lg shadow-lg w-36 p-3">
              <p className="cursor-pointer hover:text-amber-700">My Profile</p>
              <p
                onClick={() => navigate("/orders")}
                className="cursor-pointer hover:text-amber-700"
              >
                Orders
              </p>
              <p
                onClick={logout}
                className="cursor-pointer hover:text-amber-700"
              >
                Log Out
              </p>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <CiShoppingCart className="text-xl sm:text-2xl cursor-pointer" />
          <p className="absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Button */}
        <CiMenuFries
          onClick={() => setMenuVisible(true)}
          className="sm:hidden text-xl cursor-pointer"
        />
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div
        className={`sm:hidden saira-font fixed top-0 right-0 h-full shadow-lg transition-transform transform ${
          menuVisible ? "translate-x-0 w-64 " : "translate-x-full w-0"
        }`}
      >
        <div className="flex flex-col py-4 text-gray-600 bg-violet-100 rounded-2xl">
          {/* Close Menu Button */}
          <div
            onClick={() => setMenuVisible(false)}
            className="flex items-center gap-3 p-3 cursor-pointer"
          >
            <CiCircleChevLeft className="text-xl" />
            <p>Back</p>
          </div>

          <NavLink
            className="py-2 pl-6"
            to="/"
            onClick={() => setMenuVisible(false)}
          >
            Home
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/collection"
            onClick={() => setMenuVisible(false)}
          >
            Collection
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/about"
            onClick={() => setMenuVisible(false)}
          >
            About
          </NavLink>
          <NavLink
            className="py-2 pl-6"
            to="/contact"
            onClick={() => setMenuVisible(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
