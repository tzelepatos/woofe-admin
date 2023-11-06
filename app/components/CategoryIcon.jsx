import React from "react";
import { Icons } from "@/components/ui/icons";
const CategoryIcon = ({ selectedCategory }) => {
  let iconComponent = null;

  switch (selectedCategory) {
    case "Grooming":
      return (iconComponent = <Icons.grooming className="ml-2 " />);

    case "Services":
      return (iconComponent = <Icons.services className="ml-2 " />);

    case "Supplies":
      return (iconComponent = <Icons.supplies className="ml-2 " />);

    default:
      // Handle default case
      return null;
  }
};

export default CategoryIcon;
