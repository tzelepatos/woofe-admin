"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar({ searchParams }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {searchParams._id}</p>
      <p>Title: {searchParams.title}</p>
      <p>Description: {searchParams.description}</p>
    </div>
  );
}
