import ApplicationOverlay from "../components/application/overlay/ApplicationOverlay";
import ApplicationLayout from "../components/application/ApplicationLayout";
import ApplicationMap from "../components/application/ApplicationMap";

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
