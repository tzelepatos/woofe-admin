"use client";
import { useState } from "react";

//compoments
import CategoryIcon from "@/app/components/CategoryIcon";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { FormLabel, FormDescription } from "@/components/ui/form";
import { models } from "mongoose";
import {
  servicesConst,
  serviceColorMap,
  servicesServices,
  serviceServiceColorMap,
  servicesSupplies,
  serviceSuppliesColorMap,
} from "@/app/models/Services";

const ServicesTags = ({
  form,
  defaultValues,
  createMode,
  viewMode,
  editMode,
  selectedCategory,
}) => {
  // Define your services and color maps based on selectedCategory
  let services = [];
  let colorMap = {};

  //states
  const [activeServices, setActiveServices] = useState(
    defaultValues?.services || []
  );

  console.log("selectedCategory", selectedCategory);
  // console.log("default", activeServices);

  //handlers
  const handleCreateEdit = (service) => {
    const updatedServices = activeServices.includes(service)
      ? activeServices.filter((s) => s !== service)
      : [...activeServices, service];
    form.setValue("services", updatedServices);
    setActiveServices(updatedServices);
  };

  if (selectedCategory === "Grooming") {
    services = servicesConst;
    colorMap = serviceColorMap;
  } else if (selectedCategory === "Services") {
    services = servicesServices;
    colorMap = serviceServiceColorMap;
  } else if (selectedCategory === "Supplies") {
    services = servicesSupplies;
    colorMap = serviceSuppliesColorMap;
  }
  // Render all services if viewMode is true
  if (viewMode) {
    services = [...activeServices];
    colorMap = {
      ...serviceColorMap,
      ...serviceServiceColorMap,
      ...serviceSuppliesColorMap,
    };
  }
  const servicesSum = {
    Grooming: [...servicesConst],
    Services: [...servicesServices],
    Supplies: [...servicesSupplies],
  };
  let colorMapSum = {
    ...serviceColorMap,
    ...serviceServiceColorMap,
    ...serviceSuppliesColorMap,
  };

  return (
    <div className=" space-y-5 text-background bg-jimGrayLight container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <FormLabel>
        <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl ">
          {viewMode ? (
            <>
              <strong>Services-Tags</strong>
              {/* <CategoryIcon selectedCategory={selectedCategory} /> */}
              <Icons.tag className="ml-2 h-5 w-5" />
            </>
          ) : (
            <>
              Add&nbsp;
              <strong>Services-Tags</strong>
              {/* <CategoryIcon selectedCategory={selectedCategory} /> */}
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
        <div className="space-y-6">
          {Object.entries(servicesSum).map(([category, serviceList]) => (
            <div key={category}>
              <p className="flex items-center justify-start  text-foreground  text-md xl:text-lg  pb-2 ">
                {category} <CategoryIcon selectedCategory={category} />
              </p>
              <div className="flex flex-wrap gap-2">
                {serviceList.map((service, index) => (
                  <Button
                    disabled={viewMode}
                    key={index}
                    type="button"
                    variant="outline"
                    size="lg"
                    className={`${
                      activeServices.includes(service)
                        ? colorMapSum[service]
                        : "bg-gray-300"
                    }`}
                    onClick={() => handleCreateEdit(service)}
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FormLabel>
    </div>
  );
};

export default ServicesTags;
