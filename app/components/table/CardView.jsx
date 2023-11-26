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
  userEmail,
}) {
  // console.log("product", product);
  //categorySelector
  let categoryColorClass = "";

  // if (product.services.grooming === "Grooming") {
  //   categoryColorClass = "text-groomingPink"; // Apply grooming color
  // } else if (product.category === "Services") {
  //   categoryColorClass = "text-groomingGreen"; // Apply services color
  // } else if (product.category === "Supplies") {
  //   categoryColorClass = "text-jimOrange"; // Apply supplies color
  // }

  return (
    <div className="relative max-w-md   bg-jimGrayLight container border border-accent rounded-2xl shadow-md hover:border-jimGray hover:shadow-lg">
      <p className=" absolute left-2 top-1 h-5 w-5 italic font-bold text-xs ">
        #{startIndex + index + 1}
      </p>
      {/* <div className="flex justify-around items-center pt-6 pb-6 gap-4 flex-col sm:flex-row"> */}
      <div className=" flex items-center  gap-4 flex-col  h-full justify-between py-[32px]">
        {/* slider */}
        <div className=" w-full ">
          <Slider products={product.images} />
        </div>
        {/* info */}
        <div className="text-xs sm:text-base flex flex-col  w-full   space-y-2 h-full justify-between">
          <div className="">
            <Link href={"/products/view/" + product._id}>
              <h1 className="font-bold   ">{product.productName}</h1>
            </Link>
          </div>

          <div className="h-full ">
            <div className="gap-2 space-y-4">
              {Object.values(product.services).some(
                (serviceArray) => serviceArray.length > 0
              ) ? (
                Object.keys(product.services).map((serviceType) => (
                  <div key={serviceType} className="">
                    <div className="capitalize font-semibold flex ">
                      {product.services[serviceType].length > 0 && (
                        <>
                          {serviceType}
                          <CategoryIcon
                            selectedCategory={serviceType}
                            className={"w-6 h-6"}
                          />
                        </>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1" key={serviceType}>
                      {/* This is the label */}
                      {product.services[serviceType].map((service, index) => (
                        <div key={index}>
                          <Badge className="text-white" variant={service}>
                            {service}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p className="italic    text-slate-500">
                  "You have no services. Go to edit and add some"
                </p>
              )}
            </div>
          </div>
          <div className="border-t-2 border-jimGray pt-2 space-y-2">
            <p className="text-xs ">
              Created: {"  "}
              {product.createdAt.slice(0, 10)}
              {" - "}
              {product.createdAt.slice(11, 19)}
            </p>
            <p className="text-xs  ">By: {userEmail[index]}</p>
            {/* price-buttons */}
            <div className="flex justify-between  items-end  ">
              {/* if there is newPrice h1 newprice */}
              <div className="font-bold text-2xl items-end flex  ">
                {product.newPrice > 0 ? (
                  <>
                    <span
                      className="mr-2 items-end"
                      style={{ fontSize: "1.2em" }}
                    >
                      {product.newPrice}€
                    </span>
                    <span
                      className="relative inline-block"
                      style={{ color: "red", fontSize: "0.8em" }}
                    >
                      {product.price}€
                      <span
                        style={{
                          position: "absolute",
                          height: "1px",
                          width: "100%",
                          backgroundColor: "red",
                          transform: "rotate(-10deg)",
                          top: "50%",
                          left: "0",
                        }}
                      ></span>
                    </span>
                  </>
                ) : (
                  <div className=" font-bold text-3xl">{product.price}€</div>
                )}
              </div>
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
