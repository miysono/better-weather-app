import ApplicationOverlay from "./layout/ApplicationOverlay";
import ApplicationLayout from "./layout/ApplicationLayout";
import ApplicationMap from "./layout/ApplicationMap";

export default function Application() {
  return (
    <div className="h-screen">
      {/* Layout */}
      <ApplicationLayout />

      {/* Map */}
      <ApplicationMap />

      {/* Overlay */}
      <ApplicationOverlay />
    </div>
  );
}
