import React, { useState } from "react";

const useTableViewCustomHook = () => {
  const [viewMode, setViewMode] = useState("");

  const toggleView = (mode) => {
    setViewMode(mode);
  };

  return { viewMode, toggleView };
};

export default useTableViewCustomHook;
