import axios from "axios";

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
