import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0.8,
    scale: 1,
  },
  hover: {
    opacity: 1,
    scale: 1.1,
  },
  transition: {
    duration: 1,
  },
};

const Navlink = ({ href, title }) => {
  return (
    <Link className=" font-semibold p-4" href={href}>
      {title}
    </Link>
  );
};

export default Navlink;
