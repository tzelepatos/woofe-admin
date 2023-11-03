import * as React from "react";
import Link from "next/link";
//components
import Slider from "@/app/components/Slider";
import { Icons } from "@/components/ui/icons";
//shadcn
import { Button } from "@/components/ui/button";
import AlertAction from "@/app/components/AlertAction";

export default function CardDemo(products, product) {
  const firstImage = products.product[0].images;

  async function deleteProduct(productId) {}

  return (
    <div className="relative sm:max-w-xl w-full     bg-jimGrayLight container border border-accent rounded-2xl  hover:border-jimGray hover:shadow-lg">
      <p className=" absolute left-2 top-1 h-5 w-5 italic font-bold text-xs ">
        #122
      </p>
      <div className="flex justify-around items-center pt-6 pb-6 gap-4 flex-col sm:flex-row">
        {/* slider */}
        <div className="">
          <Slider product={firstImage} />
        </div>
        {/* info */}
        <div className="text-xs sm:text-base flex flex-col  w-full  ">
          <div className="space-y-2 ">
            <div className="flex justify-between  ">
              <h1 className="font-bold text-groomingGreen">Grooming</h1>
              <Icons.services />
            </div>
            <h1 className="font-bold">Product Name</h1>
            <div>Description</div>
            <div>Services</div>
            <div>Info</div>
            <div className="flex justify-between">
              15€
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
