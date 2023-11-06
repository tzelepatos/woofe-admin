"use client";
import React, { useContext, createContext, useState } from "react";

export const TableViewModeContext = createContext(null);

export const ViewModeProvider = ({ children }) => {
  const [viewMode, setViewMode] = useState("list");

  const toggleView = (mode) => {
    setViewMode(mode);
  };

  return (
    <TableViewModeContext.Provider value={{ viewMode, toggleView }}>
      {children}
    </TableViewModeContext.Provider>
  );
};

export function useTableViewModeContext() {
  const context = useContext(TableViewModeContext);
  if (!context) {
    throw new Error(
      "useTableViewModeContext must be used within a ViewModeProvider"
    );
  }
  return context;
}
