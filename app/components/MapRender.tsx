"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function UpdateMap({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  map.setView({ lat, lng });
  return null;
}

type Props = {
  lat: number;
  lng: number;
};

export default function MapRender({ lat, lng }: Props) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      className="w-full h-full"
      style={{ zIndex: 4 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <UpdateMap lat={lat} lng={lng} />
    </MapContainer>
  );
}
