"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { LogOut } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

//* Left off at communication with DB
//  https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
const page = () => {
  const { user } = useAuthContext();
  // Example of page thats exclusive for logged in users with log out button
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <section>
      <div>
        <h1>Only logged in users can see this</h1>
        <button onClick={LogOut}>Logout</button>
      </div>
    </section>
  );
};

export default page;
