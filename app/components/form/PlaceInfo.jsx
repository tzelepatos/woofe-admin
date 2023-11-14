"use client";
import React, { useState } from "react";
//shadcn
import { Icons } from "@/components/ui/icons";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ModalMaps from "./ModalMaps";

const PlaceInfo = ({ form, viewMode, editMode }) => {
  const [address, setAddress] = useState({
    address: form.formState.defaultValues.address || "",
    city: form.formState.defaultValues.city || "",
    zipCode: form.formState.defaultValues.zipCode || "",
    lat: parseFloat(form.formState.defaultValues.latitude) || 0,
    lng: parseFloat(form.formState.defaultValues.longitude) || 0,
  });

  // console.log("form", form);

  const handleUpdateClick = () => {
    form.setValue("address", address.address);
    form.setValue("city", address.city);
    form.setValue("zipCode", address.zipCode);
    form.setValue("latitude", address.lat);
    form.setValue("longitude", address.lng);
  };

  // console.log("placeinfo address", address);
  const [showMap, setShowMap] = useState(false);
  return (
    <div className="space-y-4 bg-jimGray container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl">
        Place&nbsp;
        <strong>Info</strong>
        <Icons.place className="ml-2 h-5 w-5" />
      </h1>
      {/* address */}
      <FormField
        disabled={viewMode}
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold">Address</FormLabel>
            <FormControl>
              <Input
                className="bg-background text-foreground"
                placeholder="plataiwn 125 "
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* //city */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <FormField
          disabled={viewMode}
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">City</FormLabel>
              <FormControl>
                <Input
                  className="bg-background text-foreground"
                  placeholder="enter a city"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* zipCode */}
        <FormField
          disabled={viewMode}
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Zip code</FormLabel>
              <FormControl>
                <Input
                  className="bg-background text-foreground"
                  placeholder="12462 "
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="grid md:grid-cols-3  grid-cols-1 gap-4 items-end">
        <div className="flex flex-col gap-2 items-start">
          <FormLabel className="font-bold">Select from Google Maps</FormLabel>
          <Button
            type="button"
            variant="signIn"
            size="cancel"
            className="text-sm sm:text-base w-full "
            onClick={(event) => {
              event.preventDefault();
              setShowMap(true);
            }}
          >
            Open Map
          </Button>
        </div>

        {/* latitude */}
        {/* <FormLabel>Google Maps Coordinates</FormLabel> */}
        <FormField
          disabled={viewMode}
          control={form.control}
          name="latitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Google Maps-Latitude</FormLabel>
              <FormControl>
                <Input
                  className="bg-background text-foreground"
                  placeholder="37.99209193041517 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* longitude */}
        <FormField
          disabled={viewMode}
          control={form.control}
          name="longitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Google Maps-Longitude</FormLabel>
              <FormControl>
                <Input
                  className="bg-background text-foreground"
                  placeholder="23.759240569541465 "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div>
        {showMap && (
          <ModalMaps
            onClose={() => setShowMap(false)}
            address={address}
            setAddress={setAddress}
            handleUpdateClick={handleUpdateClick}
            viewMode={viewMode}
            form={form}
          />
        )}
      </div>
    </div>
  );
};

export default PlaceInfo;
