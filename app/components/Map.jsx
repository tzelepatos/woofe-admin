"use client";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const libraries = ["places"];

const Map = ({
  address,
  setAddress,
  handleUpdateClick,
  onClose,
  viewMode,
  form,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    lat: parseFloat(form.formState.defaultValues.latitude),
    lng: parseFloat(form.formState.defaultValues.longitude),
  });
  const autocompleteRef = useRef(null);
  const [autocompleteKey, setAutocompleteKey] = useState(0);
  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const lat = parseFloat(form.formState.defaultValues.latitude);
  const lng = parseFloat(form.formState.defaultValues.longitude);

  const handleUpdateAndClose = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleUpdateClick();
      onClose();
    }, 2000);
  };

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat, lng };

  // handle place change on search
  const handlePlaceChanged = async () => {
    const place = autocompleteRef.current.getPlace();

    if (place && place.geometry) {
      const addressComponents = place.address_components;
      const addressNumber = addressComponents.find((component) =>
        component.types.includes("street_number")
      )?.long_name;
      const streetName = addressComponents.find((component) =>
        component.types.includes("route")
      )?.long_name;
      const city = addressComponents.find((component) =>
        component.types.includes("locality")
      )?.long_name;
      const zipCode = addressComponents
        .find((component) => component.types.includes("postal_code"))
        ?.long_name.replace(/\s/g, "");

      setAddress({
        address: `${streetName || place.name} ${addressNumber || ""}`,
        city,
        zipCode,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setCurrentLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });

      // console.log("place:", place);
    } else if (place) {
      // The selected item is not a place, use the Geocoding API
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${place.name}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();

      if (data.results[0]) {
        const location = data.results[0].geometry.location;
        setSearchLngLat({
          lat: location.lat,
          lng: location.lng,
        });

        // Store the selected address
        setAddress({
          address: place.name,
          city: "",
          zipCode: "",
          lat: location.lat,
          lng: location.lng,
        });
      } else {
        // console.log("The selected item is not a place.");
      }
    }
  };

  return (
    <div className="space-y-4 bg-jimGray container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      {/* search component +buttons */}
      <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl">
        Google&nbsp;
        <strong>Maps</strong>
        <Icons.place className="ml-2 h-5 w-5" />
      </h1>
      <div className="">
        <Autocomplete
          key={autocompleteKey}
          onLoad={(autocomplete) => {
            // console.log("Autocomplete loaded:", autocomplete);
            autocompleteRef.current = autocomplete;
          }}
          onPlaceChanged={handlePlaceChanged}
          options={{ fields: ["address_components", "geometry", "name"] }}
        >
          <Input
            disabled={viewMode}
            type="text"
            placeholder="Search for a location to update your Place Info"
            className="w-full flex bg-background text-foreground border-2 border-accent rounded-md p-2 "
          />
        </Autocomplete>
      </div>
      <div className="space-y-4 ">
        {/* outputs */}
        <div>
          <p>Address</p>
          <div className="border-2 h-9 rounded-md bg-background pl-2 flex items-center">
            {address.address}
          </div>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <div>
            <p>City</p>
            <div className="border-2 h-9 rounded-md bg-background pl-2 flex items-center">
              {address.city}
            </div>
          </div>
          <div>
            <p>Zip Code</p>
            <div className="border-2 h-9 rounded-md bg-background pl-2 flex items-center">
              {address.zipCode}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <p>Latitude</p>
            <div className="border-2 h-9 rounded-md bg-background pl-2 flex items-center">
              {address.lat}
            </div>
          </div>
          <div>
            <p>Longitude</p>
            <div className="border-2 h-9 rounded-md bg-background pl-2 flex items-center">
              {address.lng}
            </div>
          </div>
        </div>
      </div>
      {/* map component  */}
      <div className="border-2  rounded-xl">
        <GoogleMap
          zoom={currentLocation ? 18 : 12}
          center={currentLocation || center}
          mapContainerStyle={{
            width: "100%",
            height: "400px",
            margin: "auto",
            borderRadius: "10px",
          }}
        >
          {currentLocation && <Marker position={currentLocation} />}
        </GoogleMap>
      </div>
      <div className="space-x-2 flex justify-end">
        <Button
          disabled={viewMode}
          type="button"
          variant="signIn"
          size="cancel"
          className="text-sm sm:text-base bg-red-500 "
          onClick={() => {
            setAddress({
              address: "",
              addressNumber: "",
              city: "",
              zipCode: "",
              lat: "",
              lng: "",
            });
            setAutocompleteKey((prevKey) => prevKey + 1);
          }}
        >
          Clear
        </Button>
        <Button
          disabled={viewMode}
          type="button"
          variant="signIn"
          size="cancel"
          className="text-sm sm:text-base"
          onClick={handleUpdateAndClose}
        >
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Update
        </Button>
      </div>
    </div>
  );
};

export default Map;
