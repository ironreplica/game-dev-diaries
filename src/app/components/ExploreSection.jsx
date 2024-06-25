"use client";
import React, { useState, useEffect } from "react";
import { Firestore, QuerySnapshot, getFirestore } from "firebase/firestore";
import firebase_app from "../../firebase/config";
import UpdateCard from "./UpdateCard";
// import { getFirestore } from "firebase/firestore";

// import addData from "../../firebase/firestore/addData";
// import addData from "../../firebase/firestore/addData";
import getData from "../../firebase/firestore/getData";
// import {getDocument} from '
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/autocomplete";
import { Arapey } from "next/font/google";
import { contains } from "@firebase/util";
import getPosts from "../../firebase/firestore/getPosts";
// Fetch all tags from DB

const ExploreSection = () => {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostData();
  }, []);
  async function getPostData() {
    setPosts(await getPosts());
  }
  useEffect(() => {
    const fetchTags = async () => {
      const { result, error } = await getData("tags", "tags");
      if (error) {
        console.log(error);
      } else {
        const data = result.data();
        const array = [];

        for (let key in data) {
          var dataObj = { text: key, tag: data[key] };
          array.push(dataObj);
        }
        setTags(array);
      }
    };
    fetchTags();
  }, []);
  return (
    <section className="w-full h-[1200px] bg-void-950 mt-[55px]">
      <div className="flex flex-col w-full">
        <h1 className="mx-auto text-2xl font-semibold tracking-wider mt-5">
          Explore Devlogs
        </h1>
        {/* <button
          className="text-3xl bg-dark w-auto mx-auto rounded p-3"
          onClick={() =>
            tags.forEach((tag) => {
              console.log(tag.text);
            })
          }
        >
          GET TAGS
        </button> */}
        <div className="search flex flex-col w-full mx-auto text-center">
          <form action="">
            <div className="flex flex-col">
              <label htmlFor="search">Search</label>
              <input
                type="search"
                name=""
                id=""
                className="w-[500px] mx-auto bg-darkest border border-jewel-400"
              />
              <div className="grid grid-cols-3 grid-rows-6">
                {posts.map((post, index) => (
                  <UpdateCard
                    creator={post.createdBy}
                    link={post.userID}
                    title={post.title}
                    profileURL={post.createdByImage}
                    imageURL={post.URL}
                    description={post.description}
                    key={index}
                    createdDate={post.dateCreated}
                  />
                ))}
              </div>
              {/* <label htmlFor="categories">Categories</label>
              <div className="flex w-fit flex-wrap gap-4 h-[400px]">
                <Autocomplete
                  defaultItems={tags}
                  placeholder="Search for a tag"
                  // label="Select a category"
                  className=" max-h-autocomplete bg-med text-dark "
                >
                  <AutocompleteSection className="">
                    {tags.map((tag) => (
                      <AutocompleteItem key={tag.tag} className="bg-med h-[]">
                        {tag.text}
                      </AutocompleteItem>
                    ))}
                  </AutocompleteSection>
                </Autocomplete>
              </div> */}
              {/* <div className="button-wrapper flex flex-row w-[100%] h-auto">
                <input
                  type="button"
                  value="Test"
                  className="bg-dark w-fit mx-auto py-1 px-2 rounded my-3"
                />
                <input
                  type="button"
                  value="Test"
                  className="bg-dark w-fit mx-auto py-1 px-2 rounded my-3"
                />
                <input
                  type="button"
                  value="Test"
                  className="bg-dark w-fit mx-auto py-1 px-2 rounded my-3"
                />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
