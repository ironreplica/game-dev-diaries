import React from "react";
import Image from "next/image";
// import TextLoop from "react-text";

const SignUpToday = () => {
  return (
    <section className="w-full h-[700px] bg-void-950 flex flex-col justify-evenly text-stark-100">
      <div className="mx-auto text-5xl flex flex-col py-5 text-center tracking-tight">
        <h1 className="w-fit mx-auto ">
          One place for all your{" "}
          <span className=" text-void-50 bg-gradient-to-r from-void-300 to-fuschia-400 text-opacity-0 bg-clip-text">
            progress.
          </span>
        </h1>
        <h1 className="text-4xl">
          Your games{" "}
          <span className=" text-void-50 bg-gradient-to-r from-void-500 to-fuschia-300 text-opacity-0 bg-clip-text">
            success,
          </span>{" "}
          comes first.
        </h1>
      </div>
      <Image
        src={"./images/video_games.svg"}
        width={200}
        height={200}
        className="mx-auto fill-void-50"
      />
    </section>
  );
};

export default SignUpToday;
