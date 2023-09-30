import { useLayoutContext } from "../../../../hooks/useLayoutContext";

export default function FiveDayWeatherItem({ weatherData, index }) {
  const { setDetailedView } = useLayoutContext();
  return (
    <div
      className="p-2 cursor-pointer hover:bg-blue-400 hover:text-gray-800"
      onClick={() => {
        setDetailedView({ isDetailed: true, index: index });
      }}
    >
      <p>{weatherData.dt_txt.slice(10, 16)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt=""
      />
      <p className="text-center">
        {Math.floor(weatherData.main.temp)}
        °C
      </p>
    </div>
  );
}
