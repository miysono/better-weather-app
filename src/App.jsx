import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./contexts/WeatherContext";
import { LayoutProvider } from "./contexts/LayoutContext";
import { AuthProvider } from "./contexts/AuthContext";

import Homepage from "./pages/homepage/Homepage";
import Forecasts from "./pages/forecasts/Forecasts";
import Pricing from "./pages/pricing/Pricing";
import AboutUs from "./pages/aboutus/AboutUs";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import PageNotFound from "./pages/pagenotfound/PageNotFound";

import Application from "./pages/application/Application";
import RealtimeWeatherContainer from "./pages/application/components/realtimeweather/RealtimeWeatherContainer";
import FiveDayWeatherContainer from "./pages/application/components/fivedayweather/FiveDayWeatherContainer";
import SavedWeatherContainer from "./pages/application/components/savedweather/SavedWeatherContainer";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <WeatherProvider>
        <LayoutProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="forecasts" element={<Forecasts />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <Application />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="realtime" />} />
                <Route path="realtime" element={<RealtimeWeatherContainer />} />
                <Route path="5day" element={<FiveDayWeatherContainer />} />
                <Route path="saved" element={<SavedWeatherContainer />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </LayoutProvider>
      </WeatherProvider>
    </AuthProvider>
  );
}

export default App;
