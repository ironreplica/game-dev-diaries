"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "../../firebase/auth/signin";

const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    return router.push("/");
  };

  return (
    <section>
      <div className="w-[100%] bg-darkest h-[100vh] flex justify-center pt-[100px] text-lg">
        <div className="mb-4 flex flex-col">
          <h1 className=" font-semibold tracking-wide text-2xl mx-auto mb-3">
            Login into Account
          </h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col text-center h-[200px] w-[500px] bg-gradient-to-r from-grad1 to-dark rounded"
          >
            <label
              className=" text-lightest font-semibold mb-2 "
              htmlFor="email"
            >
              Email
            </label>

            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="example@gmail.com"
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <label
              className=" text-lightest font-semibold mb-2 "
              htmlFor="password"
            >
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <button
              type="submit"
              className=" bg-transparent hover:bg-darkest text-lightest w-fit mx-auto px-4 rounded mt-4"
            >
              Log into Account
            </button>
          </form>
          <div className="w-fit h-fit mx-auto text-lg">
            <Link href={"/create-account"}>
              Dont have an account? Create one here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
