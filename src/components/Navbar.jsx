import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function Navbar({
  bg = "bg-blue-300",
  textColor = "text-gray-800",
  logoBlue = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        className={`hidden lg:flex justify-between items-center sticky px-5 text-lg ${bg} ${textColor} z-50 top-0`}
      >
        <NavLink to="/">
          <div className="flex items-center text-xl">
            {!logoBlue && <img src="/logo-icon.png" className="w-12" />}
            {logoBlue && <img src="/logo-icon-blue.png" className="w-12" />}
          </div>
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/forecasts"
            className={({ isActive }) =>
              isActive
                ? "p-4 bg-blue-400 duration-300 rounded-b-xl"
                : "p-4 hover:bg-blue-400 duration-300 rounded-b-xl"
            }
          >
            <p>Forecasts</p>
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "p-4 bg-blue-400 duration-300 rounded-b-xl"
                : "p-4 hover:bg-blue-400 duration-300 rounded-b-xl"
            }
          >
            <p>Pricing</p>
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "p-4 bg-blue-400 duration-300 rounded-b-xl"
                : "p-4 hover:bg-blue-400 duration-300 rounded-b-xl"
            }
          >
            <p>About us</p>
          </NavLink>
        </div>

        <NavLink to="/login">
          <div className="flex items-center">
            <div className="p-4 hover:bg-blue-400 duration-300 rounded-b-xl">
              <Button>Sign in</Button>
            </div>
          </div>
        </NavLink>
      </header>

      <header
        className={
          isOpen
            ? "w-64 opacity-80 bg-gray-950 -translate-x-64 h-screen m-0 p-0 top-0 left-full z-50 flex fixed duration-300 lg:hidden"
            : "-translate-x-16 fixed opacity-100 z-50 left-full top-0 duration-300"
        }
      >
        <div className=" p-5 h-screen w-screen lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => {
              setIsOpen(true);
            }}
            className={
              isOpen ? "w-8 h-8 rotate-90 duration-200" : "w-8 h-8 duration-200"
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {isOpen && (
            <div>
              <ul
                className="flex mx-8 mt-10 gap-5 flex-col"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
