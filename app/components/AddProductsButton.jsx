import Link from "next/link";

import React from "react";

const AddProductsButton = () => {
  return (
    <Link href={"/products/newproduct"}>
      <button className=" gap-2 flex bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>{" "}
        Add New Product
      </button>
    </Link>
  );
};
export default AddProductsButton;
