"use client";
import React from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  {
    title: "Explore Devlogs",
    path: "/explore",
  },
  {
    title: "Developers",
    path: "/developers",
  },
  {
    title: "Sign In",
    path: "/login",
  },
  {
    title: "Create Account",
    path: "/create-account",
  },
];

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

const DefaultNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[black] text-stark-50 flex justify-between z-10">
      <div className="flex w-fit  my-auto">
        {/* <Image
          alt="logo"
          priority
          src={"/next.svg"}
          width={100}
          height={100}
          className=" mx-4"
        /> */}
        <Link href={"/"} className="text-2xl  px-4 ">
          <motion.h1
            variants={variants}
            initial="initial"
            whileHover="hover"
            transition="transition"
            className="text-stark-50 bg-gradient-to-r from-jewel-200 to-fuschia-200 bg-clip-text inline-block text-opacity-0"
          >
            Game Dev Diaries
          </motion.h1>
        </Link>
      </div>
      <div className="menu block right">
        <ul className="flex p-4 mt-0 ">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={
                link.path == "/create-account"
                  ? "bg-jewel-700  rounded"
                  : "bg-none"
              }
            >
              <Navlink href={link.path} title={link.title}></Navlink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
