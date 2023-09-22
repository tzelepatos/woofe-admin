"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/app/assest/images/Frame.svg";
import { ModeToggle } from "@/app/components/ModeToggle";

const pageTransition = {
  initial: { opacity: 0, scale: 0.1, y: 800 },
  animate: { opacity: 1, scale: 1, y: 1 },
  exit: { opacity: 0, scale: 0, y: 800 },
};

function LayoutLogin({ children }) {
  return (
    <motion.main
      className="flex flex-col items-center justify-center   min-h-screen "
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {" "}
      <ModeToggle />
      <div className="  items-center justify-center flex m-auto ">
        <Image
          priority
          src={logo}
          alt="woooffff"
          width={350}
          height={350}
          quality={90}
        />
      </div>
      <div className=" m-auto">{children}</div>
    </motion.main>
  );
}

export default LayoutLogin;
