import { NavLink } from "react-router-dom";

export default function LayoutForecastOption({ optionName, linkTo }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        isActive ? "bg-blue-400 text-gray-800 scale-110 rounded-xl" : ""
      }
    >
      <p className="p-1 w-24 duration-300 border-2 rounded-xl border-blue-400  hover:bg-blue-400 hover:text-gray-800">
        {optionName}
      </p>
    </NavLink>
  );
}
