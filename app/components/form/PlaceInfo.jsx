"use client";

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

const PlaceInfo = ({ form, viewMode, editMode }) => {
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
      <div className="grid grid-cols-2 gap-4">
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
      <div className="grid grid-cols-2 gap-4">
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
    </div>
  );
};

export default PlaceInfo;
