"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getData from "../../firebase/firestore/getData";
import getPosts from "../../firebase/firestore/getPosts";
import UpdateCard from "./UpdateCard";
import { followUser } from "../../firebase/userData/addUserData";
// import getUserByUID from "../../firebase/userData/getUserByUid";

// * This file is used to view OTHER peoples profiles. Not your own
const ViewProfile = ({ uid }) => {
  const [userPosts, setUserPosts] = useState([]);
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

  async function followAUser() {
    // e.preventDefault();
    // followUser();
    await followUser(uid);
    // console.log(f));
  }

  async function getUserPosts() {
    const posts = await getPosts();
    var userPosts = [];
    posts.map((post) => {
      if (post.userID === uid) {
        userPosts.push(post);
      }
    });
    setUserPosts(userPosts);
  }

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

    setBio(biography.stringValue);
    setCategories(categories);
    setContactEmail(contact_email);
    setFollowedUsers(followed_users);
    setFollowers(followers_array);

    setUserPFP(profileURL.stringValue);

    setTimeStamp(time_stamp);
    setUsername(username.stringValue);
  }
  useEffect(() => {
    getUserData();
    getUserPosts();
    // setUserPosts(getUserPosts().then((result) => console.log(result)));
  }, []);

  return (
    <section className="w-full h-fit bg-void-950 flex flex-col text-center">
      <div className="flex flex-col justify-between h-[700px] mx-auto text-2xl tracking-tighter w-[70%] mt-10">
        {/* {console.log(userPFP)} */}
        <Image
          src={userPFP}
          width={400}
          height={400}
          alt="profile-pic"
          className="mx-auto rounded-[50%] mt-8"
        />
        <h1 className="mx-auto text-5xl tracking-tighter">{username}</h1>
        <div className="flex flex-row mx-auto justify-between">
          <button
            onClick={followAUser}
            className="bg-jewel-700 rounded mx-2 py-1 px-2 tracking-tighter"
          >
            {/* TODO: Check if active user follows them, if so switch to unfollow button, if its yourself, gray out the button */}
            <h1>Follow</h1>
          </button>
          <button>
            <h1>Contact</h1>
          </button>
        </div>
        <h1 className="mx-auto text-1xl tracking-wide mb-5">{bio}</h1>
        <h1 className=" text-stark-500">
          Account created on {timeStamp.stringValue}
        </h1>
      </div>
      <div className=" h-fit  mt-[100px]">
        <h1 className="text-5xl text-stark-50 tracking-tight  ">Posts</h1>
        <div className=" grid grid-cols-3">
          {userPosts.map((post, index) => (
            <UpdateCard
              creator={post.createdBy}
              link={post.userID}
              title={post.title}
              profileURL={post.createdByImage}
              imageURL={post.URL}
              description={post.description}
              key={index}
              createdDate={post.dateCreated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewProfile;
