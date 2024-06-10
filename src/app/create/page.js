"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { LogOut } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import CreateDevlog from "../components/CreateDevlog";

//* Left off at communication with DB
//  https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
export default function Create() {
  const { user } = useAuthContext();
  // Example of page thats exclusive for logged in users with log out button
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <main>
      <Navbar />
      <CreateDevlog />
    </main>
  );
}
