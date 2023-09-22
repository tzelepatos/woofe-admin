import React, { useState } from "react";

const InputFormComponent = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    onSelectCategory(selectedValue);
  };

  return (
    <div>
      <span className=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        Select Category
      </span>
      <select
        id="category"
        name="category"
        onChange={handleCategoryChange}
        className="border rounded-md p-1"
      >
        <option value="">Select</option>
        <option value="grooming">Grooming</option>
        <option value="services">Services</option>
        <option value="supplies">Supplies</option>
      </select>
    </div>
  );
};

export default InputFormComponent;
