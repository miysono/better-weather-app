export default function FiveDayWeatherList({ children, date }) {
  return (
    <>
      <h1 className="text-center my-2.5">Day {date}</h1>
      <div className="border-y-2 border-blue-400 flex">{children}</div>
    </>
  );
}
