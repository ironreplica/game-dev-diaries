"use client";
import firebase_app from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  GeoPoint,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { useUser } from "../auth/useUser";

const db = getFirestore(firebase_app);

// const addData = () => {
//   const { user } = useUser();
//   sendData();
// }

export const writeToFirstore = (
  bio,
  contactEmail,
  following,
  categoryTags,
  followers,
  posts
) => {
  console.log("testing!");
  const auth = getAuth(firebase_app);
  const user = auth.currentUser;

  // TODO: Add a call to the db, dont pass in dynamic data like followers and posts.
  bio = bio || "Empty Bio...";
  contactEmail = contactEmail || "No Contact";
  following = following || [];
  categoryTags = categoryTags || [];
  followers = followers || [];
  posts = posts || 0;
  // const { user } = useUser();

  const sendData = async () => {
    try {
      console.log("sending data...");
      const userDoc = doc(db, "users", user.uid);
      await setDoc(userDoc, {
        biography: bio,
        contact_email: contactEmail,
        followed_users: following,
        followers_array: followers,
        categories: categoryTags,
        time_stamp: Date.now(),
      });
      alert("data successfully pushed.");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  sendData();
};

// export default function addData() {
//   const { user } = useUser();
//   let result = null;
//   let error = null;

//   try {
//     const userDoc = doc(db, collection, user.id);
//     result = setDoc(userDoc, {
//       string_data: "test!",
//     });
//     alert("data sent!");
//   } catch (e) {
//     error = e;
//   }
//   return { result, error };
// }
