//components
import { TableProduct } from "app/components/table/TableProduct";
import SearchBar from "@/app/components/SearchBar";
//imports
import axios from "axios";
import { redirect } from "next/navigation";

//for dev only
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
async function fetchProducts(page, postPerPage, query) {
  try {
    const response = await axiosInstance.get(`/api/product`, {
      params: {
        page: page,
        postPerPage: postPerPage,
        query: query,
      },
    });
    // console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export default async function Products({ searchParams }) {
  const query = searchParams?.query || "";
  const page = searchParams.page || 1;
  const postPerPage = searchParams.postPerPage || 10;

  const { posts, totalPages, totalPosts } = await fetchProducts(
    page,
    postPerPage,
    query
  );
  // If the search query is provided and the page is 1, update the URL
  if (query && page === 1) {
    redirect(
      `/products?page=${page}&postPerPage=${postPerPage}&query=${query}`
    );
  }
  if (page === 1) {
    redirect(`/products?page=${page}&postPerPage=${postPerPage}`);
  }
  return (
    <main>
      {/* <SearchBar /> */}
      <TableProduct
        products={posts}
        totalPages={totalPages}
        totalPosts={totalPosts}
        page={page}
        postPerPage={postPerPage}
      />
    </main>
  );
}
