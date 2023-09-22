import React, { useState } from "react";
import SubcategoryComponent from "./SubcategoryComponent ";

const InputListCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        Select Category
      </label>
      <select
        id="category"
        name="category"
        onChange={handleCategoryChange}
        className="w-1/2 p-1  mb-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:orange-orange-500 focus:ring-orange-500 block  rounded-md sm:text-sm focus:ring-1"
      >
        <option value="">Select..</option>
        <option value="grooming">Grooming</option>
        <option value="services">Services</option>
        <option value="supplies">Supplies</option>
      </select>

      <label className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        Select Sub Category
      </label>
      <SubcategoryComponent selectedCategory={selectedCategory} />
    </div>
  );
};

export default InputListCategory;
