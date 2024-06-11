"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAuth } from "firebase/auth";
import firebase_app from "../../firebase/config";
// import { handleSubmit } from "../../firebase/cloud/addFile.jsx";
import { handleSubmit } from "../../firebase/cloud/AddFile";

//* Enter all the form data, profile picture and then add a save changes button at the bottom
//* that pushes everything all at once.
const auth = getAuth(firebase_app);

const Profile = () => {
  const [profileURL, setProfileURL] = useState("/images/blank-profile.png"); // get profile url

  console.log(auth.currentUser.displayName);

  const handleUploadSubmit = async (e) => {
    const fileURL = await handleSubmit(e);
    setProfileURL(fileURL);
  };
  return (
    <section className="w-full h-[1200px] bg-darkest ">
      <div className="pt-[55px] text-center flex flex-col bg-dark text-2xl">
        <h1>View Profile</h1>
        <div className="flex flex-row w-fit mx-auto my-3">
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
          <Image
            id="profile_photo"
            loading="eager"
            alt="profile_photo"
            src={profileURL}
            width={45}
            height={45}
            className=" rounded-[50%]"
          />

          <h1 className="my-auto ml-2 text-3xl font-semibold ">
            {auth.currentUser.displayName}
          </h1>
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nulla
            nobis soluta alias nihil? Nihil facilis doloremque officiis quos eos
            itaque hic natus maiores amet unde repellat ut quidem magni
            possimus, dicta similique inventore quod aliquid esse! Quos sequi
            totam corrupti sunt rerum non. Quae nulla officiis nostrum minus
            placeat asperiores dolore et accusantium repellat.
          </p>
          <div>
            <form className="form" onSubmit={handleUploadSubmit}>
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
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
