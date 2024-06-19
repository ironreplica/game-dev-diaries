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
      <div className="w-[100%] bg-void-950 h-[92.4vh] flex justify-center pt-[100px] text-lg text-stark-50">
        <div className="mb-4 flex flex-col">
          <h1 className=" tracking-tight text-2xl mx-auto mb-3">
            Login into your account
          </h1>
          {/* <h1 className="w-[70%] mx-auto my-2 text-center">
            Welcome back, we missed you{" "}
            <span className=" text-void-50 font-bold  bg-gradient-to-r from-void-500 to-fuschia-500 text-opacity-0 bg-clip-text">
              dear user.
            </span>
          </h1> */}
          <form
            onSubmit={handleForm}
            className=" mx-auto flex flex-col text-center h-[200px] w-[500px] bg-gradient-to-r from-fuschia-800 to-jewel-900 rounded"
          >
            <label className="mb-2 " htmlFor="email">
              Email
            </label>

            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="example@gmail.com"
              className=" bg-void-950 w-[70%] mx-auto rounded"
            />
            <label className=" mb-2 " htmlFor="password">
              Password
            </label>

            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className=" bg-void-950 w-[70%] mx-auto rounded"
            />
            <button
              type="submit"
              className=" bg-jewel-700 hover:bg-jewel-800  w-fit mx-auto px-4 rounded mt-4"
            >
              Log into Account
            </button>
          </form>
          <div className="w-fit h-fit mx-auto text-lg">
            <Link href={"/create-account"}>
              <span className=" text-void-900 bg-void-500 text-opacity-0 bg-clip-text">
                Dont have an account? Create one here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
