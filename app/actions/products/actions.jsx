import axios from "axios";
import { GroomingModel } from "@/app/models/Product";
//gromming
import { groomingDogHaircutSchema } from "@/app/models/grooming/dog/groomingDogHaircutSchema";
import { groomingDogBathSchema } from "@/app/models/grooming/dog/groomingDogBathSchema";
import { groomingDogBrushingSchema } from "@/app/models/grooming/dog/groomingDogBrushingSchema";
import { groomingDogNailSchema } from "@/app/models/grooming/dog/groomingDogNailSchema";
import { groomingCatHaircutSchema } from "@/app/models/grooming/cat/groomingCatHaircutSchema";
import { groomingCatBathSchema } from "@/app/models/grooming/cat/groomingCatBathSchema";
import { groomingCatBrushingSchema } from "@/app/models/grooming/cat/groomingCatBrushingSchema";
import { groomingCatNailSchema } from "@/app/models/grooming/cat/groomingCatNailSchema";
import { groomingVariousHaircutSchema } from "@/app/models/grooming/various/groomingVariousHaircutSchema";
import { groomingVariousBathSchema } from "@/app/models/grooming/various/groomingVariousBathSchema";
import { groomingVariousBrushingSchema } from "@/app/models/grooming/various/groomingVariousBrushingSchema";
import { groomingVariousNailSchema } from "@/app/models/grooming/various/groomingVariousNailSchema";
//services
import { servicesBirdSchema } from "@/app/models/services/servicesBirdSchema";
import { servicesCatSchema } from "@/app/models/services/servicesCatSchema";
import { servicesDogSchema } from "@/app/models/services/servicesDogSchema";
import { servicesFishSchema } from "@/app/models/services/servicesFishSchema";
import { servicesHorseSchema } from "@/app/models/services/servicesHorseSchema";
import { servicesReptileSchema } from "@/app/models/services/servicesReptileSchema";
import { servicesSmallAnimalSchema } from "@/app/models/services/servicesSmallAnimalSchema";
import { servicesExoticSchema } from "@/app/models/services/servicesExoticSchema";
import { servicesFarmAnimalSchema } from "@/app/models/services/servicesFarmAnimalSchema";
import { servicesInsectSchema } from "@/app/models/services/servicesInsectSchema";
//supplies
import { supplyBirdSchema } from "@/app/models/supplies/supplyBirdSchema";
import { supplyCatSchema } from "@/app/models/supplies/supplyCatSchema";
import { supplyDogSchema } from "@/app/models/supplies/supplyDogSchema";
import { supplyFishSchema } from "@/app/models/supplies/supplyFishSchema";
import { supplyHorseSchema } from "@/app/models/supplies/supplyHorseSchema";
import { supplyReptileSchema } from "@/app/models/supplies/supplyReptileSchema";
import { supplySmallAnimalSchema } from "@/app/models/supplies/supplySmallAnimalSchema";
import { supplyExoticSchema } from "@/app/models/supplies/supplyExoticSchema";
import { supplyFarmAnimalSchema } from "@/app/models/supplies/supplyFarmAnimalSchema";
import { supplyInsectSchema } from "@/app/models/supplies/supplyInsectSchema";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export async function fetchProducts(page, postPerPage, query) {
  try {
    const response = await axiosInstance.get(`/api/product`, {
      params: {
        page: page,
        postPerPage: postPerPage,
        query: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export function calculateProductStats(products) {
  // Get the date for one month ago
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // Filter products created in the last month
  const productsCreatedLastMonth = products.filter(
    (product) => new Date(product.createdAt) >= oneMonthAgo
  );

  // Calculate the percentage
  let percentageCreatedLastMonth = 0;
  if (products.length > 0) {
    percentageCreatedLastMonth =
      (productsCreatedLastMonth.length / products.length) * 100;
  }

  return percentageCreatedLastMonth;
}
export function countProductTypes(products) {
  // Filter products that have non-empty grooming array
  const groomingProducts = products.filter(
    (product) =>
      product.services &&
      product.services.grooming &&
      product.services.grooming.length > 0
  );

  // Filter products that have non-empty services array
  const serviceProducts = products.filter(
    (product) =>
      product.services &&
      product.services.services &&
      product.services.services.length > 0
  );

  // Filter products that have non-empty supplies array
  const supplyProducts = products.filter(
    (product) =>
      product.services &&
      product.services.supplies &&
      product.services.supplies.length > 0
  );
  // Filter products that have no services at all
  const noServiceProducts = products.filter(
    (product) =>
      !product.services ||
      ((!product.services.grooming || product.services.grooming.length === 0) &&
        (!product.services.services ||
          product.services.services.length === 0) &&
        (!product.services.supplies || product.services.supplies.length === 0))
  );

  return {
    groomingCount: groomingProducts.length,
    serviceCount: serviceProducts.length,
    supplyCount: supplyProducts.length,
    noServiceCount: noServiceProducts.length,
  };
}

export const fetchAllCategories = async () => {
  try {
    const products = await GroomingModel.find()
      .populate("categories.grooming.dog")
      .populate("categories.grooming.cat")
      .populate("categories.grooming.various")
      .exec();

    const categories = products.map((product) => product.categories);

    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
