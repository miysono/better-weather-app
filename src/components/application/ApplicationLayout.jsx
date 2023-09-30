import LayoutHeader from "./layout/LayoutHeader";
import LayoutBody from "./layout/LayoutBody";
import LayoutForecastOptions from "./layout/LayoutForecastOptions";
import LayoutForecastOption from "./layout/LayoutForecastOption";

import { Outlet } from "react-router-dom";

export default function ApplicationLayout({ isLayoutOpen }) {
  return (
    <LayoutBody isLayoutOpen={isLayoutOpen}>
      {/* Layout header */}
      <LayoutHeader />
      {/* Forecast options */}
      <LayoutForecastOptions>
        <LayoutForecastOption linkTo="realtime" optionName="Realtime" />
        <LayoutForecastOption linkTo="5day" optionName="5-Day" />
        <LayoutForecastOption linkTo="saved" optionName="Saved" />
      </LayoutForecastOptions>
      <Outlet />
    </LayoutBody>
  );
}
