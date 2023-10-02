import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./contexts/WeatherContext";
import { LayoutProvider } from "./contexts/LayoutContext";

import Homepage from "./pages/homepage/Homepage";
import Forecasts from "./pages/forecasts/Forecasts";
import Pricing from "./pages/pricing/Pricing";
import AboutUs from "./pages/aboutus/AboutUs";
import Login from "./pages/login/Login";
import Application from "./pages/application/Application";
import WeatherContainer from "./pages/application/layout/realtimeweather/WeatherContainer";
import FiveDayWeatherContainer from "./pages/application/layout/fivedayweather/FiveDayWeatherContainer";
import SavedWeatherContainer from "./pages/application/layout/savedweather/SavedWeatherContainer";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

function App() {
  return (
    <WeatherProvider>
      <LayoutProvider>
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
      </LayoutProvider>
    </WeatherProvider>
  );
}

export default App;
