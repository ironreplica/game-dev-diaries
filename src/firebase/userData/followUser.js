import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";
import { writeToFirstore } from "../userData/addUserData";

const auth = getAuth(firebase_app);
export default async function follow(uid) {
  if (auth.currentUser === null) return;

  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  if (uid) {
    console.log("following");
    try {
      await writeToFirstore();
    } catch (error) {}
  }

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
