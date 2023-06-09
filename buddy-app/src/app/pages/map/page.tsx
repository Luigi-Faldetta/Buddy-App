//@ts-nocheck
"use client";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  Circle,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";
import axios from "axios";
import PlacesAutocomplete from "../../PlacesAutoComplete";
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
  const [selectedRadius, setSelectedRadius] = useState(0);

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
    }),
    []
  );

  const router = useRouter();

  const handleZoomChange = (event: google.maps.MapMouseEvent) => {
    setZoom(event?.map?.getZoom() || 14);
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRadius(event.target.value);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_KEY,
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

  const userData = JSON.parse(localStorage.getItem("userData"));

  userData.location = String(selectedPlace);
  userData.radius = Number(selectedRadius);

  localStorage.setItem("userData", JSON.stringify(userData));

  const handleSubmit = async (event: any) => {
    console.log("this is ", userData);
    event.preventDefault();
    try {
      // Send a POST request to your API endpoint
      const response = await axios.post(
        "/api/register",
        // {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // },
        userData
      );

      console.log("User created:", response.data);
      // Handle successful response or redirect the user to a success page
    } catch (error) {
      console.error("Error creating user:", error);
      // Handle error response or show an error message to the user
    }
    router.push("/");
  };

  return (
    <div>
      <div className="relative overflow-scroll flex flex-col items-center justify-center w-screen h-screen bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
        <div className="w-3/7 p-6 bg-white rounded-md text-center shadow-md overflow-scroll h-4/5 ">
          <Link
            href="/"
            className="text-3xl font-bold  text-red-500 text-center mx-20"
          >
            Buddy App
          </Link>
          <form onSubmit={handleSubmit}>
            <div class=" py-4 overflow-x-auto whitespace-nowrap mt-3 px-20 ml-10 mr-20">
              <div className="flex flex-row justify-end align-middle">
                <a href="/" class="text-gray-600 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </a>

                <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="text-gray-600 dark:text-gray-200">
                  Credentials
                </span>

                <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="text-gray-600 dark:text-gray-200">You</span>

                <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="text-gray-600 dark:text-gray-200">Search</span>
                <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <span class="font-bold text-red-500 dark:text-gray-200">
                  Location
                </span>
              </div>
            </div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Choose your location
            </label>
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
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6 .cursor-pointer:hover {
          cursor: pointer;
        }"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
