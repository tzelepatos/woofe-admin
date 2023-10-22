"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";

//components
import {
  showDeletedFailToast,
  showDeletedSuccesfullToast,
} from "@/app/components/Toasters";
import { Icons } from "@/components/ui/icons";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AlertAction from "@/app/components/AlertAction";

export const TableProduct = ({ params }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const postPerPage = 6; // Number of records per page
  const [totalProducts, setTotalProducts] = useState(0); // Added state for total products
  // Fetch the products from the backend with pagination

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await axios.get("/api/product");
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  const fetchPage = async (page) => {
    try {
      const response = await axios.get(
        `/api/product?page=${page}&perPage=${postPerPage}`,
        {
          params: {
            page: page,
            perPage: postPerPage,
          },
        }
      );

      if (response.data.posts) {
        setProducts(response.data.posts);
      } else {
        setProducts(response.data);
      }
      setTotalPages(response.data.totalPages);
      setTotalProducts(response.data.totalPosts); // Update total products
      console.log("total pages", response.data.totalPages);
      console.log("total posts", response.data.totalPosts);
      setCurrentPage(page); // Update the current page
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage]);

  //delete
  async function deleteProduct(productId) {
    try {
      // Fetch the product details, including image links
      const response = await axios.get(`/api/product?id=${productId}`);
      const product = response.data.find((item) => item._id === productId);
      console.log("product:", product.productName);

      // Delete the product from the backend
      await axios.delete(`/api/product`, { data: { _id: productId } });

      // Delete each image associated with the product from S3
      for (const imageLink of product.images) {
        await axios.delete("/api/deleteImage", { data: { link: imageLink } });
      }
      showDeletedSuccesfullToast(product);
      console.log("Product and images deleted successfully");

      // Update the products state to remove the deleted product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      showDeletedFailToast(error);
      console.error("Error deleting product:", error);
      if (error.response) {
        showDeletedFailToast(error);
        console.log("Response Data:", error.response.data);
      }
    }
  }
  const nextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      fetchPage(nextPage);
    }
  };

  const prevPage = () => {
    const prevPage = currentPage - 1;
    fetchPage(prevPage);
  };
  return (
    <>
      <Link href={"/products/newproduct"}>
        <Button
          className="mb-5"
          variant="signIn"
          size="addNewProduct"
          type="button"
        >
          <Icons.add className="mr-2 h- w-6" />
          Add New Product
        </Button>
      </Link>
      <Table className="overflow-auto justify-end">
        <TableCaption>A list of your recent products.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Product name</TableHead>
            <TableHead className=" text-center ">Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className=" text-center ">Images</TableHead>
            <TableHead className=" text-center ">Services</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell>
                <Link href={"/products/view/" + product._id}>
                  {product.productName}
                </Link>
              </TableCell>

              <TableCell className="text-center ">€{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell className=" text-center ">
                {product.images.length}
              </TableCell>
              <TableCell className=" text-center ">
                <span title={product.services.join(", ")}>
                  ({product.services.length})
                </span>
              </TableCell>
              <TableCell className="flex justify-end ">
                <div className="flex space-x-2">
                  <Link href={"/products/edit/" + product._id}>
                    <Button
                      className=""
                      variant="logIn"
                      size="icon2"
                      type="button"
                    >
                      <Icons.edit className=" h-4 w-4" />
                      {/* Edit */}
                    </Button>
                  </Link>
                  {/* <Link href={"/products/delete/" + product._id}>
                        <Button
                          className=""
                          variant="logIn"
                          size="sm"
                          type="button"
                        >
                          <Icons.delete className="mr-2 h-4 w-4 text-red-600 fill-background" />
                          Delete
                        </Button>
                      </Link> */}
                  <AlertAction
                    actionType="delete"
                    productId={product._id}
                    deleteProduct={deleteProduct}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <div className="mr-2">{totalProducts} products</div>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          <Link
            href={`/product?page=${currentPage - 1}&perPage=${postPerPage}`}
          >
            Next Page
          </Link>
        </Button>
        <div>
          {currentPage}/{totalPages}
        </div>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          <Link
            href={`/product?page=${currentPage + 1}&perPage=${postPerPage}`}
          >
            Next Page
          </Link>
        </Button>
      </div>
    </>
  );
};
