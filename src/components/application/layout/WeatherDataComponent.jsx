import { useState } from "react";
import { useLayoutContext } from "../../../hooks/useLayoutContext";
import { useWeatherContext } from "../../../hooks/useWeatherContext";

export default function WeatherDataComponent({ weatherData }) {
  const [showViewMore, setShowViewMore] = useState(false);
  const { setDetailedView } = useLayoutContext();
  const { regionData } = useWeatherContext();
  return (
    <div className=" bg-blue-400 mt-10 max-w-full w-96 mx-auto my-auto rounded-xl text-gray-800 p-5">
      {!showViewMore && (
        <>
          {setDetailedView && (
            <button
              className="text-le"
              onClick={() => {
                setDetailedView({ isDetailed: false, index: null });
              }}
            >
              Back
            </button>
          )}
          <div className="flex items-center justify-center flex-col mb">
            <h2 className="text-xl mt-5">{regionData.principalSubdivision}</h2>
            <h1 className="font-semibold text-3xl mb-5">
              {regionData.locality}
            </h1>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
              className="p-5 w-40 mb-5"
            />
            <h6 className="text-2xl mb-2.5">
              {Object.values(weatherData?.weather)?.[0]?.main}
            </h6>
            <h3 className="text-6xl font-bold mb-5">
              {Math.floor(weatherData.main.temp)}°C
            </h3>
            <button
              className=" border-2 border-gray-800 w-72 rounded-xl p-2 hover:bg-gray-800 hover:text-blue-400 duration-500 text-xl font-semibold"
              onClick={() => {
                setShowViewMore(true);
              }}
            >
              View more
            </button>
          </div>
        </>
      )}

      {showViewMore && (
        <>
          <button
            className="mb-5"
            onClick={() => {
              setShowViewMore(false);
            }}
          >
            Back
          </button>
          <div className="flex flex-col w-full">
            <h2 className="text-xl">{regionData.principalSubdivision}</h2>
            <h1 className="font-semibold text-3xl mb-5">
              {regionData.locality}
            </h1>
            <h3 className="text-xl font-semibold">Temperature range</h3>
            <div className="flex justify-between text-lg mb-5">
              <p>
                Min - <strong>{Math.floor(weatherData.main.temp_min)}°C</strong>
              </p>
              <p>
                Max - <strong>{Math.floor(weatherData.main.temp_max)}°C</strong>
              </p>
            </div>
          </div>
          <h3 className="text-xl font-semibold">Wind</h3>
          <div className="flex justify-between text-lg mb-5">
            <p>
              Speed: <strong>{weatherData.wind.speed} km/h</strong>
            </p>
            <p>
              Deg: <strong>{weatherData.wind.deg}°</strong>
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-5">
            Visiblity: <strong>{weatherData.visibility / 100}%</strong>
          </h3>
          <h3 className="text-xl font-semibold mb-5">
            Humidity: <strong>{weatherData.main.humidity}%</strong>
          </h3>
          <h3 className="text-xl font-semibold">
            Pressure: <strong>{weatherData.main.pressure}hPa</strong>
          </h3>
          <div className="flex  mt-5">
            <button className="mx-auto duration-500 border-2 w-64 p-2 font-semibold rounded-xl border-gray-800 text-xl hover:bg-gray-800 hover:text-blue-400">
              Save data
            </button>
          </div>
        </>
      )}
    </div>
  );
}
