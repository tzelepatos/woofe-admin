"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

import Map from "@/app/components/Map";

const ModalMaps = ({
  onClose,
  address,
  setAddress,
  handleUpdateClick,
  viewMode,
  form,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Disable scroll on the background page when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scroll when the modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }} // Start with small size and opacity
        animate={{ opacity: 1, scale: 1 }} // Transition to full size and opacity
        exit={{ opacity: 0, scale: 0.5 }} // Exit with small size and opacity
        transition={{ duration: 0.2, ease: "easeOut" }} // Adjust duration and ease
        className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 overflow-auto"
      >
        <div
          className="md:w-2/3 w-full  relative bg-jimGrayLight rounded-xl  "
          ref={modalRef}
        >
          <Map
            address={address}
            setAddress={setAddress}
            handleUpdateClick={handleUpdateClick}
            onClose={onClose}
            viewMode={viewMode}
            form={form}
          />

          <button
            type="button"
            className="absolute -top-1 -right-1   text-white hover:text-[#FFA500]"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModalMaps;
