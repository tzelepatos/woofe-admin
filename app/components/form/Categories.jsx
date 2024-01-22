"use client";
import { useState } from "react";

//compoments
import { Switch } from "@/components/ui/switch";
import CategoryIcon from "@/app/components/CategoryIcon";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { FormDescription } from "@/components/ui/form";

import {
  servicesGroomingValues,
  servicesGroomingColorMap,
  servicesServices,
  serviceServiceColorMap,
  servicesSupplies,
  serviceSuppliesColorMap,
} from "@/app/models/Services";

const Categories = ({
  form,
  defaultValues,
  createMode,
  viewMode,
  editMode,
}) => {
  const [isSwitchOnGrooming, setSwitchOnGrooming] = useState(false);
  const [isSwitchOnServices, setSwitchOnServices] = useState(false);
  const [isSwitchOnSupplies, setSwitchOnSupplies] = useState(false);

  const [activeServicesGrooming, setActiveServicesGrooming] = useState(
    defaultValues?.services.grooming || []
  );
  const [activeServicesServices, setActiveServicesServices] = useState(
    defaultValues?.services.services || []
  );
  const [activeServicesSupplies, setActiveServicesSupplies] = useState(
    defaultValues?.services.supplies || []
  );

  //handler for update state of grooming and reset activeServices
  const handleSwitchChange = (setSwitchOn, setActiveServices, isSwitchOn) => {
    setSwitchOn(!isSwitchOn);
    if (!editMode) {
      setActiveServices([]);
    }
  };

  const handleActiveServicesGrooming = (service) => {
    const updatedServices = activeServicesGrooming.includes(service)
      ? activeServicesGrooming.filter((s) => s !== service)
      : [...activeServicesGrooming, service];

    form.setValue("services.grooming", updatedServices);

    setActiveServicesGrooming(updatedServices);
  };
  const handleActiveServicesServices = (service) => {
    const updatedServices = activeServicesServices.includes(service)
      ? activeServicesServices.filter((s) => s !== service)
      : [...activeServicesServices, service];

    form.setValue("services.services", updatedServices);

    setActiveServicesServices(updatedServices);
  };
  const handleActiveServicesSupplies = (service) => {
    const updatedServices = activeServicesSupplies.includes(service)
      ? activeServicesSupplies.filter((s) => s !== service)
      : [...activeServicesSupplies, service];

    form.setValue("services.supplies", updatedServices);

    setActiveServicesSupplies(updatedServices);
  };

  const servicesSum = {
    Grooming: [...servicesGroomingValues],
    Services: [...servicesServices],
    Supplies: [...servicesSupplies],
  };
  let colorMapSum = {
    ...servicesGroomingColorMap,
    ...serviceServiceColorMap,
    ...serviceSuppliesColorMap,
  };

  return (
    <div className=" space-y-4 text-background bg-jimGrayLight container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl ">
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
      {/* Grooming */}{" "}
      <div>
        <div className=" flex items-center justify-start">
          <p className="flex items-center justify-start text-foreground text-md xl:text-lg pb-2 font-semibold">
            Grooming <CategoryIcon selectedCategory="grooming" />
          </p>{" "}
          <Switch
            className=""
            disabled={viewMode}
            onCheckedChange={() =>
              handleSwitchChange(
                setSwitchOnGrooming,
                setActiveServicesGrooming,
                isSwitchOnGrooming
              )
            }
          />
        </div>
        <div className="flex flex-wrap gap-2  ">
          {servicesSum["Grooming"].map((service, index) => (
            <div key={index} className="">
              <div className="">
                <Button
                  disabled={!isSwitchOnGrooming || viewMode}
                  key={index}
                  type="button"
                  variant="outline"
                  size="lg"
                  className={`${
                    activeServicesGrooming.includes(service)
                      ? colorMapSum[service]
                      : "bg-gray-400"
                  }`}
                  onClick={() => handleActiveServicesGrooming(service)}
                >
                  {service}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* services */}
      <div>
        <div className=" flex items-center justify-start gap-2">
          <p className="flex items-center justify-start text-foreground text-md xl:text-lg pb-2 font-semibold">
            Services <CategoryIcon selectedCategory="services" />
          </p>{" "}
          <Switch
            className=""
            onCheckedChange={() =>
              handleSwitchChange(
                setSwitchOnServices,
                setActiveServicesServices,
                isSwitchOnServices
              )
            }
            disabled={viewMode}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {servicesSum["Services"].map((service, index) => (
            <div key={index}>
              <div className="">
                <Button
                  disabled={viewMode || !isSwitchOnServices}
                  key={index}
                  type="button"
                  variant="outline"
                  size="lg"
                  className={`${
                    activeServicesServices.includes(service)
                      ? colorMapSum[service]
                      : "bg-gray-400"
                  }`}
                  onClick={() => handleActiveServicesServices(service)}
                >
                  {service}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* supplies */}
      <div>
        <div className=" flex items-center justify-start">
          <p className="flex items-center justify-start text-foreground text-md xl:text-lg pb-2 font-semibold">
            Supplies <CategoryIcon selectedCategory="supplies" />
          </p>{" "}
          <Switch
            className=""
            onCheckedChange={() =>
              handleSwitchChange(
                setSwitchOnSupplies,
                setActiveServicesSupplies,
                isSwitchOnSupplies
              )
            }
            disabled={viewMode}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {servicesSum["Supplies"].map((service, index) => (
            <div key={index}>
              <div className="">
                <Button
                  disabled={viewMode || !isSwitchOnSupplies}
                  key={index}
                  type="button"
                  variant="outline"
                  size="lg"
                  className={`${
                    activeServicesSupplies.includes(service)
                      ? colorMapSum[service]
                      : "bg-gray-400"
                  }`}
                  onClick={() => handleActiveServicesSupplies(service)}
                >
                  {service}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
