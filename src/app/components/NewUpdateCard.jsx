"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import EditableField from "./EditableField";
import { getAuth } from "firebase/auth";
import firebase_app from "../../firebase/config";
import { getFirestore } from "firebase/firestore";
import { handleSubmit } from "../../firebase/cloud/AddFile";
import updateDocument from "../../firebase/firestore/updateDocument";
// Pass in image, date modified and creator and creator profile picture
const NewUpdateCard = () => {
  const db = getFirestore(firebase_app);
  const [profileURL, setProfileURL] = useState(
    "https://firebasestorage.googleapis.com/v0/b/game-dev-diaries.appspot.com/o/files%2Fblank-profile.png?alt=media&token=720a666a-3218-4650-8cfe-c17127bbf28a"
  );

  const date = new Date();
  const [imgUrl, setImgUrl] = useState("/images/no-image.svg");

  useEffect(() => {
    if (auth.currentUser.photoURL === null) return;
    setProfileURL(
      // always will have one since your setting it to the blank picture
      auth.currentUser.photoURL
    );
  }, []);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let curDate = `${month}/${day}/${year}`;

  const auth = getAuth(firebase_app);
  const user = auth.currentUser;
  const inputButtonRef = useRef();

  const getFileURL = async (e) => {
    // TODO: RETURN A NEW PROMISE, BIO WONT UPDATE
    return new Promise((resolve, reject) => {
      const file = e.target.files[0];
      console.log(file);
      if (file) {
        handleSubmit(e, file).then(async function (fileurl) {
          resolve(fileurl);
        });
      }
    });
  };

  async function submitPost(e) {
    e.preventDefault();

    var items = {
      userID: auth.currentUser.uid,
      createdBy: auth.currentUser.displayName,
      createdByImage: auth.currentUser.photoURL,
      title: "empty",
      description: "empty",
      URL: imgUrl,
      dateCreated: curDate,
      likeCount: 0,
    };
    for (var i = 0; i < e.target.length; i++) {
      // console.log(e.target[i].id.value, e.target[i].value);
      e.target[i].id === "h1"
        ? (items.title = e.target[i].value)
        : e.target[i].id === "p"
        ? (items.description = e.target[i].value)
        : "Empty description";
      // const post = {title: e.target[i].}
    }
    console.table(items);
    try {
      await updateDocument(
        "posts",
        items.title + items.description,
        items
      ).then(console.log("success"));
    } catch (error) {
      console.log(error);
    }
  }
  async function imgSubmit(e) {
    e.preventDefault();
    var fileUrl = await getFileURL(e);
    console.log(fileUrl);

    setImgUrl(await fileUrl);
  }
  return (
    <div className="flex flex-col w-[500x] h-auto m-10  rounded text-center text-stark-50">
      <form onSubmit={submitPost}>
        <input
          id="dropzone-file"
          ref={inputButtonRef}
          onChange={imgSubmit}
          type="file"
          className="hidden"
        />
        <div className=" flex flex-row h-[70px] w-full  ">
          <div className="mx-auto flex flex-row text-center my-auto align-middle top-[50%]">
            <Image
              alt="profile_photo"
              src={profileURL}
              width={60}
              height={60}
              className=" rounded-[50%]"
            />
            {console.log(user)}
            <h1 className="align-middle text-2xl my-auto pl-4">
              {user.displayName}
            </h1>
          </div>
        </div>
        <EditableField image refProp={inputButtonRef}>
          <Image
            alt="screenshot"
            className="mx-auto my-5  rounded"
            src={imgUrl ? imgUrl : "/images/no-image.svg"}
            width={300}
            height={300}
          />
        </EditableField>
        <div className="h-[200px]">
          <h1 className=" font-semibold text-xl border border-t-0 border-l-0 border-r-0 w-fit mx-auto mb-3">
            <EditableField itemId="title">
              <h1>New Devlog</h1>
            </EditableField>
          </h1>
          <EditableField>
            <p className="mx-auto text-xl">Description</p>
          </EditableField>
        </div>
        <div className="h-fit w-full">
          <h1 className="mx-auto my-auto py-1">Created on {curDate}</h1>
        </div>
        <button type="submit" className=" bg-jewel-700 p-3 rounded text-2xl">
          <h1>Submit Post</h1>
        </button>
      </form>
    </div>
  );
};

export default NewUpdateCard;
