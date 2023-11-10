"use client";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import React from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 1 && params.set("query", e.target.value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="relative rounded-2xl shadow-sm sm:max-w-xs max-w-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {" "}
        <Icons.search
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />{" "}
      </div>

      <Input
        placeholder="Search"
        onChange={handleSearch}
        className="block w-full  border py-1.5 pl-10 bg-background text-foreground"
      />
    </div>
  );
};

export default SearchBar;
