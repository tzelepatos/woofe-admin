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

import { useRouter } from "next/navigation";
const PaginationNav = ({ totalPages, page, postPerPage, totalPosts, type }) => {
  const router = useRouter();


  const handleSelectChange = (value) => {
    router.push(`/${type}?page=${page}&postPerPage=${value}`);
  };
  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="lg:text-sm  text-xs font-medium ">
        {totalPosts} {type}
      </div>
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium lg:flex hidden">Rows per page</p>
        <Select value={postPerPage} onValueChange={handleSelectChange}>
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 15, 20, 30].map((postPerPage) => (
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
        <Link
          href={{
            pathname: `/${type}`,
            query: {
              page: 1,
              postPerPage: postPerPage,
            },
          }}
        >
          <Button
            disabled={page == 1}
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>
        </Link>
        {/* back */}
        <Link
          href={{
            pathname: `/${type}`,
            query: {
              page: page > 1 ? page - 1 : 1,
              postPerPage: postPerPage,
            },
          }}
        >
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={page == 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </Link>
        {/* next */}

        <Link
          href={{
            pathname: `/${type}`,
            query: {
              page: parseInt(page) === totalPages ? page : parseInt(page) + 1,
              postPerPage: parseInt(postPerPage),
            },
          }}
        >
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            disabled={page == totalPages}
          >
            <ChevronRightIcon className="h-4 w-4" />{" "}
            <span className="sr-only">Go to next page</span>
          </Button>
        </Link>

        {/* last */}
        <Link
          href={{
            pathname: `/${type}`,
            query: {
              page: totalPages,
              postPerPage: postPerPage,
            },
          }}
        >
          <Button
            disabled={page == totalPages}
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PaginationNav;
