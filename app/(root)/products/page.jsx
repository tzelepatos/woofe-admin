//components
import { TableProduct } from "app/components/table/TableProduct";
import { fetchProducts } from "@/app/actions/products/actions";
import {
  fetchUserEmailFromProduct,
  fetchUserProducts,
} from "@/app/actions/users/fetchUsers";

//imports
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { fetchAllCategories } from "@/app/actions/products/actions";

export default async function Products({ searchParams }) {
  const session = await getServerSession(authOptions);
  const userRole = session?.user?.role;
  const userId = session?.user?.id;
  const query = searchParams?.query || "";
  const page = searchParams.page || 1;
  const postPerPage = searchParams.postPerPage || 10;

  //categories
  const categories = await fetchAllCategories();
  console.log("categories", categories);

  let data;
  if (userRole === "admin") {
    data = await fetchProducts(page, postPerPage, query);
  } else {
    data = await fetchUserProducts(userId, page, postPerPage, query);
  }

  // Convert Mongoose document to plain JavaScript object
  data = JSON.parse(JSON.stringify(data));

  const { posts, totalPages, totalPosts } = data;

  let emails = [];
  if (posts) {
    emails = await Promise.all(
      posts.map((post) => {
        if (!post) {
          console.error("Post is undefined or null:", post);
          return;
        }
        return fetchUserEmailFromProduct(post);
      })
    );
  }

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
        emails={emails}
      />
    </main>
  );
}
