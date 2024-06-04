"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const CreateAccount = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    // Schema
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user); // POST method on signup route
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="w-[100%] bg-darkest h-[100vh] flex justify-center pt-[100px] text-lg">
        <div className="mb-4 flex flex-col">
          <form
            action=""
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
              required={true}
              id="email"
              value={user.email}
              name="email"
              placeholder="JohnSmith@gmail.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <label
              className=" text-lightest font-semibold mb-2 "
              htmlFor="username"
            >
              Username
            </label>

            <input
              type="text"
              id="username"
              required={true}
              value={user.username}
              name="username"
              placeholder="JohnSmith"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <label
              className=" text-lightest font-semibold mb-2 "
              htmlFor="password"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              required={true}
              id="password"
              placeholder=""
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <button
              type="submit"
              onClick={onSignup()}
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
