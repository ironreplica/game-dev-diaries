import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";
import mapUserData from "./mapUserData";
import { writeToFirstore } from "../userData/addUserData";
// set cookie ?

const auth = getAuth(firebase_app);

// * This function should never return anything.
export default async function updateUserData(
  name = auth.currentUser.displayName,
  profilePic = auth.currentUser.photoURL,
  bio = "test! this is my bio!", // call the addUserDataFunction
  tags
) {
  // * Get username from database, see if new one is orignal

  // * Upload new profile pic to photourl

  try {
    await updateProfile(auth.currentUser, {
      photoURL: profilePic,
    });
    console.log(auth.currentUser.photoURL);
  } catch (error) {
    console.log(error);
  }

  // * Update biography from userdata

  try {
    console.log("updating bio...");
    await writeToFirstore(bio).then(
      function () {
        console.log("updated profile");
      }.catch(function (error) {
        console.log(error);
      })
    );
  } catch (error) {}
  // * Add / Delete tags from userdata
}
