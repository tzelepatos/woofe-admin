import * as z from "zod";

export const defaultValues = {
  productName: "Grooming Store-" + Math.random().toString(36).substr(2, 9),

  description: "A Brand new Grooming Store that..",
  category: "Grooming",
  price: "6.00",
  newPrice: "5.00",
  services: [],
  info: "Info about the store..",
  images: [],
  address: ["plataiwn 125"],
  city: "Athens",
  zipCode: "12345",
  email: "xaliamoutra@woofe.com",
  email2: "tsoumelekis@woofe.com",
  phoneNumber: "2105912822",
  mobileNumber: "6940000000",
  website: "www.woofe.com",
  latitude: "37.983810",
  longitude: "23.727539",
  openingClosingHours: [
    {
      day: "Monday",
      openingTimeEarly: "09:00",
      closingTimeEarly: "14:00",
      openingTimeLate: "17:00",
      closingTimeLate: "21:00",
    },
  ],
};

export const ProductFormSchema = z.object({
  productName: z
    .string()
    .trim()
    .min(2, {
      message: "Product must be at least 2 characters.",
    })
    .max(30, {
      message: "Product must not be longer than 30 characters.",
    }),

  category: z.string({
    required_error: "Please select a Category.",
  }),

  description: z
    .string()
    .max(160, {
      message: "Description must not be longer than 160 characters.",
    })
    .min(10, {
      message: "Description must be at least 10 characters.",
    }),

  price: z.coerce
    .number()
    .max(999999, {
      message: "Only a millionaire will pay that much.",
    })
    .min(1, {
      message: "Price must be at least 1€.",
    }),
  newPrice: z.coerce
    .number()
    .max(999999, {
      message: "Only a millionaire will pay that much.",
    })
    .min(1, {
      message: "Price must be at least 1€.",
    }),

  services: z
    .any()

    .optional(),

  images: z.any().optional(),

  address: z

    .string()
    .min(5, { message: "You must add at least 5 characters on address" })
    .max(25, { message: "You can add up to 25 characters on address" }),
  city: z
    .string()
    .trim()
    .min(3, {
      message: "City must be at least 3 characters.",
    })
    .max(20, {
      message: "City must not be longer than 20 characters.",
    }),

  zipCode: z.coerce
    .string()
    .regex(/^\d{1,5}$/, { message: "Zip code must be max 5 digits." })
    .nonempty({ message: "Zip code is required." }),
  //on zod validation check for sublicates
  email: z

    .string()
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase(),
  email2: z

    .string()
    .email({ message: "Please enter a valid email address." })
    .trim()
    .toLowerCase()
    .optional(),
  // .refine(
  //   (emails) => {
  //     // console.log("emails: ", emails);
  //     const uniqueEmails = new Set(emails);
  //     // console.log("uniqueEmails: ", uniqueEmails);
  //     return uniqueEmails.size === emails.length;
  //   },
  //   {
  //     message: "Email addresses must be different.",
  //   }
  // ),
  //on zod validation check for sublicates
  phoneNumber: z

    .string()
    .trim()
    // .min(10, { message: "You must add at least 10 characters on phone" })
    .regex(/^\d{0,10}$/, { message: "phone accepts only numbers ." })
    .length(10, { message: "max length phone number must be 10 digits" })
    .optional(),
  mobileNumber: z

    .string()
    .trim()
    // .min(10, { message: "You must add at least 10 characters on phone" })
    .regex(/^\d{0,10}$/, { message: "phone accepts only numbers ." })
    .length(10, { message: "max length phone number must be 10 digits" })
    .optional(),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "Website must be at least 5 characters." })
    .refine((val) => val.indexOf(".") !== -1, {
      message: "Please enter a valid website address.",
    })
    .optional(),

  latitude: z.coerce
    .number()
    .min(-90, { message: "Latitude must be between -90 and 90." })
    .max(90, { message: "Latitude must be between -90 and 90." }),
  longitude: z.coerce
    .number()
    .min(-180, { message: "Longitude must be between -180 and 180." })
    .max(180, { message: "Longitude must be between -180 and 180." }),

  // openingClosingHours: z.object({
  //   day: z.string().min(1).max(10), // Adjust the max length as needed
  //   openingTimeEarl: z.string().min(1).max(5), // Adjust the max length as needed
  //   closingTimeEarly: z.string().min(1).max(5), // Adjust the max length as needed
  //   openingTimeLate: z.string().min(1).max(5), // Adjust the max length as needed
  //   closingTimeLate: z.string().min(1).max(5), // Adjust the max length as needed
  // }),

  // pattern(/^\d{5}-\d{3}$/),

  // mapCordA: z.number().optional(),

  // mapCordB: z.number().optional(),

  // favourite: z.boolean().optional(),

  // openingHours: z.record(z.string()).optional(),
});
