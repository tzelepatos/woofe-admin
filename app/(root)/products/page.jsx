"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
//components
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Products() {
  const [products, setProducts] = useState([]);

  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/log-in?callbackUrl=/products");
  //   },
  // });

  //fetch data from newProduct
  useEffect(() => {
    axios.get("/api/product").then((response) => {
      // console.log(response.data); // Log the data retrieved from the API
      setProducts(response.data);
    });
  }, []);
  return (
    <>
      {/* <AddProductsButton /> */}
      <Link href={"/products/newproduct"}>
        <Button className="mb-5" variant="signIn" size="lg" type="button">
          <Icons.add className="mr-2 h- w-6" />
          Add New Product
        </Button>
      </Link>

      <Table>
        <TableCaption>A list of your recent products.</TableCaption>
        <TableHeader>
          <TableRow className="w-[100px]">
            <TableHead>Product name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
            {/* <TableHead className="text-right">buttons</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">
                <Link href={"/products/view/" + product._id}>
                  {product.productName}
                </Link>
              </TableCell>{" "}
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-right">
                <div className="container flex flex-col">
                  <Link href={"/products/edit/" + product._id}>
                    <Button
                      className="mb-5"
                      variant="logIn"
                      size="create"
                      type="button"
                    >
                      <Icons.edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Link href={"/products/delete/" + product._id}>
                    <Button
                      className="mb-5"
                      variant="logIn"
                      size="create"
                      type="button"
                      icon=""
                    >
                      <Icons.delete className="mr-2 h-4 w-4 text-red-600 fill-background" />
                      Delete
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
