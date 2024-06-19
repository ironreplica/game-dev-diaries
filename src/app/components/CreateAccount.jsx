"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { signUp } from "../../firebase/auth/signup";
import signUp from "../../firebase/auth/signup";

const CreateAccount = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(userName, email, password);

    if (error) {
      return console.log(error); // stop the function here if theres an error
    }

    // else succesful
    if (result === undefined) {
      alert("Invalid Credentials, try a different email or password.");
      return;
    }
    alert("Successfully created an account!");
    return router.push("/login"); // redirect to a page where the user is logged in
  };

  return (
    <section>
      <div className="w-[100%] bg-void-950 h-[100vh] flex justify-center pt-[100px] text-lg text-stark-50">
        <div className="mb-4 flex flex-col">
          <h1 className=" tracking-tight text-2xl mx-auto mb-3">
            Create Account
          </h1>
          <h1 className="w-[70%] mx-auto my-2 text-center">
            Creating an account is the first step in unlocking your{" "}
            <span className=" text-void-50 bg-gradient-to-r from-void-500 to-fuschia-500 text-opacity-0 bg-clip-text">
              true potential.
            </span>
          </h1>
          <form
            onSubmit={handleForm}
            className=" mx-auto flex flex-col text-center h-fit py-5 w-[500px] bg-gradient-to-r from-fuschia-800 to-jewel-900 rounded"
          >
            <label className=" mb-2 " htmlFor="username">
              Username
            </label>

            <input
              type="text"
              // required={true}
              onChange={(e) => setUserName(e.target.value)}
              required
              id="username"
              name="username"
              placeholder="Username"
              className=" bg-void-950 w-[70%] mx-auto rounded"
            />
            <label className=" mb-2 " htmlFor="email">
              Email
            </label>

            <input
              type="email"
              // required={true}
              required
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="JohnSmith@gmail.com"
              className=" bg-void-950  w-[70%] mx-auto rounded"
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
            <label htmlFor="password" className="mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              // required={true}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              placeholder=""
              className=" bg-void-950 w-[70%] mx-auto rounded"
            />
            <button
              type="submit"
              className=" bg-jewel-700 hover:bg-jewel-800  w-fit mx-auto px-4 rounded mt-4"
            >
              Create Account
            </button>
          </form>
          <div className="w-fit h-fit mx-auto text-lg">
            <Link href={"/login"}>
              <span className=" text-void-900 bg-void-500 text-opacity-0 bg-clip-text">
                Already have an account? Login here
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
