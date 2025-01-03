"use client";
import React, { use } from "react";
import { useAuthContext } from "../../context/AuthContext";
import DefaultNavbar from "./DefaultNavbar";
import AdminNavbar from "./AdminNavbar";

// * If a user is logged in, display admin navbar, if not display the default navbar.
const NavBar = () => {
  const { user } = useAuthContext();
  return user ? <AdminNavbar /> : <DefaultNavbar />;
};

export default NavBar;
