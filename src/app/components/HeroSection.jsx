"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NextVideo } from "next-videos";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    // https://nextjs.org/docs/app/building-your-application/optimizing/videos
    <section className="h-screen">
      <div className="h-full flex w-full">
        <video
          autoPlay
          muted
          loop
          className="w-full h-auto relative opacity-70 object-cover"
          preload="auto"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
        <div className=" pt-[55px] w-full h-full bg-opacity-50 bg-darkest flex flex-row z-15 absolute top-0 right-0 left-0">
          <div className="flex flex-col w-full px-10 py-10 justify-center text-center text-4xl text-lightest font-semibold">
            <h1 className="mx-auto my-auto tracking-wide opacity-100 text-[white]">
              From Concept to Console: <br></br> Document Your Game Dev Odyssey
            </h1>
            <Link href={"#"}>
              <motion.button
                initial={{ scale: 1 }}
                // animate={{  }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.7, type: "spring" }}
                className="bg-med p-4 rounded text-xl "
                type="submit"
              >
                View Games
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Image
        src={"/images/logo.jpg"}
        alt="logoLarge"
        width={150}
        height={150}
        className=" absolute top-[55px]
        border border-light rounded"
      /> */}
    </section>
  );
};

export default HeroSection;
