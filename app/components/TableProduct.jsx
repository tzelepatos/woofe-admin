"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
//components
import CardDemo from "@/app/components/form/CardDemo";
import {
  showDeletedFailToast,
  showDeletedSuccesfullToast,
} from "@/app/components/ToastersCustom";
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
import PaginationNav from "@/app/components/PaginationNav";

export const TableProduct = ({
  products,
  page,
  totalPages,
  totalPosts,
  postPerPage,
}) => {
  // console.log("products", products);
  const router = useRouter();
  const startIndex = (page - 1) * postPerPage;

  const tableHeaders = [
    "#",
    "Product name",
    "Price",
    "Category",
    "Images",
    "Services",
    "Created At",
    "Actions",
  ];

  // const createdAtDate = new Date(products.createdAt);
  // const formattedDate =
  //   createdAtDate instanceof Date && !isNaN(createdAtDate)
  //     ? createdAtDate.toLocaleString().split(",")[0].replace(/\//g, "-")
  //     : "";
  // console.log("createdAtDate", createdAtDate);

  // console.log("formattedDates", formattedDate);

  //delete
  async function deleteProduct(productId) {
    try {
      // Fetch the product details, including image links
      const response = await axios.get(`/api/product?id=${productId}`);
      const product = response.data.find((item) => item._id === productId);

      // Check if product has images
      if (product.images && product.images.length > 0) {
        // Delete each image associated with the product from S3
        for (const imageLink of product.images) {
          console.log(`Deleting image ${imageLink}`);
          const response = await axios.delete("/api/deleteImage", {
            data: { link: imageLink },
          });

          console.log(`Image ${imageLink} deleted successfully`);
        }
      }

      // Delete the product from the backend
      const deleteResponse = await axios.delete(`/api/product`, {
        data: { _id: productId },
      });

      if (deleteResponse.status === 200) {
        showDeletedSuccesfullToast(product);
        router.refresh(); //i dont  like it, i must change it
      }

      console.log("Product and images deleted successfully");
    } catch (error) {
      showDeletedFailToast(error);
      router.refresh(); //i dont  like it, i must change it
      console.error("Error deleting product:", error);
      console.error("Error updating form:", error); // Log both errors
      if (error.response) {
        console.log("Response Data:", error.response.data);
      }
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        {/* add new product */}
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
        {/* view */}

        <div className="flex space-x-2 p-3 ">
          <span title="List">
            <Button className="" variant="logIn" size="icon2" type="button">
              <Icons.orders className=" h-4 w-4" />
            </Button>
          </span>
          <span title="Cards">
            <Button className="" variant="logIn" size="icon2" type="button">
              <Icons.categories className=" h-4 w-4" />
            </Button>
          </span>
        </div>
      </div>

      {/* render table */}
      <Table className="overflow-auto justify-end">
        <TableCaption>
          <PaginationNav
            page={page}
            totalPages={totalPages}
            postPerPage={postPerPage}
            totalPosts={totalPosts}
          />
        </TableCaption>

        <TableHeader className="lg:text-sm text-xs">
          <TableRow>
            {tableHeaders.map((header, index) => (
              <TableHead
                key={index}
                className={index === 0 ? "font-bold" : "text-center font-bold"}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="lg:text-sm text-xs">
          {products.map((product, index) => (
            <TableRow key={product._id} className="text-center">
              <TableCell className="text-start">
                {startIndex + index + 1}
              </TableCell>
              <TableCell className="text-center">
                <Link href={"/products/view/" + product._id}>
                  {product.productName}
                </Link>
              </TableCell>

              <TableCell>€{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.images.length}</TableCell>
              <TableCell>
                <span title={product.services.join(", ")}>
                  ({product.services.length})
                </span>
              </TableCell>
              <TableCell>
                {product.createdAt.slice(0, 10)}
                {" - "}
                {product.createdAt.slice(11, 19)}
              </TableCell>

              <TableCell className="flex justify-center ">
                <div className="flex space-x-2">
                  <Link href={"/products/edit/" + product._id}>
                    <span title="Edit">
                      <Button
                        className=""
                        variant="logIn"
                        size="icon2"
                        type="button"
                      >
                        <Icons.edit className=" h-4 w-4" />
                        {/* Edit */}
                      </Button>
                    </span>
                  </Link>

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
      {/* render cardList */}
      <CardDemo product={products} />
    </>
  );
};