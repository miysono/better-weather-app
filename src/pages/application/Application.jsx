import ApplicationOverlay from "./overlay/ApplicationOverlay";
import ApplicationLayout from "./ApplicationLayout";
import ApplicationMap from "./ApplicationMap";

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
