"use client";
import React from "react";
// import { useAuthContext } from "../../context/AuthContext";
// import { LogOut } from "../../context/AuthContext";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

const page = () => {
  const { user } = useAuthContext();
  // Example of page thats exclusive for logged in users with log out button
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <main>
      <Navbar />;
    </main>
  );
};

export default page;
