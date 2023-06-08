import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import PlacesAutocomplete from "./PlacesAutoComplete";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Home: NextPage = () => {
  const libraries = useMemo(() => ["places"], []);
  //   const mapCenter = useMemo(
  //     () => ({ lat: 27.672932021393862, lng: 85.31184012689732 }),
  //     []
  //   );
  const [lat, setLat] = useState(27.672932021393862);
  const [lng, setLng] = useState(85.31184012689732);

  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PlacesAutocomplete
        onAddressSelect={(address) => {
          getGeocode({ address: address }).then((results: any) => {
            const { lat, lng } = getLatLng(results[0]);

            setLat(lat);
            setLng(lng);
          });
        }}
      ></PlacesAutocomplete>
      <div>
        <input
          type="text"
          placeholder="Type in location"
          className="block text-sm font-semibold text-gray-800 pt-4"
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      />
    </div>
  );
};

export default Home;
