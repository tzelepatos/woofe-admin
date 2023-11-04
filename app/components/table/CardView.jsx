import * as React from "react";
import Link from "next/link";
//components
import Slider from "@/app/components/Slider";
import { Icons } from "@/components/ui/icons";
import { serviceColorMap } from "@/app/components/form/ServicesTags";
//shadcn
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AlertAction from "@/app/components/AlertAction";

export default function CardView({
  product,
  index,
  startIndex,
  deleteProduct,
}) {
  //categorySelector
  let categoryIcon = "";
  let categoryColorClass = "";

  if (product.category === "Grooming") {
    categoryIcon = <Icons.grooming />;
    categoryColorClass = "text-groomingPink"; // Apply grooming color
  } else if (product.category === "Services") {
    categoryIcon = <Icons.services />;
    categoryColorClass = "text-groomingGreen"; // Apply services color
  } else if (product.category === "Supplies") {
    categoryIcon = <Icons.supplies />;
    categoryColorClass = "text-jimOrange"; // Apply supplies color
  }

  return (
    <div className=" relative sm:max-w-xl w-full   bg-jimGrayLight container border border-accent rounded-2xl shadow-md hover:border-jimGray hover:shadow-lg">
      <p className=" absolute left-2 top-1 h-5 w-5 italic font-bold text-xs ">
        #{startIndex + index + 1}
      </p>
      <div className="flex justify-around items-center pt-6 pb-6 gap-4 flex-col sm:flex-row">
        {/* slider */}
        <div className="">
          <Slider products={product.images} />
        </div>
        {/* info */}
        <div className="text-xs sm:text-base flex flex-col  w-full  truncate ">
          <div className="space-y-2 truncate ">
            <div className="flex justify-between  ">
              <h1 className={`font-bold ${categoryColorClass}`}>
                {product.category}
              </h1>
              {categoryIcon}
            </div>
            <h1 className="font-bold   ">{product.productName}</h1>
            {/* <div>Description</div> */}
            <div className="flex flex-wrap gap-1">
              {product.services.map((service, index) => (
                <Badge key={index} variant={service}>
                  {service}
                </Badge>
              ))}
            </div>
            <div>
              Created: {"  "}
              {product.createdAt.slice(0, 10)}
              {" - "}
              {product.createdAt.slice(11, 19)}
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold">{product.price}€</h1>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
