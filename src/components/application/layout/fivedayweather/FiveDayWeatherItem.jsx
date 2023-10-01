import { useLayoutContext } from "../../../../hooks/useLayoutContext";
import { useWeatherContext } from "../../../../hooks/useWeatherContext";

export default function FiveDayWeatherItem({ index }) {
  const { setDetailedView } = useLayoutContext();
  const { fiveDayWeatherData: weatherData } = useWeatherContext();
  return (
    <div
      className="p-2 cursor-pointer hover:bg-blue-400 hover:text-gray-800"
      onClick={() => {
        setDetailedView({ isDetailed: true, index: index });
      }}
    >
      <p>{weatherData.list[index].dt_txt.slice(10, 16)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.list[index].weather[0].icon}@2x.png`}
        alt=""
      />
      <p className="text-center">
        {Math.floor(weatherData.list[index].main.temp)}
        °C
      </p>
    </div>
  );
}
