"use client";
import React from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
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
    title: "Create",
    path: "/create",
  },
  {
    title: "View Profile",
    path: "/profile",
  },
  {
    title: "Logout",
    path: "/logout",
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

const AdminNavbar = () => {
  const { router } = useRouter();
  const { user } = useAuthContext();

  React.useEffect(() => {
    if (user == null) {
      router.push("/");
    }
  }, [user]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-darkest text-lightest flex justify-between z-10">
      <div className="flex w-fit  my-auto">
        {/* <Image
          alt="logo"
          priority
          src={"/next.svg"}
          width={100}
          height={100}
          className=" mx-4"
        /> */}
        <Link href={"/"} className="text-2xl font-semibold px-4 ">
          <motion.h1
            variants={variants}
            initial="initial"
            whileHover="hover"
            transition="transition"
            className="bg-gradient-to-r from-grad1  to-grad2 bg-clip-text text inline-block"
          >
            Game Dev Diaries
          </motion.h1>
        </Link>
      </div>
      <div className="menu block right">
        <ul className="flex p-4 mt-0">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Navlink href={link.path} title={link.title}></Navlink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
