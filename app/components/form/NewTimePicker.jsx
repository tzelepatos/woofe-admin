"use client";
import { useState } from "react";

//shadcn
import { Switch } from "@/components/ui/switch";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { FormLabel, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NewTimePicker = ({ form, viewMode, ...field }) => {
  // console.log("field", field.value);

  const [openingClosingHours, setOpeningClosingHours] = useState(field.value);

  const handleInputChange = (dayIndex, timeType, value) => {
    const updatedOpeningClosingHours = [...openingClosingHours];
    updatedOpeningClosingHours[dayIndex][timeType] = value;
    setOpeningClosingHours(updatedOpeningClosingHours);
  };

  const handleSwitchChange = (index) => {
    const updatedOpeningClosingHours = [...openingClosingHours];
    updatedOpeningClosingHours[index].openOrClosed =
      !updatedOpeningClosingHours[index].openOrClosed;
    setOpeningClosingHours(updatedOpeningClosingHours);
  };

  // console.log("viewMode", viewMode);

  // const { fields } = useFieldArray({
  //   name: "openingClosingHours",
  //   control: form.control,
  // });

  // console.log("fields", fields);

  return (
    <div className="space-y-5 text-background bg-jimGrayLight container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
      <FormLabel>
        <h1 className="flex items-center justify-start text-foreground text-md xl:text-2xl">
          {viewMode ? (
            <>
              <strong>Opening Hours</strong>
              <Icons.tag className="ml-2 h-5 w-5" />
            </>
          ) : (
            <>
              Add&nbsp;
              <strong>Opening Hours</strong>
              <Icons.tag className="ml-2 h-5 w-5" />
            </>
          )}
        </h1>
        {viewMode ? (
          <>
            <FormDescription className="mb-4">
              Select a day to view your Opening Hours.
            </FormDescription>
          </>
        ) : (
          <>
            <FormDescription className="mb-4">
              Click to select an opening-closing time slot.
            </FormDescription>
          </>
        )}
        <div className="flex flex-wrap gap-2">
          {openingClosingHours.map((dayData, index) => (
            <div key={index}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className={`${
                      !dayData.openOrClosed
                        ? "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90"
                        : "bg-gray-300 " // Change bg-blue-500 to your desired default color
                    } text-background font-bold py-2 px-4 rounded`}
                  >
                    {dayData.day}
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="rounded-2xl bg-background">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4>
                        <div className="flex gap-2 items-center justify-between">
                          {dayData.day}
                          <Switch
                            checked={dayData.openOrClosed}
                            onCheckedChange={() => handleSwitchChange(index)}
                            disabled={viewMode}
                          />
                        </div>
                      </h4>
                      <p
                        className={`text-sm ${
                          dayData.openOrClosed
                            ? "text-muted-foreground"
                            : "text-red-500"
                        }`}
                      >
                        {dayData.openOrClosed ? "Set the Hours." : "Closed"}
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`openingTimeEarly-${index}`}>
                          From
                        </Label>
                        <Input
                          type="time"
                          step="1800"
                          id={`openingTimeEarly-${index}`}
                          className="col-span-2 h-8"
                          disabled={!dayData.openOrClosed || viewMode}
                          defaultValue={dayData.openingTimeEarly}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            handleInputChange(
                              index,
                              "openingTimeEarly",
                              newValue
                            );
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`closingTimeEarly-${index}`}>To</Label>
                        <Input
                          type="time"
                          step="1800"
                          id={`closingTimeEarly-${index}`}
                          className="col-span-2 h-8"
                          disabled={!dayData.openOrClosed || viewMode}
                          defaultValue={dayData.closingTimeEarly}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            handleInputChange(
                              index,
                              "closingTimeEarly",
                              newValue
                            );
                          }}
                        />
                      </div>
                      <h1 className="text-center"></h1>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`openingTimeLate-${index}`}>From</Label>
                        <Input
                          type="time"
                          step="1800"
                          id={`openingTimeEarly-${index}`}
                          className="col-span-2 h-8"
                          disabled={!dayData.openOrClosed || viewMode}
                          defaultValue={dayData.openingTimeLate}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            handleInputChange(
                              index,
                              "openingTimeLate",
                              newValue
                            );
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor={`closingTimeLate-${index}`}>To</Label>
                        <Input
                          type="time"
                          step="1800"
                          id={`closingTimeLate-${index}`}
                          className="col-span-2 h-8"
                          disabled={!dayData.openOrClosed || viewMode}
                          defaultValue={dayData.closingTimeLate}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            handleInputChange(
                              index,
                              "closingTimeLate",
                              newValue
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ))}
        </div>
      </FormLabel>
    </div>
  );
};

export default NewTimePicker;
