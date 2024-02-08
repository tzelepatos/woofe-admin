"use client";
import { useState } from "react";
import { getSchemaFields } from "@/app/actions/server";
//compoments
import { Switch } from "@/components/ui/switch";
import CategoryIcon from "@/app/components/CategoryIcon";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { FormDescription } from "@/components/ui/form";
import { Toggle } from "@/components/ui/toggle";

const Categories = ({
  form,
  defaultValues,
  createMode,
  viewMode,
  editMode,
  categories,
}) => {
  // console.log("defaultValues", defaultValues);
  const [isSwitchOnGrooming, setSwitchOnGrooming] = useState(false);
  const [isSwitchOnServices, setSwitchOnServices] = useState(false);
  const [isSwitchOnSupplies, setSwitchOnSupplies] = useState(false);

  //grooming values
  const [groomingValues, setGroomingValues] = useState(
    editMode || viewMode ? defaultValues.categories : categories
  );
  //services values
  const [serviceValues, setServiceValues] = useState(
    editMode || viewMode ? defaultValues.categories : categories
  );
  //supplies values
  const [suppliesValues, setSuppliesValues] = useState(
    editMode || viewMode ? defaultValues.categories : categories
  );

  // console.log("defaultValues", defaultValues);
  // console.log("serviceValues", serviceValues);

  //grooming handler
  const handlePressedChange = (pressed, animal, service, index, key) => {
    setGroomingValues((prevState) => {
      const newState = { ...prevState };
      newState["grooming"][animal][service][index][key][0] = pressed;

      // If in edit mode, also update the default values
      if (editMode) {
        defaultValues.categories["grooming"][animal][service][index][key][0] =
          pressed;
      }

      form.setValue("categories", newState);
      console.log(newState);
      return newState;
    });
  };
  //services handler
  const handleServiceChange = (pressed, animal, service, index) => {
    setServiceValues((prevState) => {
      const newState = { ...prevState };
      newState["services"][animal][index][service][0] = pressed;

      // If in edit mode, also update the default values
      if (editMode) {
        if (
          !Array.isArray(
            defaultValues.categories["services"][animal][index][service]
          )
        ) {
          defaultValues.categories["services"][animal][index][service] = [];
        }
        defaultValues.categories["services"][animal][index][service][0] =
          pressed;
      }

      form.setValue("categories", newState);
      console.log(newState);
      return newState;
    });
  };
  //supplies handler
  const handleSuppliesChange = (pressed, animal, service, index) => {
    setSuppliesValues((prevState) => {
      const newState = { ...prevState };
      newState["supplies"][animal][index][service][0] = pressed;

      // If in edit mode, also update the default values
      if (editMode) {
        if (
          !Array.isArray(
            defaultValues.categories["supplies"][animal][index][service]
          )
        ) {
          defaultValues.categories["supplies"][animal][index][service] = [];
        }
        defaultValues.categories["supplies"][animal][index][service][0] =
          pressed;
      }

      form.setValue("categories", newState);
      console.log(newState);
      return newState;
    });
  };
  //colors

  return (
    <div className=" space-y-4 text-background bg-jimGrayLight  border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <h1 className="flex items-center justify-start  text-foreground text-md xl:text-2xl ">
        {viewMode ? (
          <>
            <strong>Categories</strong>

            <Icons.tag className="ml-2 h-5 w-5" />
          </>
        ) : (
          <>
            Add&nbsp;
            <strong>Categories</strong>
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
            Click a Tag to add a category to your product.
          </FormDescription>
        </>
      )}
      {/* buttons map tag render*/}
      {/* Grooming */}{" "}
      <div>
        <div className=" flex items-center justify-start space-x-2">
          <h1 className="flex items-center justify-start text-foreground text-2xl  font-semibold">
            Grooming
          </h1>
          <CategoryIcon selectedCategory="grooming" />
          <Switch
            className=""
            disabled={viewMode}
            onCheckedChange={() => setSwitchOnGrooming(!isSwitchOnGrooming)}
          />
        </div>

        {/* new grooming-all */}
        <div className="flex flex-col gap-4 text-black w-full">
          {["dog", "cat", "various"].map((animal) => (
            <div key={animal} className="">
              <h1 className="capitalize font-bold">{animal}</h1>
              <div className="flex flex-col  border border-groomingPink rounded-xl p-2 ">
                {Object.keys(categories.grooming[animal]).map((service) => (
                  <div key={service} className="flex flex-col  p-2 ">
                    <h2 className="capitalize text-groomingPink text-xl font-bold">
                      {service}
                    </h2>
                    <div className="flex   w-full ">
                      {categories.grooming[animal][service].map(
                        (item, index) => (
                          <div
                            className="flex flex-wrap  gap-2  w-full"
                            key={index}
                          >
                            {Object.entries(item).map(([key, value]) => {
                              const keyToNormalCase = key
                                .replace(/([A-Z])/g, " $1")
                                .toLowerCase();
                              return (
                                <Toggle
                                  pressed={
                                    editMode
                                      ? defaultValues?.categories?.[
                                          "grooming"
                                        ]?.[animal]?.[service]?.[index]?.[
                                          key
                                        ]?.[0] ?? false
                                      : groomingValues["grooming"][animal][
                                          service
                                        ][index][key][0]
                                  }
                                  onPressedChange={(pressed) =>
                                    handlePressedChange(
                                      pressed,
                                      animal,
                                      service,
                                      index,
                                      key
                                    )
                                  }
                                  disabled={!isSwitchOnGrooming || viewMode}
                                  variant="outline"
                                  className="flex  data-[state=on]:bg-groomingPink data-[state=on]:hover:bg-groomingPink2 data-[state=on]:text-white hover:text-groomingPink bg-gray-300"
                                  key={key} // Use the key from the item as the React key
                                >
                                  <p className="capitalize text-xs font-semibold">{`${keyToNormalCase} `}</p>
                                </Toggle>
                              );
                            })}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* services */}
      <div>
        <div className=" flex items-center justify-start space-x-2">
          <p className="flex items-center justify-start text-foreground text-2xl  pb-2 font-semibold">
            Services <CategoryIcon selectedCategory="services" />
          </p>{" "}
          <Switch
            className=""
            disabled={viewMode}
            onCheckedChange={() => setSwitchOnServices(!isSwitchOnServices)}
          />
        </div>
        {/* new services-all */}
        <div className="flex flex-col gap-4 text-black w-full">
          {Object.entries(categories.services).map(([animal, services]) => (
            <div key={animal} className="pb-2">
              <h1 className="capitalize font-bold">{animal}</h1>
              <div className="flex flex-wrap gap-2 border border-groomingGreen rounded-xl p-2 ">
                {services.map((serviceObject, index) =>
                  Object.entries(serviceObject).map(([service, value]) => {
                    const keyToNormalCase = service
                      .replace(/([A-Z])/g, " $1")
                      .toLowerCase();

                    return (
                      <div key={`${service}-${index}`} className="">
                        <Toggle
                          pressed={
                            editMode
                              ? defaultValues?.categories?.services?.[animal]?.[
                                  index
                                ]?.[service]?.[0] ?? false
                              : serviceValues.services[animal][index][
                                  service
                                ][0]
                          }
                          onPressedChange={(pressed) =>
                            handleServiceChange(pressed, animal, service, index)
                          }
                          disabled={!isSwitchOnServices || viewMode}
                          variant="outline"
                          className="flex data-[state=on]:bg-groomingGreen data-[state=on]:hover:bg-servicesGreen2 data-[state=on]:text-white hover:text-groomingGreen bg-gray-300"
                        >
                          <p className="capitalize text-xs font-semibold">{`${keyToNormalCase} `}</p>
                        </Toggle>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* supplies */}
      <div>
        <div className=" flex items-center justify-start space-x-2">
          <p className="flex items-center justify-start text-foreground text-2xl  pb-2 font-semibold">
            Supplies <CategoryIcon selectedCategory="supplies" />
          </p>{" "}
          <Switch
            className=""
            disabled={viewMode}
            onCheckedChange={() => setSwitchOnSupplies(!isSwitchOnSupplies)}
          />
        </div>
        {/* new services-all */}
        <div className="flex flex-col gap-4 text-black w-full">
          {Object.entries(categories.supplies).map(([animal, supplies]) => (
            <div key={animal} className="pb-2">
              <h1 className="capitalize font-bold">{animal}</h1>
              <div className="flex flex-wrap gap-2 border border-jimOrange rounded-xl p-2 ">
                {supplies.map((serviceObject, index) =>
                  Object.entries(serviceObject).map(([service, value]) => {
                    const keyToNormalCase = service
                      .replace(/([A-Z])/g, " $1")
                      .toLowerCase();

                    return (
                      <div key={`${service}-${index}`} className="">
                        <Toggle
                          pressed={
                            editMode
                              ? defaultValues?.categories?.supplies?.[animal]?.[
                                  index
                                ]?.[service]?.[0] ?? false
                              : serviceValues.supplies[animal][index][
                                  service
                                ][0]
                          }
                          onPressedChange={(pressed) =>
                            handleSuppliesChange(
                              pressed,
                              animal,
                              service,
                              index
                            )
                          }
                          disabled={!isSwitchOnSupplies || viewMode}
                          variant="outline"
                          className="flex data-[state=on]:bg-suppliesOrange1 data-[state=on]:hover:bg-suppliesOrange5 data-[state=on]:text-white hover:text-suppliesOrange1 bg-gray-300"
                        >
                          <p className="capitalize text-xs font-semibold">{`${keyToNormalCase} `}</p>
                        </Toggle>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
