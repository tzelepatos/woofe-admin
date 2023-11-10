import React from "react";
import { Icons } from "@/components/ui/icons";

const CategoryIcon = ({ selectedCategory, className }) => {
  let iconComponent = null;

  switch (selectedCategory) {
    case "grooming":
      return (iconComponent = (
        <Icons.grooming className={`ml-2 ${className}`} />
      ));

    case "services":
      return (iconComponent = (
        <Icons.services className={`ml-2 ${className}`} />
      ));

    case "supplies":
      return (iconComponent = (
        <Icons.supplies className={`ml-2 ${className}`} />
      ));

    default:
      // Handle default case
      return null;
  }
};

export default CategoryIcon;
