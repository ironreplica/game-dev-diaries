"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "../../firebase/auth/signup";

const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error); // stop the function here if theres an error
    }

    // else succesful
    console.log(result);
    return router.push("/login"); // redirect to a page where the user is logged in
  };

  return (
    <section>
      <div className="w-[100%] bg-darkest h-[100vh] flex justify-center pt-[100px] text-lg">
        <div className="mb-4 flex flex-col">
          <h1 className=" font-semibold tracking-wide text-2xl mx-auto mb-3">
            Create Account
          </h1>
          <form
            onSubmit={handleForm}
            className="flex flex-col text-center h-fit py-5 w-[500px] bg-dark border border-light rounded"
          >
            <label
              className=" text-lightest font-semibold mb-2 "
              htmlFor="email"
            >
              Email
            </label>

            <input
              type="email"
              // required={true}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="JohnSmith@gmail.com"
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            {/* <label
              className=" text-lightest font-semibold mb-2 "
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              required={true}
              name="username"
              placeholder="JohnSmith"
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            /> */}
            <label
              htmlFor="password"
              className=" text-lightest font-semibold mb-2 "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              // required={true}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder=""
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <button
              type="submit"
              className=" bg-transparent hover:bg-darkest text-lightest w-fit mx-auto px-4 rounded mt-4"
            >
              Create Account
            </button>
          </form>
          <div className="w-fit h-fit mx-auto text-lg">
            <Link href={"/login"}>Already have an account? Login here</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
