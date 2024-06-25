"use client";
import firebase_app from "../config";
import { useRouter } from "next/navigation";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  Timestamp,
  collection,
  GeoPoint,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// * Creating firestore user document
export const createToFirestore = (userDisplayName, uid) => {
  const db = getFirestore(firebase_app);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // const auth = getAuth(firebase_app);

  const sendData = async () => {
    try {
      console.log("creating user data document");
      const userDoc = doc(db, "users", uid);
      await setDoc(userDoc, {
        biography: "Empty biography, tell us something about yourself!",
        contact_email: "contact-email@noreply.com",
        followed_users: [],
        followers_array: [],
        categories: [],
        time_stamp: `${month}/${day}/${year}`,
        profileURL:
          "https://firebasestorage.googleapis.com/v0/b/game-dev-diaries.appspot.com/o/files%2Fblank-profile.png?alt=media&token=720a666a-3218-4650-8cfe-c17127bbf28a",
        username: userDisplayName,
      });
      console.log("complete!");
    } catch (error) {
      console.log(error);
    }
  };
  sendData();
};

// * Updating firestore user document
export const followUser = (uid) => {
  const db = getFirestore(firebase_app);

  const auth = getAuth(firebase_app);
  // if (auth.currentUser === null) return;
  const user = auth.currentUser;
  const sendData = async () => {
    try {
      //! THIS IS FOR FOLLOWING AND UNFOLLOWING USERS
      const userDoc = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDoc); // Getting the user document

      var curFollowedUsers = docSnap._document.data.value.mapValue.fields // Getting the array of followed users, if there isnt one, initialize a new array
        .followed_users
        ? docSnap._document.data.value.mapValue.fields.followed_users
        : [];
      console.log(curFollowedUsers.arrayValue.values[0]);
      for (let i = 0; i < curFollowedUsers.arrayValue.values.length; i++) {
        console.log(curFollowedUsers.arrayValue.values[i]);
        // if (uid === curFollowedUsers[i].stringValue) {
        //   console.log("exists!");
        // }
      }
      // console.log(curFollowedUsers);

      curFollowedUsers.arrayValue.values.push(uid);
      // * Update the old array to match the new array
      console.log(curFollowedUsers);

      // var followedUsersArr = curFollowedUsers
      //   ? curFollowedUsers.arrayValue.values
      //   : [];
      // console.log(curFollowedUsers.arrayValue.valuess);

      // followedUsersArr.push({ uid });
      if (docSnap.exists() && auth.currentUser != null) {
        await updateDoc(userDoc, { followed_users: curFollowedUsers });
      } else {
        console.error(
          "A user is not signed in, or your account is not setup correctly."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  sendData();
};

export const writeToFirstore = (
  bio,
  profilePicURL,
  following,

  contactEmail,
  categoryTags,
  followers,
  posts,
  userDisplayName
) => {
  const db = getFirestore(firebase_app);

  const auth = getAuth(firebase_app);
  // if (auth.currentUser === null) return;
  const user = auth.currentUser;

  bio = bio || "Empty Bio...";
  // console.log(auth.currentUser.profileURL);
  profilePicURL = profilePicURL || auth.currentUser.photoURL;
  contactEmail = contactEmail || "No Contact";
  following = following || [];
  categoryTags = categoryTags || [];
  followers = followers || [];
  posts = posts || 0;
  userDisplayName = user.displayName;
  // const { user } = useUser();
  const sendData = async () => {
    try {
      console.log("sending data...");
      const userDoc = doc(db, "users", user.uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists() && auth.currentUser != null) {
        // * If data ALREADY exists
        const newData = {
          biography: bio,
          contact_email: contactEmail,
          followed_users: following,
          followers_array: followers,
          categories: categoryTags,
          profileURL: profilePicURL,
        };
        await updateDoc(userDoc, newData);
        console.log(newData.profileURL);
      } else if (!docSnap.exists()) {
        // * If there is no user data
        console.error("wrong function");

        // await setDoc(userDoc, {
        //   biography: bio,
        //   contact_email: contactEmail,
        //   followed_users: following,
        //   followers_array: followers,
        //   categories: categoryTags,
        //   time_stamp: Date.now(),
        //   profileURL: profilePicURL,
        //   username: userDisplayName,
        // });
      }
      alert("Successfully updated profile!");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  sendData();
};
