"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getData from "../../firebase/firestore/getData";
// import getUserByUID from "../../firebase/userData/getUserByUid";

// * This file is used to view OTHER peoples profiles. Not your own
const ViewProfile = ({ uid }) => {
  const [bio, setBio] = useState("empty");
  const [categories, setCategories] = useState([]);
  const [contactEmail, setContactEmail] = useState("");
  const [followedUsers, setFollowedUsers] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [userPFP, setUserPFP] = useState(
    "https://firebasestorage.googleapis.com/v0/b/game-dev-diaries.appspot.com/o/files%2Fblank-profile.png?alt=media&token=720a666a-3218-4650-8cfe-c17127bbf28a"
  );
  const [timeStamp, setTimeStamp] = useState("empty");
  const [username, setUsername] = useState("username");

  async function getUserData() {
    const data = await getData("users", uid).then();
    var {
      biography,
      categories,
      contact_email,
      followed_users,
      followers_array,
      profileURL,
      time_stamp,
      username,
    } = await data.result._document.data.value.mapValue.fields;
    //* Getting userdata by uid
    // console.log(await data.result._document.data.value.mapValue);
    // getUserByUID(uid);
    setBio(biography.stringValue);
    setCategories(categories);
    setContactEmail(contact_email);
    setFollowedUsers(followed_users);
    setFollowers(followers_array);
    // console.log(profileURL.stringValue);
    setUserPFP(profileURL.stringValue);
    // if (profileURL === " ") {
    //   console.log("blank pfp");
    //   setProfileURL(profileURL);
    // }
    setTimeStamp(time_stamp);
    setUsername(username.stringValue);
  }
  useEffect(() => {
    getUserData();
  }, []);
  // console.log(profileURL);
  // console.log(profileURL.stringValue);

  return (
    <section className="w-full h-[60vh] mt-[100px] bg-void-950 flex flex-col text-center">
      <div className="flex flex-col mx-auto text-2xl tracking-tighter w-[70%]">
        {/* {console.log(userPFP)} */}
        <Image
          src={userPFP}
          width={400}
          height={400}
          alt="profile-pic"
          className="mx-auto rounded-[50%]"
        />
        <h1 className="mx-auto">{username}</h1>
        <h1 className="mx-auto">{bio}</h1>
        <h1>Account created on {timeStamp.stringValue}</h1>
      </div>
    </section>
  );
};

export default ViewProfile;
