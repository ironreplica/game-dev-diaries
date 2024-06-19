"use client";
import firebase_app from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  Timestamp,
  collection,
  GeoPoint,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { useUser } from "../auth/useUser";

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
  const db = getFirestore(firebase_app);

  const auth = getAuth(firebase_app);
  if (auth.currentUser === null) return;
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
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        // * If data ALREADY exists
        const newData = {
          biography: bio,
          contact_email: contactEmail,
          followed_users: following,
          followers_array: followers,
          categories: categoryTags,
          time_stamp: Date.now(),
        };
        await updateDoc(userDoc, newData);
        alert("data successfully pushed.");
      } else if (!docSnap.exists()) {
        // * If there is no user data
        console.log("setting doc");

        await setDoc(userDoc, {
          biography: bio,
          contact_email: contactEmail,
          followed_users: following,
          followers_array: followers,
          categories: categoryTags,
          time_stamp: Date.now(),
        });
      }
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
