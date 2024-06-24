import React from "react";
import Image from "next/image";
import Link from "next/link";
// Pass in image, date modified and creator and creator profile picture
const UpdateCard = ({
  title,
  description,
  creator,
  profileURL,
  imageURL,
  createdDate,
  link,
}) => {
  return (
    <div className="flex flex-col w-[500x] h-auto m-10 text-stark-50  text-center">
      <div className=" flex flex-row h-[50px] w-full  ">
        <div className="mx-auto flex flex-row text-center my-auto align-middle top-[50%]">
          <Image
            alt="profile_photo"
            src={
              profileURL != null
                ? profileURL
                : "https://firebasestorage.googleapis.com/v0/b/game-dev-diaries.appspot.com/o/files%2Fblank-profile.png?alt=media&token=720a666a-3218-4650-8cfe-c17127bbf28a"
            }
            width={60}
            height={60}
            className=" rounded-[50%]"
          />
          <Link href={`/users/${link}`}>
            <h1 className="align-middle text-2xl my-auto pl-4">{creator}</h1>
          </Link>
        </div>
      </div>
      <Image
        alt="screenshot"
        className="mx-auto my-5 border  rounded"
        src={imageURL}
        width={500}
        height={500}
      />
      <div className="h-[200px]">
        {/* //! Center this better */}
        <div className="flex w-fit mx-auto">
          <button className="mx-3 fill-void-400">
            <Image
              src={"./images/like-button.svg"}
              className=""
              width={50}
              height={50}
            />
          </button>
          <h1 className=" font-semibold text-xl border border-t-0 border-l-0 border-r-0 w-fit mx-auto mb-3">
            {title}
          </h1>
        </div>
        <p className="px-10 pb-4">{description}</p>
      </div>
      <h1 className="mx-auto my-auto py-1 text-stark-300">
        Created on {createdDate}
      </h1>
      <div className="h-fit"></div>
    </div>
  );
};

export default UpdateCard;
