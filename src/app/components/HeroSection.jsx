import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="">
      <Image
        src={"/images/logo.jpg"}
        alt="logoLarge"
        width={150}
        height={150}
        className=" absolute top-[55px]
        border border-light rounded"
      />
      <div className=" pt-[55px] w-full h-[600px] bg-dark flex flex-row">
        <div className="flex flex-col w-full px-10 py-10 justify-center text-center text-4xl text-lightest font-semibold">
          <h1 className="mx-auto my-auto tracking-wide">
            From Concept to Console: <br></br> Document Your Game Dev Odyssey
          </h1>
          <Link href={"#"}>
            <button className="bg-med p-4 rounded text-xl" type="submit">
              View Games
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
