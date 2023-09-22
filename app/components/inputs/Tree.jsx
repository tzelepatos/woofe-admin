import React, { useState } from "react";

const TreeNode = ({ id, text, children, onAddChild }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddChild = () => {
    onAddChild(id);
  };

  return (
    <div className="p-4">
      <div className="border rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{text}</h3>
          <div className="flex space-x-2">
            {" "}
            {/* Wrap buttons in a flex container */}
            <button
              className="px-2 py-1 bg-orange-400 text-white rounded hover:bg-orange-600 text-xs"
              onClick={toggleExpand}
            >
              {isExpanded ? "-" : "+"}
            </button>
            <button
              className="px-2 py-1 bg-gray-400 text-white rounded hover:bg-ray-600 text-xs"
              onClick={handleAddChild}
            >
              Add
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="mt-4 space-y-2">
            {children &&
              children.map((child) => (
                <TreeNode {...child} key={child.id} onAddChild={onAddChild} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Tree = () => {
  const handleAddChild = (parentId) => {
    // Implement logic to add a new child node to the parent node
    // and update the tree data accordingly
    // For example, you can use setState to update the treeData
  };

  const treeData = [
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
    <div className="space-y-4">
      {treeData.map((node) => (
        <TreeNode {...node} key={node.id} onAddChild={handleAddChild} />
      ))}
    </div>
  );
};

export default Tree;
