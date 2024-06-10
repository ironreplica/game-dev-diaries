"use client";
import React, { use } from "react";
// import useAuthContext from "../../context/AuthContext";
import { useAuthContext } from "../../context/AuthContext";
// import { useRouter } from "next/navigation";
import DefaultNavbar from "./DefaultNavbar";
import AdminNavbar from "./AdminNavbar";

// * If a user is logged in, display admin navbar, if not display the default navbar.
const NavBar = () => {
  const { user } = useAuthContext();
  // const { router } = useRouter();
  // const { user } = useAuthContext();
  // console.log(user);
  // React.useEffect(() => {
  //   if (user == null) router.push("/");
  // }, [user]);
  return user ? <AdminNavbar /> : <DefaultNavbar />;
};

export default NavBar;
