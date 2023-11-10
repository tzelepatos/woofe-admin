"use client";

import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
//components
import CardView from "@/app/components/table/CardView";
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
import { TableViewModeContext } from "@/app/context/TableViewModeContext";
import { useTableViewModeContext } from "@/app/context/TableViewModeContext";
import SearchBar from "@/app/components/SearchBar";

export const TableProduct = ({
  products,
  page,
  totalPages,
  totalPosts,
  postPerPage,
}) => {
  const { viewMode, toggleView } =
    useTableViewModeContext(TableViewModeContext);

  const router = useRouter();
  const startIndex = (page - 1) * postPerPage;

  const tableHeaders = [
    "#",
    "Product name",
    "Price",
    "New Price",

    "Images",
    "Services",
    "Created At",
    "Actions",
  ];

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
      <div className="flex justify-between items-center ">
        {/* add new product */}

        <Link href={"/products/newproduct"}>
          <Button variant="signIn" size="addNewProduct" type="button">
            <Icons.add className="mr-2 h- w-6" />
            Add New Product
          </Button>
        </Link>

        {/* viewButtons */}

        <div className="flex space-x-2 p-3 ">
          <span title="List">
            <Button
              className={`${
                viewMode === "list" ? "text-jimOrange " : "bg-background "
              }`}
              variant="logIn"
              size="icon2"
              type="button"
              onClick={() => toggleView("list")}
            >
              <Icons.listView className="h-4 w-4" />
            </Button>
          </span>
          <span title="Cards">
            <Button
              className={`${
                viewMode === "cards" ? "text-jimOrange " : "bg-background "
              }`}
              variant="logIn"
              size="icon2"
              type="button"
              onClick={() => toggleView("cards")}
            >
              <Icons.cardView className="h-4 w-4" />
            </Button>
          </span>
        </div>
      </div>

      {/* paginationControls */}
      <div className="pb-4">
        <PaginationNav
          page={page}
          totalPages={totalPages}
          postPerPage={postPerPage}
          totalPosts={totalPosts}
        />
        <div className="py-2 pr-2">
          <SearchBar />
        </div>
      </div>
      {viewMode === "list" ? (
        <Table className="overflow-auto justify-end">
          {/* <TableCaption></TableCaption> */}
          <TableHeader className="lg:text-sm text-xs">
            <TableRow>
              {tableHeaders.map((header, index) => (
                <TableHead
                  key={index}
                  className={
                    index === 0 ? "font-bold" : "text-center font-bold"
                  }
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
                <TableCell>€{product.newPrice}</TableCell>
                <TableCell>{product.images.length}</TableCell>
                <TableCell>
                  <span className="flex flex-col capitalize">
                    {Object.keys(product.services).map(
                      (serviceType) =>
                        product.services[serviceType].length > 0 && (
                          <span
                            key={serviceType}
                            className="group"
                            title={product.services[serviceType].join(", ")}
                          >
                            {serviceType}
                          </span>
                        )
                    )}
                  </span>
                </TableCell>
                <TableCell>
                  {product.createdAt.slice(0, 10)}
                  {" - "}
                  {product.createdAt.slice(11, 19)}
                </TableCell>

                <TableCell c>
                  <div className="flex space-x-2 justify-center items-center">
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
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8 ">
          {products.map((product, index) => (
            <CardView
              key={product._id}
              product={product}
              index={index}
              startIndex={startIndex}
              deleteProduct={deleteProduct}
            />
          ))}
        </div>
      )}
    </>
  );
};
