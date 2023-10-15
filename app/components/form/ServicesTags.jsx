"use client";
import { useState } from "react";

//compoments
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { FormLabel, FormDescription } from "@/components/ui/form";

const servicesConst = [
  "Nails",
  "Bath",
  "Haircut",
  "Teeth",
  "Ears",
  "Anal Glands",
  "Paws",
  "Face",
  "Eyes",
  "Balls",
];
// Define a mapping of services to colors
const serviceColorMap = {
  Nails: "bg-groomingPink1",
  Bath: "bg-groomingPink2",
  Haircut: "bg-groomingPink3",
  Teeth: "bg-groomingPink4",
  Ears: "bg-groomingPink5",
  "Anal Glands": "bg-groomingPink6",
  Paws: "bg-groomingPink7",
  Face: "bg-groomingPink8",
  Eyes: "bg-groomingPink9",
  Balls: "bg-groomingPink10",
};

const ServicesTags = ({ form, viewMode, defaultValues, edit }) => {
  const [activeServices, setActiveServices] = useState([]);

  //tags function
  const toggleService = (service) => {
    setActiveServices((prevServices) => {
      const updatedServices = prevServices.includes(service)
        ? prevServices.filter((s) => s !== service)
        : [...prevServices, service];

      form.setValue("services", updatedServices);
      return updatedServices;
    });
  };
  return (
    <div className=" space-y-5 text-background bg-jimGrayLight container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <FormLabel>
        <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl">
          {viewMode ? (
            <>
              <strong>Services-Tags</strong>
              <Icons.tag className="ml-2 h-5 w-5" />
            </>
          ) : (
            <>
              Add&nbsp;
              <strong>Services-Tags</strong>
              <Icons.tag className="ml-2 h-5 w-5" />
            </>
          )}
        </h1>
        {viewMode ? (
          <>
            <FormDescription className="mb-4">Your picks.</FormDescription>
          </>
        ) : (
          <>
            <FormDescription className="mb-4">
              {" "}
              Click a Tag to add a service to your product.
            </FormDescription>
          </>
        )}

        {/* buttons map tag render*/}
        <div className="flex flex-wrap gap-2">
          {servicesConst.map((service, index) => (
            <Button
              disabled={viewMode}
              key={index}
              type="button"
              variant="outline"
              size="lg"
              className={`${
                viewMode || edit
                  ? defaultValues?.services?.includes(service)
                    ? serviceColorMap[service]
                    : "bg-gray-300"
                  : activeServices.includes(service)
                  ? serviceColorMap[service]
                  : "bg-gray-300"
              }`}
              onClick={() => {
                console.log("Clicked:", service);
                if (!viewMode || !edit) {
                  toggleService(service);
                }
              }}
            >
              {service}
            </Button>
          ))}
        </div>
      </FormLabel>
    </div>
  );
};

export default ServicesTags;
