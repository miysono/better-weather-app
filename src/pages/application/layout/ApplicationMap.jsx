import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useLayoutContext } from "/src/hooks/useLayoutContext";

export default function ApplicationMap() {
  const [mapPosition] = useState([40, 0]);

  return (
    <div className="z-0 w-full h-full absolute">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function DetectClick() {
  const { setIsLayoutOpen } = useLayoutContext();
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      setIsLayoutOpen(true);
      navigate(`?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
    drag: () => {
      setIsLayoutOpen(false);
    },
  });
}
