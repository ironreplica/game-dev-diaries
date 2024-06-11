"use client";
import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import mapUserData from "../userData/mapUserData";
import { setUserCookie } from "../userData/userCookies";

// import cookie
// import map user data

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }
  var userData = async () => {
    return mapUserData(result.user);
  };
  setUserCookie(await userData());

  return { result, error };
}
