"use client";

//components
import InputListCategory from "@/app/components/InputListCategory";
import InputCategory from "@/app/components/inputs/InputCategory";
import Tree from "@/app/components/inputs/Tree";

export default async function Categories() {
  const myTreeData = [
    {
      id: 0,
      text: "Woffe",
      children: [
        {
          id: 1,
          text: "Grooming",
          children: [
            {
              id: 1.1,
              text: "Store",
              children: [],
            },
          ],
        },
        {
          id: 2,
          text: "Services",
          children: [
            {
              id: 2.1,
              text: "Doctor",
              children: [],
            },
            {
              id: 2.2,
              text: "Hotel",
              children: [],
            },
            {
              id: 2.3,
              text: "Training",
              children: [],
            },
            {
              id: 2.4,
              text: "PetSitting",
              children: [],
            },
          ],
        },
        {
          id: 3,
          text: "Supplies",
          children: [],
        },
      ],
    },
  ];

  return (
    <>
      <h1>Categories</h1>
      <InputCategory />
      <InputListCategory />
      <Tree />
    </>
  );
}
