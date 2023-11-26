import { Icons } from "@/components/ui/icons";
import { CloseButtonModal } from "@/app/components/users/CloseButtonModal";
import { Button } from "@/components/ui/button";
import { fetchProductsByUserId } from "@/app/actions/users/fetchUsers";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsByUser({ user }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedProducts = await fetchProductsByUserId(user._id);
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    fetchData();
  }, [user._id]);

  // console.log("ProductsByUser.jsx: products:", products.length);

  return (
    <div>
      <div className="max-w-lg  space-y-6  text-background bg-jimGray container border border-accent rounded-2xl p-4 hover:border-jimGray hover:shadow-lg">
        <div className="flex-col  flex  justify-between ">
          <h1 className="flex items-center justify-start text-foreground text-xl xl:text-2xl">
            Products by&nbsp;
            <strong>{""} User</strong>
            <Icons.product className="ml-2 h-6 w-6 text-jimOrange" />
          </h1>
          <div className="font-bold text-foreground"> {user.email}</div>
        </div>
        <div className="flex flex-col items-start justify-between border-2 bg-background rounded-xl overflow-auto max-h-[300px]">
          {isLoading ? (
            <p className="p-2 text-sm text-foreground flex items-center justify-end">
              Loading&nbsp;
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-jimOrange" />
            </p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className=" w-full text-foreground text-sm p-1 border-b"
              >
                <div className="flex items-center justify-between  p-1 ">
                  <Link href={`/products/view/${product.id}`}>
                    {product.name}
                  </Link>

                  <Link href={`/products/edit/${product.id}`} key={product.id}>
                    <span title="Edit">
                      <Button
                        className=""
                        variant="logIn"
                        size="icon2"
                        type="button"
                      >
                        <Icons.edit className=" h-4 w-4 text-foreground " />
                      </Button>
                    </span>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 text-sm text-foreground italic">
              "No products added yet"
            </div>
          )}
        </div>
        <div className="flex justify-end">
          {" "}
          <CloseButtonModal />
        </div>
      </div>
    </div>
  );
}
