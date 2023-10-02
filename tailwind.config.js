/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //PAGES
    "./src/pages/aboutus/AboutUs.jsx",
    "./src/pages/application/Application.jsx",
    "./src/pages/forecasts/Forecasts.jsx",
    "./src/pages/homepage/Homepage.jsx",
    "./src/pages/login/Login.jsx",
    "./src/pages/pagenotfound/PageNotFound.jsx",
    "./src/pages/pricing/Pricing.jsx",

    //ABOUTUS COMPONENTS
    "./src/components/aboutus/components/AboutUsSubtitle.jsx",

    //APPLICATION COMPONENTS
    "./src/pages/application/ApplicationLayout.jsx",
    "./src/pages/application/ApplicationMap.jsx",

    //LAYOUT
    "./src/pages/application/layout/LayoutBody.jsx",
    "./src/pages/application/layout/LayoutError.jsx",
    "./src/pages/application/layout/LayoutForecastOption.jsx",
    "./src/pages/application/layout/LayoutForecastOptions.jsx",
    "./src/pages/application/layout/LayoutHeader.jsx",
    "./src/pages/application/layout/LayoutIntro.jsx",
    "./src/pages/application/layout/Spinner.jsx",
    "./src/pages/application/layout/WeatherDataComponent.jsx",
    "./src/pages/application/layout/fivedayweather/FiveDayWeatherContainer.jsx",
    "./src/pages/application/layout/fivedayweather/FiveDayWeatherHeader.jsx",
    "./src/pages/application/layout/fivedayweather/FiveDayWeatherItem.jsx",
    "./src/pages/application/layout/fivedayweather/FiveDayWeatherList.jsx",
    "./src/pages/application/layout/realtime/WeatherContainer.jsx",
    "./src/pages/application/layout/savedweather/SavedWeatherContainer.jsx",
    "./src/pages/application/overlay/ApplicationOverlay.jsx",

    //HOMEPAGE
    "./src/pages/homepage/components/Clouds.jsx",
    "./src/pages/homepage/components/HomepageDescriptions.jsx",
    "./src/pages/homepage/components/HomepageFeatures.jsx",
    "./src/pages/homepage/components/HomepageIntro.jsx",
    "./src/pages/homepage/components/Sun.jsx",

    //PRICING
    "./src/pages/pricing/components/CardsContainer.jsx",
    "./src/pages/pricing/components/PricingBody.jsx",
    "./src/pages/pricing/components/PricingCard.jsx",
    "./src/pages/pricing/components/PricingFeature.jsx",
    "./src/pages/pricing/components/PricingFeatureList.jsx",
    "./src/pages/pricing/components/PricingTitle.jsx",

    //Components
    "./src/components/Button.jsx",
    "./src/components/PageBody.jsx",
    "./src/components/PageContentCard.jsx",
    "./src/components/PageHeader.jsx",
    "./src/components/Spinner.jsx",

    //Layout
    "./src/layouts/Footer.jsx",
    "./src/layouts/Navbar.jsx",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "clouds-move": "move-clouds 20s linear infinite",
        "rain-move": "rain 5s linear infinite",
      },
      keyframes: {
        "move-clouds": {},
        rain: {
          "0%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(20%) rotate(10deg)" },
        },
      },
    },
  },
  plugins: [],
};
