import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error(
      "useWeatherContext was used outside of the WeatherProvider"
    );
  return context;
};

export { useWeatherContext };
