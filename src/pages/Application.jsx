import { useEffect, useState } from "react";
import { useUrlPosition } from "../hooks/useUrlPosition";

import ApplicationOverlay from "../components/application/overlay/ApplicationOverlay";
import ApplicationLayout from "../components/application/ApplicationLayout";
import ApplicationMap from "../components/application/ApplicationMap";

export default function Application() {
  const [isLayoutOpen, setIsLayoutOpen] = useState(true);

  return (
    <div className="h-screen">
      {/* Layout */}
      <ApplicationLayout isLayoutOpen={isLayoutOpen} />

      {/* Map */}
      <ApplicationMap setIsLayoutOpen={setIsLayoutOpen} />

      {/* Overlay */}
      <ApplicationOverlay />
    </div>
  );
}
