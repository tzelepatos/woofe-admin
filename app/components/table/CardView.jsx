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
import CategoryIcon from "@/app/components/CategoryIcon";

export default function CardView({
  product,
  index,
  startIndex,
  deleteProduct,
}) {
  //categorySelector
  let categoryColorClass = "";

  if (product.category === "Grooming") {
    categoryColorClass = "text-groomingPink"; // Apply grooming color
  } else if (product.category === "Services") {
    categoryColorClass = "text-groomingGreen"; // Apply services color
  } else if (product.category === "Supplies") {
    categoryColorClass = "text-jimOrange"; // Apply supplies color
  }

  return (
    <div className="relative max-w-md   bg-jimGrayLight container border border-accent rounded-2xl shadow-md hover:border-jimGray hover:shadow-lg">
      <p className=" absolute left-2 top-1 h-5 w-5 italic font-bold text-xs ">
        #{startIndex + index + 1}
      </p>
      {/* <div className="flex justify-around items-center pt-6 pb-6 gap-4 flex-col sm:flex-row"> */}
      <div className="flex items-center pt-6 pb-6 gap-4 flex-col  h-full justify-between">
        {/* slider */}
        <div className="">
          <Slider products={product.images} />
        </div>
        {/* info */}
        <div className="text-xs sm:text-base flex flex-col  w-full   space-y-2 h-full justify-between">
          <div className="">
            <Link href={"/products/view/" + product._id}>
              <div className="flex justify-between  ">
                <h1 className={`font-bold ${categoryColorClass}`}>
                  {product.category}
                </h1>
                <div>
                  <CategoryIcon selectedCategory={product.category} />
                </div>
              </div>
            </Link>
            <h1 className="font-bold   ">{product.productName}</h1>
          </div>
          {/* <div>Description</div> */} <p className="text-xs ">Services:</p>
          <div className="flex flex-wrap gap-1 border-b-2 h-full pb-2 ">
            {product.services.map((service, index) => (
              <div>
                <Badge
                  className="text-background "
                  key={index}
                  variant={service}
                >
                  {service}
                </Badge>
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-xs ">
              Created: {"  "}
              {product.createdAt.slice(0, 10)}
              {" - "}
              {product.createdAt.slice(11, 19)}
            </p>
            {/* price-buttons */}
            <div className="flex justify-between  items-center">
              <h1 className="font-bold text-3xl  ">{product.price}€</h1>
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
