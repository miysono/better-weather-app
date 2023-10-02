import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({
  bg = "bg-blue-300",
  textColor = "text-gray-800",
  logoBlue = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* DESKTOP HEADER */}
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

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "p-4 bg-blue-400 duration-300 text-gray-800 rounded-b-xl"
              : "p-4 hover:bg-blue-400 text-gray-800 duration-300 rounded-b-xl"
          }
        >
          <p>Sign in</p>
        </NavLink>
      </header>

      {/* MOBILE HEADER */}
      <header>
        <div
          className={
            isOpen
              ? "w-64 opacity-100 bg-gray-800 -translate-x-64 h-screen left-full z-50 flex fixed duration-300 lg:hidden"
              : "-translate-x-16 fixed opacity-100 z-50 left-full top-0 duration-300"
          }
        >
          <div className="h-screen w-screen lg:hidden">
            <div className="p-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => {
                  setIsOpen((open) => !open);
                }}
                className={
                  isOpen
                    ? "w-8 text-blue-400 h-8 rotate-90 duration-200"
                    : "w-8 h-8 duration-200"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {isOpen && (
              // NavList
              <ul className="text-blue-400 text-2xl flex flex-col gap-2.5 text-right">
                {/* NavListItem */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 p-5 rounded-l-xl ml-10 text-gray-900"
                      : "px-5 py-5"
                  }
                >
                  <p>Home</p>
                </NavLink>
                <NavLink
                  to="/forecasts"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 p-5 rounded-l-xl ml-10 text-gray-900"
                      : "px-5 py-5"
                  }
                >
                  <li>Forecasts</li>
                </NavLink>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 p-5 rounded-l-xl ml-10 text-gray-900"
                      : "px-5 py-5"
                  }
                >
                  <li>Pricing</li>
                </NavLink>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 p-5 rounded-l-xl ml-10 text-gray-900"
                      : "px-5 py-5"
                  }
                >
                  <li>About us</li>
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-400 p-5 rounded-l-xl ml-10 text-gray-900"
                      : "px-5 py-5"
                  }
                >
                  <li>Sign in</li>
                </NavLink>
              </ul>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
