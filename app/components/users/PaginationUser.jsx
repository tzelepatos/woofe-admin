"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationUser = ({ count, page, postPerPage }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const totalPages = Math.ceil(count / postPerPage);

  const params = new URLSearchParams(searchParams);

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  const handleSelectChange = (value) => {
    params.set("postPerPage", value);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="lg:text-sm  text-xs font-medium ">{count} users</div>
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium lg:flex hidden">Rows per page</p>
        <Select value={postPerPage} onValueChange={handleSelectChange}>
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 15, 20, 30].map((postPerPage) => (
              <SelectItem key={postPerPage} value={`${postPerPage}`}>
                {postPerPage}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex pr-2 items-center justify-center lg:text-sm  text-xs font-medium">
          Page {page} of {totalPages}
        </div>

        {/* first */}

        <Button
          disabled={page == 1}
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => {
            params.set("page", 1);
            replace(`${pathname}?${params}`);
          }}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>

        {/* back */}

        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={page == 1}
          onClick={() => handleChangePage("prev")}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>

        {/* next */}

        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={page == totalPages}
          onClick={() => handleChangePage("next")}
        >
          <ChevronRightIcon className="h-4 w-4" />{" "}
          <span className="sr-only">Go to next page</span>
        </Button>

        {/* last */}

        <Button
          disabled={page == totalPages}
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => {
            params.set("page", totalPages);
            replace(`${pathname}?${params}`);
          }}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PaginationUser;
