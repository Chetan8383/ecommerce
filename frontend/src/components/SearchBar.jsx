import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CiCircleRemove, CiSearch } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="relative w-[300px] sm:w-[480px] mx-auto mb-3 border border-violet-500 bg-gray-100 rounded-full shadow-md p-1.5 transition-all duration-150 ease-in-out hover:scale-105 hover:shadow-lg">
      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center">
        <CiCircleRemove
          className="text-2xl cursor-pointer"
          onClick={() => setShowSearch(false)}
        />
      </div>
      <input
        type="text"
        className="w-full pl-10 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="absolute right-1 top-1 bottom-1 px-6 bg-[#5044e4] text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4]">
        <CiSearch />
      </button>
    </div>
  ) : null;
};

export default SearchBar;
