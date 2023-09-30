import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Forecasts from "./pages/Forecasts";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Application from "./pages/Application";
import WeatherContainer from "./components/application/layout/realtimeweather/WeatherContainer";
import FiveDayWeatherContainer from "./components/application/layout/fivedayweather/FiveDayWeatherContainer";
import SavedWeatherContainer from "./components/application/layout/savedweather/SavedWeatherContainer";
import PageNotFound from "./pages/PageNotFound";
import { WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="forecasts" element={<Forecasts />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<Application />}>
            <Route index element={<Navigate replace to="realtime" />} />
            <Route path="realtime" element={<WeatherContainer />} />
            <Route path="5day" element={<FiveDayWeatherContainer />} />
            <Route path="saved" element={<SavedWeatherContainer />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </WeatherProvider>
  );
}

export default App;
