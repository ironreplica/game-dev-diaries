"use client";
import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
import { LogOut } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  LogOut();
  router.push("/");
  return <section className="hidden"></section>;
};

export default page;
