import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FullImageModal = ({ imageUrl, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }} // Start with small size and opacity
          animate={{ opacity: 1, scale: 1 }} // Transition to full size and opacity
          exit={{ opacity: 0, scale: 0.5 }} // Exit with small size and opacity
          transition={{ duration: 0.2, ease: "easeOut" }} // Adjust duration and ease
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="max-w-3xl mx-auto relative" ref={modalRef}>
            <img
              src={imageUrl}
              alt="Full Image"
              className="max-w-full max-h-full rounded-md"
            />
            <button
              className="absolute top-0 right-0 m-4 text-white hover:text-[#FFA500]"
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
      )}
    </AnimatePresence>
  );
};

export default FullImageModal;
