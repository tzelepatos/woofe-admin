import React from "react";

const SubcategoryComponent = ({ selectedCategory }) => {
  const getSubcategories = () => {
    if (selectedCategory === "grooming") {
      return ["Store"];
    } else if (selectedCategory === "services") {
      return ["Doctor", "Hotel", "Training", "PetSitting"];
    } else {
      return [];
    }
  };

  const subcategories = getSubcategories();

  return (
    <select
      id="subcategory"
      name="subcategory"
      className="w-1/2 p-1  mb-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:orange-orange-500 focus:ring-orange-500 block  rounded-md sm:text-sm focus:ring-1"
      disabled={selectedCategory === ""}
    >
      {selectedCategory !== "" ? (
        subcategories.map((subcategory, index) => (
          <option key={index} value={subcategory}>
            {subcategory}
          </option>
        ))
      ) : (
        <option value="">Choose a category first</option>
      )}
    </select>
  );
};

export default SubcategoryComponent;
