"use client";
import "@/app/globals.css";
import Navbar from "@/app/components/NavBar";
import NavLeft from "@/app/components/NavLeft";

export default function LayoutMain({ children }) {
  return (
    <>
      <Navbar />
      <div className="bg-jimGrayLight min-h-screen flex p-6">
        <NavLeft />
        <div className="bg-background flex-grow mt-2 mr-1 mb-2 rounded-lg p-4 ">
          {children}{" "}
        </div>
      </div>{" "}
    </>
  );
}
