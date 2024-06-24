import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";
import mapUserData from "./mapUserData";
import { writeToFirstore } from "../userData/addUserData";
// set cookie ?

const auth = getAuth(firebase_app);

// * This function should never return anything.
export default async function updateUserData(
  profilePic,
  bio, // call the addUserDataFunction
  tags
) {
  if (auth.currentUser === null) return;
  // * Get username from database, see if new one is orignal
  // bio = bio | "Empty biography, tell us something about yourself!";
  // * Upload new profile pic to photourl
  console.log(bio);

  try {
    await updateProfile(auth.currentUser, {
      photoURL: profilePic,
    });
    console.log(auth.currentUser.photoURL);
  } catch (error) {
    console.log(error);
  }

  // * If bio is not empty Update biography from userdata

  console.log("trying to push bio");

  try {
    console.log("updating bio...");
    await writeToFirstore(bio, profilePic).then(
      function () {
        console.log("updated profile");
      }.catch(function (error) {
        console.log(error);
      })
    );
  } catch (error) {}
  // * Add / Delete tags from userdata
}
