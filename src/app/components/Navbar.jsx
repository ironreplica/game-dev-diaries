"use client";
import React from "react";
import Link from "next/link";
import Navlink from "./Navlink";
import Image from "next/image";

const navLinks = [
  {
    title: "Explore Devlogs",
    path: "#",
  },
  {
    title: "Developers",
    path: "#",
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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-lightest flex justify-between z-10">
      <div className="flex w-fit  my-auto">
        <Image src={"/next.svg"} width={100} height={100} className=" mx-4" />
        <Link href={"/"} className="text-2xl text-darkest font-semibold px-4 ">
          Game Dev Diaries
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

export default Navbar;