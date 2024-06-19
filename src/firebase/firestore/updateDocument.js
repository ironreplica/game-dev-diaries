import firebase_app from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function updateDocument(collection, id, data) {
  let result = null;
  let error = null;
  // console.info(collection, id, data);
  const docRef = doc(db, "posts", "posts");
  try {
    result = await updateDoc(docRef, { posts: arrayUnion(data) });
    console.log(result);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
