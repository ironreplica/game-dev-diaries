import { DEFAULT_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";
import firebase_app from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import mapUserData from "../userData/mapUserData";
import { setUserCookie } from "../userData/userCookies";
import addData from "../firestore/addData";
// import { mapUserData } from "../userData/mapUserData";
// import { setUserCookie } from "../userData/userCookies";

const auth = getAuth(firebase_app);

export default async function signUp(username, email, password) {
  let result = null,
    error = null;

  const { userResult, userError } = await addData("usernames", username, {
    name: username,
    emailAddress: email,
  });
  if (userError) {
    console.log(userError);
    alert(userError);
    return;
  }
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    // result.user.updateProfile(result.user, { displayName: username });
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {})
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

    // userData().displayName = username;

    setUserCookie(await userData());
    // const userData = mapUserData(result.user.uid, email, result.user.ya, );
    // setUserCookie(userData);
  }

  return { result, error };
}
