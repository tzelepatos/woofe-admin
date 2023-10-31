"use client";
import "@/app/globals.css";
import logoLight from "@/assets/images/Logo-white.svg";
import logoDark from "@/assets/images/Logo-dark.svg";
import { useTheme } from "next-themes";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ModeToggle } from "@/app/components/ModeToggle";

const pageTransition = {
  initial: { opacity: 0, scale: 0.1, y: 800 },
  animate: { opacity: 1, scale: 1, y: 1 },
  exit: { opacity: 0, scale: 0, y: 800 },
};

function LayoutLogin({ children }) {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <>
      <motion.main
        // className="items-center justify-center flex flex-col space-y-24 p-2 "
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
      >
        <div className="  items-center justify-center flex flex-col space-y-24 p-2">
          <ModeToggle />
          {theme === "light" ? (
            <Image src={logoLight} width={300} height={300} alt="light" />
          ) : (
            <Image src={logoDark} width={300} height={300} alt="dark" />
          )}
        </div>
        <div className="flex items-center justify-center mt-6 pt-4">
          <main>{children}</main>
        </div>
      </motion.main>
    </>
  );
}

export default LayoutLogin;
