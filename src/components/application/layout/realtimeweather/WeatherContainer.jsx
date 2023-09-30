import { useEffect } from "react";
import { useUrlPosition } from "../../../../hooks/useUrlPosition";
import { useWeatherContext } from "../../../../hooks/useWeatherContext";

import Spinner from "../Spinner";
import LayoutIntro from "../LayoutIntro";
import LayoutError from "../LayoutError";
import WeatherDataComponent from "../WeatherDataComponent";

export default function WeatherContainer() {
  const [lat, lng] = useUrlPosition();

  const {
    error: fetchError,
    isLoading,
    regionData,
    realtimeWeatherData: weatherData,
    fetchCityAndRegionName,
    fetchRealtimeWeather,
  } = useWeatherContext();

  useEffect(
    function () {
      async function getData() {
        console.log(isLoading);
        if (!lat && !lng) return;
        await fetchCityAndRegionName(lat, lng);
        console.log(isLoading);
        await fetchRealtimeWeather(lat, lng);
      }
      getData();
    },
    [lat, lng, fetchCityAndRegionName, fetchRealtimeWeather]
  );

  if (weatherData === null && !isLoading) return <LayoutIntro />;
  if (isLoading) return <Spinner />;
  if (fetchError) return <LayoutError error={fetchError} />;

  return (
    <WeatherDataComponent weatherData={weatherData} regionData={regionData} />
  );
}
