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
  try {
    result = await setDoc(doc(db, collection, id), data, { merge: true });
    console.log(result);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
