import { useEffect, useState } from "react";
import { useUrlPosition } from "../../../hooks/useUrlPosition";
import { useWeatherContext } from "../../../hooks/useWeatherContext";
import Spinner from "./Spinner";
import LayoutIntro from "./LayoutIntro";
import LayoutError from "./LayoutError";
import FiveDayWeatherList from "./FiveDayWeatherList";
import FiveDayWeatherItem from "./FiveDayWeatherItem";
import FiveDayWeatherHeader from "./FiveDayWeatherHeader";
import WeatherDataComponent from "./WeatherDataComponent";

export default function FiveDayWeatherContainer() {
  const [detailedView, setDetailedView] = useState({
    isDetailed: false,
    index: null,
  });
  const [lat, lng] = useUrlPosition();
  const {
    error: fetchError,
    isLoading,
    regionData,
    fiveDayWeatherData: weatherData,
    fetchCityAndRegionName,
    fetchFiveDayWeather,
  } = useWeatherContext();

  console.log(weatherData);
  useEffect(
    function () {
      async function getData() {
        if (!lat && !lng) return;
        await fetchCityAndRegionName(lat, lng);
        await fetchFiveDayWeather(lat, lng);
      }
      getData();
    },
    [lat, lng, fetchCityAndRegionName, fetchFiveDayWeather]
  );

  if (weatherData === null) return <LayoutIntro />;
  if (fetchError) return <LayoutError />;
  if (isLoading) return <Spinner />;

  if (!detailedView.isDetailed)
    return (
      <div className="p-5 mb-5">
        <FiveDayWeatherHeader regionData={regionData} />
        {Array.from({ length: 40 }, (_, i) => {
          if (i % 8 === 0)
            return (
              <FiveDayWeatherList key={_} date={i / 8 + 1}>
                {Array.from({ length: 8 }, (_, index) => (
                  <FiveDayWeatherItem
                    weatherData={weatherData.list[i + index]}
                    key={index + i}
                    setDetailedView={setDetailedView}
                    index={i + index}
                  />
                ))}
              </FiveDayWeatherList>
            );
        })}
      </div>
    );
  return (
    <WeatherDataComponent
      regionData={regionData}
      weatherData={weatherData.list[detailedView.index]}
      setDetailedView={setDetailedView}
    />
  );
}
