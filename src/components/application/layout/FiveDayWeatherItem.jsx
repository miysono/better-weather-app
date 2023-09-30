export default function FiveDayWeatherItem({
  weatherData,
  setDetailedView,
  index,
}) {
  return (
    <div
      className="p-2 cursor-pointer hover:bg-blue-400 hover:text-gray-800"
      onClick={() => {
        setDetailedView({ isDetailed: true, index: index });
      }}
    >
      <p>{weatherData.dt_txt.slice(10, 16)}</p>
      <img src="/about-test.svg" alt="" />
      <p className="text-center">
        {Math.floor(weatherData.main.temp)}
        *C
      </p>
    </div>
  );
}
