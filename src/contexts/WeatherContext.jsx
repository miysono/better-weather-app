import { createContext, useCallback, useReducer } from "react";

const BASE_LOCATION_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";
const BASE_REALTIME_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_FIVEDAY_URL = "https://api.openweathermap.org/data/2.5/forecast";
const WEATHER_KEY = "c4377e1d554c504fc7b74990072f97b3";

const WeatherContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "REALTIME_DATA_LOADED":
      return {
        ...state,
        isLoading: false,
        realtimeWeatherData: action.payload,
        error: null,
      };

    case "FIVEDAY_DATA_LOADED":
      return {
        ...state,
        isLoading: false,
        fiveDayWeatherData: action.payload,
        error: null,
      };

    case "DATA_REJECTED":
      return { ...state, isLoading: false, error: action.payload };

    case "REGION_LOADED":
      return { ...state, isLoading: false, regionData: action.payload };

    case "REGION_REJECTED":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type.");
  }
};

const initialState = {
  isLoading: false,
  realtimeWeatherData: null,
  fiveDayWeatherData: null,
  regionData: null,
  error: null,
};

function WeatherProvider({ children }) {
  const [
    { isLoading, realtimeWeatherData, fiveDayWeatherData, error, regionData },
    dispatch,
  ] = useReducer(reducer, initialState);

  const fetchRealtimeWeather = useCallback(async (lat, lng) => {
    try {
      dispatch({ type: "LOADING" });
      const res = await fetch(
        `${BASE_REALTIME_URL}?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Failed to load data. Please try again!");
      const data = await res.json();
      dispatch({ type: "REALTIME_DATA_LOADED", payload: data });
    } catch (err) {
      dispatch({ type: "DATA_REJECTED", payload: err.message });
    }
  }, []);

  const fetchFiveDayWeather = useCallback(async (lat, lng) => {
    try {
      dispatch({ type: "LOADING" });
      const res = await fetch(
        `${BASE_FIVEDAY_URL}?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("Failed to load data. Please try again!");
      const data = await res.json();
      dispatch({ type: "FIVEDAY_DATA_LOADED", payload: data });
    } catch (err) {
      dispatch({ type: "DATA_REJECTED", payload: err.message });
    }
  }, []);

  const fetchCityAndRegionName = useCallback(async (lat, lng) => {
    try {
      dispatch({ type: "LOADING" });
      const res = await fetch(
        `${BASE_LOCATION_URL}?latitude=${lat}&longitude=${lng}`
      );
      if (!res.ok) throw new Error("Failed to load data. Please try again!");
      const data = await res.json();
      dispatch({ type: "REGION_LOADED", payload: data });
    } catch (err) {
      dispatch({ type: "REGION_REJECTED", payload: err.message });
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        error,
        realtimeWeatherData,
        fiveDayWeatherData,
        regionData,
        isLoading,
        fetchFiveDayWeather,
        fetchCityAndRegionName,
        fetchRealtimeWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider, WeatherContext };
