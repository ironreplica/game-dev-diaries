import Link from "next/link";
import React from "react";

const CreateAccount = () => {
  return (
    <section>
      <div className="w-[100%] bg-darkest h-[100vh] flex justify-center pt-[100px] text-lg">
        <div className="mb-4 flex flex-col">
          <form
            action=""
            className="flex flex-col text-center h-[200px] w-[500px] bg-dark border border-light rounded"
          >
            <label
              className=" text-lightest font-semibold mb-2 "
              for="username"
            >
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="JohnSmith"
              className=" bg-darkest text-lightest w-[70%] mx-auto rounded"
            />
            <label
              className=" text-lightest font-semibold mb-2 "
              for="username"
            >
              Password
            </label>

            <input
              type="password"
              name="username"
              placeholder="JohnSmith"
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
