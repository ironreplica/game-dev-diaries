"use client";
import React, { useState, useEffect } from "react";
// import { useAuthContext } from "../../context/AuthContext";
import { LogOut } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  LogOut();
  useEffect(() => {
    router.push("/");
  }, []);
};

export default page;
