import firebase_app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import mapUserData from "../userData/mapUserData";
import { createToFirestore } from "../userData/addUserData";
import { setUserCookie } from "../userData/userCookies";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);

export default async function signUp(username, email, password) {
  let result = null,
    error = null;

  const { userResult, userError } = await addData("usernames", username, {
    name: username,
    emailAddress: email,
  });
  if (userError) {
    console.log("error");

    console.log(userError);
    alert(userError);
    return;
  } else {
    try {
      console.log("creating account...");

      result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result.user.uid);
      // result.user.updateProfile(result.user, { displayName: username });
      updateProfile(auth.currentUser, {
        displayName: username,
        profileURL:
          "https://firebasestorage.googleapis.com/v0/b/game-dev-diaries.appspot.com/o/files%2Fblank-profile.png?alt=media&token=720a666a-3218-4650-8cfe-c17127bbf28a",
      })
        .then(() => {
          createToFirestore(username, result.user.uid)
            .then(() => {
              console.log("created userdoc");
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      return (error = e);
    }
    if (result) {
      var userData = async () => {
        return mapUserData(result.user);
      };
      setUserCookie(await userData());
    }
  }
  return { result, error };
}
