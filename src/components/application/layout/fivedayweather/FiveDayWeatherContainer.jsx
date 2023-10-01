import { useEffect } from "react";
import { useUrlPosition } from "../../../../hooks/useUrlPosition";
import { useWeatherContext } from "../../../../hooks/useWeatherContext";
import { useLayoutContext } from "../../../../hooks/useLayoutContext";
import Spinner from "../Spinner";
import LayoutIntro from "../LayoutIntro";
import LayoutError from "../LayoutError";
import FiveDayWeatherList from "./FiveDayWeatherList";
import FiveDayWeatherItem from "./FiveDayWeatherItem";
import FiveDayWeatherHeader from "./FiveDayWeatherHeader";
import WeatherDataComponent from "../WeatherDataComponent";

export default function FiveDayWeatherContainer() {
  const { detailedView } = useLayoutContext();
  const [lat, lng] = useUrlPosition();
  const {
    error: fetchError,
    fiveDayWeatherData: weatherData,
    isLoading,
    fetchCityAndRegionName,
    fetchFiveDayWeather,
  } = useWeatherContext();

  const totalWeatherOptions = 40;
  const weatherOptionsPerDay = 8;

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

  if (weatherData === null && !isLoading) return <LayoutIntro />;
  if (fetchError) return <LayoutError />;
  if (isLoading) return <Spinner />;

  if (!detailedView.isDetailed)
    return (
      <div className="p-5 mb-5">
        <FiveDayWeatherHeader />
        {Array.from({ length: totalWeatherOptions }, (_, i) => {
          if (i % 8 === 0)
            return (
              <FiveDayWeatherList key={_} date={i / 8 + 1}>
                {Array.from({ length: weatherOptionsPerDay }, (_, index) => (
                  <FiveDayWeatherItem key={index + i} index={i + index} />
                ))}
              </FiveDayWeatherList>
            );
        })}
      </div>
    );
  return (
    <WeatherDataComponent weatherData={weatherData.list[detailedView.index]} />
  );
}
