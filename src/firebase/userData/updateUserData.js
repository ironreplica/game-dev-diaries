import firebase_app from "../config";
import { getAuth, updateProfile } from "firebase/auth";
import { writeToFirstore } from "../userData/addUserData";

const auth = getAuth(firebase_app);

// * This function should never return anything.
export default async function updateUserData(profilePic, bio, tags) {
  if (auth.currentUser === null) return;

  console.log(bio);

  try {
    if (profilePic) {
      await updateProfile(auth.currentUser, {
        photoURL: profilePic,
      });
      console.log("Profile pic updated: " + auth.currentUser.photoURL);
    }
  } catch (error) {
    console.error("Error updating profile picture:", error);
  }

  if (bio) {
    console.log("Updating bio...");
    try {
      await writeToFirstore(bio, profilePic)
        .then(() => {
          console.log("Profile updated successfully");
        })
        .catch((error) => {
          console.error("Error updating Firestore:", error);
        });
    } catch (error) {
      console.error("Error in writeToFirstore:", error);
    }
  }

  // * Add / Delete tags from userdata if necessary
  if (tags) {
    // Implement tags update logic if needed
    console.log("Updating tags...");
  }
}
