import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({
  bg = "bg-blue-300",
  textColor = "text-gray-800",
  logoBlue = false,
}) {
  return (
    <header
      className={`flex justify-between items-center sticky px-5 text-lg ${bg} ${textColor} z-50 top-0`}
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
  );
}

export default Navbar;
