import { useRef } from "react";
import { MapView } from "./Map";

interface ServiceAreaMapProps {
  title?: string;
  description?: string;
}

export default function ServiceAreaMap({ 
  title = "Our Service Area",
  description = "2B Landscaping proudly serves Bryan, Atoka, Carter, and Grayson Counties in Oklahoma"
}: ServiceAreaMapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add marker for main location (Durant, OK)
    const mainMarker = new google.maps.Marker({
      position: { lat: 33.7299, lng: -96.8687 },
      map: map,
      title: "2B Landscaping - Durant, OK",
    });

    // Add info window for main marker
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="font-family: Arial; padding: 10px;">
          <h3 style="margin: 0 0 5px 0; color: #2d5f4f;">2B Landscaping</h3>
          <p style="margin: 0; font-size: 12px; color: #666;">
            Serving Bryan, Atoka, Carter & Grayson Counties<br/>
            Phone: (580) 916-2686
          </p>
        </div>
      `,
    });

    mainMarker.addListener("click", () => {
      infoWindow.open(map, mainMarker);
    });

    // Define service area polygons for each county
    // Bryan County (approximate bounds)
    const bryanCountyBounds = [
      { lat: 33.9, lng: -96.6 },
      { lat: 33.9, lng: -97.1 },
      { lat: 33.5, lng: -97.1 },
      { lat: 33.5, lng: -96.6 },
    ];

    new google.maps.Polygon({
      paths: bryanCountyBounds,
      strokeColor: "#d4a574",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#d4a574",
      fillOpacity: 0.2,
      map: map,
    });

    // Atoka County (approximate bounds)
    const atokaBounds = [
      { lat: 34.2, lng: -96.4 },
      { lat: 34.2, lng: -96.9 },
      { lat: 33.9, lng: -96.9 },
      { lat: 33.9, lng: -96.4 },
    ];

    new google.maps.Polygon({
      paths: atokaBounds,
      strokeColor: "#d4a574",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#d4a574",
      fillOpacity: 0.2,
      map: map,
    });

    // Carter County (approximate bounds)
    const carterBounds = [
      { lat: 33.5, lng: -97.5 },
      { lat: 33.5, lng: -97.0 },
      { lat: 33.1, lng: -97.0 },
      { lat: 33.1, lng: -97.5 },
    ];

    new google.maps.Polygon({
      paths: carterBounds,
      strokeColor: "#d4a574",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#d4a574",
      fillOpacity: 0.2,
      map: map,
    });

    // Grayson County (approximate bounds)
    const graysonBounds = [
      { lat: 33.6, lng: -96.4 },
      { lat: 33.6, lng: -95.9 },
      { lat: 33.2, lng: -95.9 },
      { lat: 33.2, lng: -96.4 },
    ];

    new google.maps.Polygon({
      paths: graysonBounds,
      strokeColor: "#d4a574",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#d4a574",
      fillOpacity: 0.2,
      map: map,
    });

    // Add county center markers
    const countyMarkers = [
      { lat: 33.7, lng: -96.85, name: "Bryan County" },
      { lat: 34.05, lng: -96.65, name: "Atoka County" },
      { lat: 33.3, lng: -97.25, name: "Carter County" },
      { lat: 33.4, lng: -96.15, name: "Grayson County" },
    ];

    countyMarkers.forEach((marker) => {
      new google.maps.Marker({
        position: { lat: marker.lat, lng: marker.lng },
        map: map,
        title: marker.name,
      });
    });
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[#2d5f4f] mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <MapView
        initialCenter={{ lat: 33.7299, lng: -96.8687 }}
        initialZoom={9}
        onMapReady={handleMapReady}
        className="w-full h-96 rounded-lg shadow-lg border border-gray-200"
      />
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#2d5f4f] mb-3">Service Coverage</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Bryan County (Primary Service Area)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Atoka County</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Carter County</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Grayson County</span>
          </li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Service Area:</strong> We proudly serve all four counties with full landscaping services including lawn care, design, hardscaping, and irrigation. Contact us for availability on projects outside these areas.
        </p>
      </div>
    </div>
  );
}
