"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import firebase_app from "../../firebase/config";
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
  const inputButtonRef = useRef();

  useEffect(() => {
    setProfileURL(
      // always will have one since your setting it to the blank picture
      auth.currentUser.photoURL
    );
  }, []);

  const getFileURL = async (e) => {
    // TODO: RETURN A NEW PROMISE
    if (e.target[0]?.files[0]) {
      await handleSubmit(e).then(async function (fileurl) {
        console.log("submitting image");
        return fileurl;
      });
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    let bio = "Empty Bio!";
    // Loop through form data
    let target = e.target;
    let formData = [];
    const fileURL = await getFileURL(e);

    console.log(fileURL);

    console.log(target.length);
    for (let i = 0; i < target.length; i++) {
      var object = { type: target[i].type, value: target[i].value };
      console.log(target[i].type);
      formData.push(object);
    }

    // * If there is a new bio
    if (formData.find((o) => o.type === "textarea")) {
      bio = formData.find((o) => o.type === "textarea").value;
    }

    await updateUserData(auth.currentUser.displayName, fileURL);
    // .then(function () {
    //   setProfileURL(fileurl);
    //   console.log(fileurl);
    // })
    // * If an image has been submitted
  };
  // setProfileURL(fileURL);
  // console.log(profileURL);
  // console.log("User PFP " + auth.currentUser.photoURL);

  return (
    <section className="w-full h-[1200px] bg-darkest ">
      <div className="pt-[55px] text-center flex flex-col bg-dark text-2xl">
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

            <EditableField popupText={"Username"}>
              <h1 className="my-auto ml-2 text-3xl font-semibold ">
                {auth.currentUser.displayName}
              </h1>
            </EditableField>
          </div>
          <h2 className="text-lightest my-auto text-base mb-3">
            {auth.currentUser.email}
          </h2>
          <div className="w-[500px] text-xl mx-auto flex flex-col ">
            <div className="tags w-full flex flex-row justify-evenly">
              <div className="w-[100px] h-fit rounded-lg bg-med flex">
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
              </div>
            </div>
            <div>
              <EditableField popupText={"Bio"}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  nulla nobis soluta alias nihil? Nihil facilis doloremque
                  officiis quos eos itaque hic natus maiores amet unde repellat
                  ut quidem magni possimus, dicta similique inventore quod
                  aliquid esse! Quos sequi totam corrupti sunt rerum non. Quae
                  nulla officiis nostrum minus placeat asperiores dolore et
                  accusantium repellat.
                </p>
              </EditableField>
            </div>
            <div className="block">
              <div className="flex items-center justify-center w-full">
                <label
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
                </label>
              </div>
            </div>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </section>
  );
};

export default Profile;
