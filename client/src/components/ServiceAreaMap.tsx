import { useRef, useEffect } from "react";
import { MapView } from "./Map";

interface ServiceAreaMapProps {
  title?: string;
  description?: string;
}

export default function ServiceAreaMap({ 
  title = "Our Service Area",
  description = "2B Landscaping proudly serves Durant, Oklahoma and surrounding areas in Bryan County"
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
            Serving Durant, OK & Bryan County<br/>
            Phone: (580) 916-2686
          </p>
        </div>
      `,
    });

    mainMarker.addListener("click", () => {
      infoWindow.open(map, mainMarker);
    });

    // Draw service area circle (approximately 15 miles radius)
    new google.maps.Circle({
      strokeColor: "#d4a574",
      strokeOpacity: 0.6,
      strokeWeight: 2,
      fillColor: "#d4a574",
      fillOpacity: 0.15,
      map: map,
      center: { lat: 33.7299, lng: -96.8687 },
      radius: 24140, // approximately 15 miles in meters
    });

    // Add service area markers for nearby towns
    const serviceAreas = [
      { lat: 33.8, lng: -96.85, name: "Bryan County" },
      { lat: 33.65, lng: -96.9, name: "Calera Area" },
      { lat: 33.75, lng: -96.75, name: "Mead Area" },
    ];

    serviceAreas.forEach((area) => {
      new google.maps.Marker({
        position: { lat: area.lat, lng: area.lng },
        map: map,
        title: area.name,
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
        initialZoom={11}
        onMapReady={handleMapReady}
        className="w-full h-96 rounded-lg shadow-lg border border-gray-200"
      />
      <div className="mt-6 bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-bold text-[#2d5f4f] mb-3">Service Coverage</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Durant, Oklahoma (Primary Service Area)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Bryan County and Surrounding Areas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Calera, Mead, and Nearby Communities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#d4a574] font-bold">•</span>
            <span>Custom Projects Beyond Service Area</span>
          </li>
        </ul>
        <p className="text-sm text-gray-600 mt-4">
          <strong>Service Radius:</strong> Approximately 15 miles from Durant. We also take on select projects beyond our standard service area. Contact us for availability.
        </p>
      </div>
    </div>
  );
}
