//@ts-nocheck

import {
  useLoadScript,
  GoogleMap,
  Marker,
  Circle,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import PlacesAutocomplete from "./PlacesAutoComplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Home: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);
  const [lat, setLat] = useState(51.5074);
  const [lng, setLng] = useState(-0.1278);
  const [zoom, setZoom] = useState(14);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.LatLng | null>(
    null
  );
  const [selectedRadius, setSelectedRadius] = useState("");

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: true,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
    }),
    []
  );

  const handleZoomChange = (event: google.maps.MapMouseEvent) => {
    setZoom(event?.map?.getZoom() || 14);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadius(event.target.value);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "myAPIkey",
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const renderCircle = () => {
    if (selectedPlace && selectedRadius !== "") {
      const radiusInMeters = parseInt(selectedRadius) * 1609.34; // Convert selected radius to meters
      return (
        <Circle
          center={selectedPlace}
          radius={radiusInMeters}
          options={{
            fillColor: "#0088ff",
            fillOpacity: 0.2,
            strokeColor: "#0088ff",
            strokeOpacity: 1,
            strokeWeight: 2,
          }}
        />
      );
    }

    return null;
  };

  const userData = JSON.parse(sessionStorage.getItem("userData")) || {};

  userData.location = { selectedPlace };
  userData.radius = { selectedRadius };

  sessionStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div>
      <PlacesAutocomplete
        onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results: any) => {
            const { lat, lng } = getLatLng(results[0]);
            const selectedLatLng = new google.maps.LatLng(lat, lng);
            setSelectedPlace(selectedLatLng);

            setLat(lat);
            setLng(lng);
            setZoom(14);
          });
        }}
      ></PlacesAutocomplete>
      <div>
        <label className="block text-sm font-semibold text-gray-800 mt-4">
          Choose your search radius
        </label>
        <select
          className="mt-2 mb-4 border-2 border-black rounded-md border-solid"
          value={selectedRadius}
          onChange={handleRadiusChange}
        >
          <option value="">Select an option</option>
          <option value="1">1 mile</option>
          <option value="2">2 miles</option>
          <option value="3">3 miles</option>
          <option value="4">4 miles</option>
          <option value="5">5 miles</option>
          <option value="6">6 miles</option>
          <option value="7">7 miles</option>
          <option value="8">8 miles</option>
          <option value="9">9 miles</option>
          <option value="10">10 miles</option>
        </select>
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={zoom}
        center={selectedPlace || mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map Component Loaded...")}
        onZoomChanged={handleZoomChange}
      >
        {selectedPlace && <Marker position={selectedPlace} />}
        {renderCircle()}
      </GoogleMap>
    </div>
  );
};

export default Home;
