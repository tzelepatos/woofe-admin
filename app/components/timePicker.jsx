{
  /* //openingHours */
}
<div className="max-w-4xl space-y-5 container     text-background bg-jimGrayLight  border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
  <h1 className="flex items-center justify-center sm:justify-start text-foreground text-sm xl:text-2xl">
    Opening&nbsp;
    <strong>Hours</strong>
    <Icons.time className="ml-2 h-5 w-5" />
  </h1>

  <FormField
    disabled={viewMode}
    control={form.control}
    name="openingHours"
    render={({ field }) => (
      <FormItem>
        {/* <FormDescription>
Add opening & closing hours to your product.
</FormDescription> */}

        {daysOfWeek.map((day, index) => (
          <div key={index} className="grid grid-cols-7 grid-flow-row gap-4">
            <div className="col-span-2 ">
              <div className=" flex-col font-bold text-jimOrange">
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  Day
                </FormDescription>
                <div className="justify-between flex">
                  {day}

                  <Switch id="airplane-mode" />
                </div>
              </div>
            </div>

            {/* 2 col */}
            <div className="col-span-2 flex gap-4 ">
              <div className="flex-col ">
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  From
                </FormDescription>
                <Input
                  type="time"
                  step="3600"
                  {...field[`openingClosingHours[${index}].openingTimeLate`]}
                  name={`openingClosingHours[${index}].openingTimeLate`}
                  className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                />
              </div>

              <div className="flex-col">
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  To
                </FormDescription>
                <Input
                  type="time"
                  step="3600"
                  {...field[`openingClosingHours[${index}].closingTimeLate`]}
                  name={`openingClosingHours[${index}].closingTimeLate`}
                  className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                />
              </div>
            </div>
            {/* 3 col */}
            <div className=" col-span-1 flex gap-4 justify-center text-foreground  text-xl">
              <FormDescription>__</FormDescription>
            </div>
            {/* 4 col */}
            <div className="col-span-2 flex gap-4 ">
              <div className="flex-col">
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  From
                </FormDescription>
                <Input
                  type="time"
                  step="3600"
                  {...field[`openingClosingHours[${index}].openingTimeLate`]}
                  name={`openingClosingHours[${index}].openingTimeLate`}
                  className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                />
              </div>
              <div className="flex-col">
                <FormDescription className={cn(index !== 0 && "sr-only")}>
                  To
                </FormDescription>
                <Input
                  type="time"
                  step="3600"
                  {...field[`openingClosingHours[${index}].closingTimeLate`]}
                  name={`openingClosingHours[${index}].closingTimeLate`}
                  className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                />
              </div>
            </div>
          </div>
        ))}
        <FormMessage />
      </FormItem>
    )}
  />
</div>;

{
  /* //openingHours */
}
<div className=" flex self-start">
  <div className=" space-y-5 container text-background bg-jimGrayLight  border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
    <h1 className="flex items-center justify-center sm:justify-start text-foreground text-sm xl:text-2xl">
      Opening&nbsp;
      <strong>Hours</strong>
      <Icons.time className="ml-2 h-5 w-5" />
    </h1>
    <FormDescription className="flex items-center justify-center sm:justify-start  text-sm  ">
      Choose from opening & closing hours to your product.
    </FormDescription>

    <FormField
      disabled={viewMode}
      control={form.control}
      name="openingHours"
      render={({ field }) => (
        <FormItem>
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className=" md:flex-nowrap flex-wrap  gap-4 justify-center md:justify-between"
            >
              {/* day-button */}

              <div className=" flex gap-2 pt-2 font-bold text-jimOrange justify-center">
                <Switch id="airplane-mode" /> {day}
              </div>

              {/* first*/}
              <div className=" flex flex-wrap md:flex-nowrap gap-6 justify-center md:justify-between ">
                <div className="flex  gap-1 text-foreground ">
                  <Input
                    type="time"
                    {...field[`openingClosingHours[${index}].openingTimeLate`]}
                    name={`openingClosingHours[${index}].openingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-26 bg-background "
                  />
                  <Input
                    type="time"
                    {...field[`openingClosingHours[${index}].closingTimeLate`]}
                    name={`openingClosingHours[${index}].closingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-26  "
                  />
                </div>

                {/* second */}

                <div className="flex gap-1 text-foreground">
                  <Input
                    type="time"
                    {...field[`openingClosingHours[${index}].openingTimeLate`]}
                    name={`openingClosingHours[${index}].openingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-26 "
                  />
                  <Input
                    type="time"
                    {...field[`openingClosingHours[${index}].closingTimeLate`]}
                    name={`openingClosingHours[${index}].closingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-26 "
                  />
                </div>
              </div>
            </div>
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  </div>
</div>;
{
  /* openingHours 2 */
}
<div className="  max-w-4xl space-y-5 container     text-background bg-jimGrayLight  border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
  <h1 className="flex items-center justify-center sm:justify-start text-foreground text-sm xl:text-2xl">
    Opening&nbsp;
    <strong>Hours</strong>
    <Icons.time className="ml-2 h-5 w-5" />
  </h1>

  <FormField
    disabled={viewMode}
    control={form.control}
    name="openingHours"
    render={({ field }) => (
      <FormItem>
        {/* <FormDescription>
Add opening & closing hours to your product.
</FormDescription> */}

        {daysOfWeek.map((day, index) => (
          <div key={index} className="grid grid-cols-7  gap-4">
            <div className="col-span-2 ">
              <div className=" flex-col font-bold text-jimOrange">
                <div className="justify-between flex">
                  {day}

                  <Switch id="airplane-mode" />
                </div>
              </div>
            </div>

            {/* 2 col */}
            <div className="col-span-2 flex container bg-background">
              <div className="col-span-2 flex gap-4 bg-background">
                <div className="flex-col ">
                  <Input
                    type="time"
                    step="3600"
                    {...field[`openingClosingHours[${index}].openingTimeLate`]}
                    name={`openingClosingHours[${index}].openingTimeLate`}
                    className=" rounded-md px-2 py-1 w-24 bg-background"
                  />
                </div>

                <div className="flex-col ">
                  <Input
                    type="time"
                    step="3600"
                    {...field[`openingClosingHours[${index}].closingTimeLate`]}
                    name={`openingClosingHours[${index}].closingTimeLate`}
                    className=" rounded-md px-2 py-1 w-24 bg-background"
                  />
                </div>
              </div>
              {/* 3 col */}
              <div className=" col-span-1 flex  justify-center text-foreground  text-xl bg-background">
                <FormDescription>__</FormDescription>
              </div>
              {/* 4 col */}
              <div className="col-span-2 flex gap-4 bg-background">
                <div className="flex-col">
                  <Input
                    type="time"
                    step="3600"
                    {...field[`openingClosingHours[${index}].openingTimeLate`]}
                    name={`openingClosingHours[${index}].openingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                  />
                </div>
                <div className="flex-col">
                  <Input
                    type="time"
                    step="3600"
                    {...field[`openingClosingHours[${index}].closingTimeLate`]}
                    name={`openingClosingHours[${index}].closingTimeLate`}
                    className="border border-accent rounded-md px-2 py-1 w-24 bg-background"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <FormMessage />
      </FormItem>
    )}
  />
</div>;
