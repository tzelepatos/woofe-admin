//components
import { TableProduct } from "app/components/TableProduct";
//imports
import axios from "axios";
import { redirect } from "next/navigation";

//for dev only
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});
async function fetchProducts(page, postPerPage) {
  try {
    const response = await axiosInstance.get(`/api/product`, {
      params: {
        page: page,
        postPerPage: postPerPage,
      },
    });
    // console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

export default async function Products({ searchParams }) {
  const page = searchParams.page || 1;
  const postPerPage = searchParams.postPerPage || 10;

  const { posts, totalPages, totalPosts } = await fetchProducts(
    page,
    postPerPage
  );

  if (page === 1) {
    redirect(`/products?page=1&postPerPage=${postPerPage}`);
  }
  return (
    <main>
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
