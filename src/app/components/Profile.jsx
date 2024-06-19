"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import firebase_app from "../../firebase/config";
import readUserData from "../../firebase/userData/readUserData";
// import { handleSubmit } from "../../firebase/cloud/addFile.jsx";
import { handleSubmit } from "../../firebase/cloud/AddFile";
import updateUserData from "../../firebase/userData/updateUserData";
// import { framer } from "framer-motion";
import { motion } from "framer-motion";
import EditableField from "../components/EditableField";
//TODO: find a way to style the profile picture to be square and preserve the aspect ratio.

//* Enter all the form data, profile picture and then add a save changes button at the bottom
//* that pushes everything all at once.
const auth = getAuth(firebase_app);

const Profile = () => {
  const [profileURL, setProfileURL] = useState("/images/blank-profile.png"); // get profile url
  const [bio, setBio] = useState("");

  const inputButtonRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readUserData();
        setBio(data.biography.stringValue);
        // console.log(data.biography.stringValue);
      } catch (error) {
        console.log(error);
        setBio(
          "This is your bio section, add whatever you like and tell us about yourself!"
        );
      }
    };
    fetchData();
    setProfileURL(
      // always will have one since your setting it to the blank picture
      auth.currentUser.photoURL
    );
  }, []);

  const getFileURL = async (e) => {
    // TODO: RETURN A NEW PROMISE, BIO WONT UPDATE
    return new Promise((resolve, reject) => {
      const file = e.target[0]?.files[0];
      console.log(file);
      if (file) {
        handleSubmit(e, file).then(async function (fileurl) {
          resolve(fileurl);
        });
      }
    });
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    // Loop through form data
    let target = e.target;
    let formData = [];
    let fileURL;
    if (e.target[0]?.files[0]) {
      fileURL = await getFileURL(e);
    }

    // * Get all the form data in an object array
    for (let i = 0; i < target.length; i++) {
      var object = { type: target[i].type, value: target[i].value };

      formData.push(object);
    }

    // * If there is a new bio
    if (formData.find((o) => o.type === "textarea")) {
      setBio(formData.find((o) => o.type === "textarea").value);
    }
    submission();

    async function submission() {
      console.log(fileURL);
      await updateUserData("", fileURL, bio);
    }
  };

  return (
    <section className="w-full h-[97vh] bg-void-950 text-stark-50 ">
      <div className="pt-[55px] text-center flex flex-col text-2xl">
        <h1>View Profile</h1>
        <form className="form" onSubmit={handleUploadSubmit}>
          <div className="flex flex-row justify-between w-fit mx-auto my-3">
            <input
              id="dropzone-file"
              ref={inputButtonRef}
              type="file"
              className="hidden"
            />
            {/* {useEffect(() => {
            console.log(profileURL);
            document.getElementById("profile_photo").src =
              profileURL === "url" ? "/images/blank-profile.png" : profileURL;
            // <Image
            //   alt="profile_photo"
            //   src={
            //     profileURL === "url" ? "/images/blank-profile.png" : profileURL
            //   }
            //   width={45}
            //   height={45}
            //   className=" rounded-[50%]"
            // />
          }, [])} */}
            <EditableField
              popupText={"pic"}
              rounded={true}
              image={true}
              refProp={inputButtonRef}
            >
              <Image
                id="profile_photo"
                loading="eager"
                alt="profile_photo"
                src={profileURL ? profileURL : "/images/blank-profile.png"}
                width={60}
                height={60}
                className=" rounded-[50%]"
              />
            </EditableField>

            <h1 className="my-auto ml-2 text-3xl font-semibold ">
              {auth.currentUser.displayName}
            </h1>
          </div>
          <h2 className="text-lightefst my-auto text-base mb-3">
            {auth.currentUser.email}
          </h2>
          <div className="w-[500px] text-xl mx-auto flex flex-col ">
            <div className="tags w-full flex flex-row justify-evenly">
              {/* <div className="w-[100px] h-fit rounded-lg bg-med flex">
                <h1 className=" text-lightest mx-auto my-auto">FPS</h1>
              </div>
              <div className="w-[100px] h-fit rounded-lg bg-med flex">
                <h1 className=" text-lightest mx-auto my-auto">Survival</h1>
              </div>
              <div className="w-[100px] h-fit rounded-lg bg-med flex">
                <h1 className=" text-lightest mx-auto my-auto">Voxel</h1>
              </div>
              <div className="w-[100px] h-fit rounded-lg bg-med flex">
                <h1 className=" text-lightest mx-auto my-auto">Pixel</h1>
              </div> */}
            </div>
            <div>
              <EditableField popupText={"Bio"}>
                <p className=" mx-auto text-center">{bio}</p>
              </EditableField>
            </div>
            <div className="block">
              <div className="flex items-center justify-center w-full">
                {/* <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </label> */}
              </div>
            </div>
          </div>
          <motion.button
            className="rounded p-2 bg-jewel-700"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            animate={{ transition: 1 }}
            type="submit"
          >
            Update Profile
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
