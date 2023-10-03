import { useEffect } from "react";
import { useUrlPosition } from "/src/hooks/useUrlPosition";
import { useWeatherContext } from "/src/hooks/useWeatherContext";

import Spinner from "/src/components/Spinner";
import LayoutIntro from "../LayoutIntro";
import LayoutError from "../LayoutError";
import WeatherDataComponent from "../WeatherDataComponent";

export default function WeatherContainer() {
  const [lat, lng] = useUrlPosition();

  const {
    error: fetchError,
    isLoading,
    realtimeWeatherData: weatherData,
    fetchCityAndRegionName,
    fetchRealtimeWeather,
  } = useWeatherContext();

  useEffect(
    function () {
      async function getData() {
        if (!lat && !lng) return;
        await fetchCityAndRegionName(lat, lng);
        await fetchRealtimeWeather(lat, lng);
      }
      getData();
    },
    [lat, lng, fetchCityAndRegionName, fetchRealtimeWeather]
  );

  if (weatherData === null && !isLoading) return <LayoutIntro />;
  if (isLoading) return <Spinner />;
  if (fetchError) return <LayoutError error={fetchError} />;

  return <WeatherDataComponent weatherData={weatherData} />;
}
