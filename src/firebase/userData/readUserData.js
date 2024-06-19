"use client";
import firebase_app from "../config";
import {
  getDoc,
  Timestamp,
  GeoPoint,
  doc,
  getFirestore,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default async function readUserData() {
  const db = getFirestore(firebase_app);
  const auth = getAuth(firebase_app);
  const user = auth.currentUser;
  const userDoc = doc(db, "users", user.uid);
  const docSnap = await getDoc(userDoc);

  if (docSnap.exists()) {
    console.log(docSnap._document.data.value.mapValue.fields);
    return docSnap._document.data.value.mapValue.fields;
  } else {
    return "null";
  }
}
