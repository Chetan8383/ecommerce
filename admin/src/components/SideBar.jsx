import React from "react";
import {
  CiCirclePlus,
  CiLogout,
  CiMemoPad,
  CiShop,
  CiViewList,
} from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ setToken }) => {
  return (
    <div>
      <div className="flex h-screen z-50 w-16 flex-col justify-between border-e border-gray-100 bg-white">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <Link to='https://otakumart.netlify.app/' target="_blank">
              <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-2xl text-gray-600 hover:bg-violet-500 hover:text-white duration-300">
                <CiShop />
              </span>
            </Link>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-3 border-t border-gray-100 pt-4">
                <li>
                  <NavLink
                    to="/add"
                    className="group relative flex justify-center text-2xl border-transparent border-1 rounded-sm px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <CiCirclePlus />

                    <span className="invisible z-50 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Add Items
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/list"
                    className="group relative flex justify-center rounded-sm text-2xl border-transparent border-1 px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <CiViewList />

                    <span className="invisible absolute z-50 start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      List Items
                    </span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/orders"
                    className="group relative flex justify-center rounded-sm text-2xl border-transparent border-1 px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <CiMemoPad />
                    <span className="invisible absolute z-50 start-full top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Orders
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <button
            onClick={() => setToken("")}
            type="submit"
            className="group relative flex w-full justify-center rounded-lg text-2xl px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <CiLogout />

            <span className="invisible absolute start-full z-50 top-1/2 ms-4 -translate-y-1/2 rounded-sm bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
