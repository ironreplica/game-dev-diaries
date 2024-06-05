import React from "react";
import Image from "next/image";
// Pass in image, date modified and creator and creator profile picture
const UpdateCard = ({ title, description, creator }) => {
  return (
    <div className="flex flex-col w-[500x] h-auto m-10 border border-light rounded text-center">
      <div className=" flex flex-row h-[50px] w-full border border-t-0 border-l-0 border-r-0 border-light ">
        <div className="mx-auto flex flex-row text-center my-auto align-middle top-[50%]">
          <Image
            alt="profile_photo"
            src={"/images/profile.jpg"}
            width={45}
            height={45}
            className=" rounded-[50%]"
          />
          <h1 className="align-middle my-auto pl-4">{creator}</h1>
        </div>
      </div>
      <Image
        alt="screenshot"
        className="mx-auto my-5 border border-light rounded"
        src={"/images/post-image.png"}
        width={500}
        height={500}
      />
      <div className="h-[200px]">
        <h1 className=" font-semibold text-xl border border-t-0 border-l-0 border-r-0 w-fit mx-auto mb-3">
          {title}
        </h1>
        <p className="px-10 pb-4">{description}</p>
      </div>
      <div className="h-fit border border-b-0 border-l-0 border-r-0 border-light w-full">
        <h1 className="mx-auto my-auto py-1">Created on 1/2/2024</h1>
      </div>
    </div>
  );
};

export default UpdateCard;
