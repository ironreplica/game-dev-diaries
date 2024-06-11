import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";
import mapUserData from "../userData/mapUserData";
// set cookie ?

const auth = getAuth(firebase_app);

export default function updateProfile(
  name = auth.currentUser.displayName,
  profilePic = auth.currentUser.photoURL,
  bio,
  tags
) {
  // * Get username from database, see if new one is orignal
  // * Upload new profile pic to photourl
  // * Update biography from userdata
  // * Add / Delete tags from userdata
}
