"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CreateDevlog from "../components/CreateDevlog";
import ExploreSection from "../components/ExploreSection";

//* Left off at communication with DB
//  https://www.freecodecamp.org/news/create-full-stack-app-with-nextjs13-and-firebase/
export default function Create() {
  return (
    <main>
      <Navbar />
      <ExploreSection />
    </main>
  );
}
