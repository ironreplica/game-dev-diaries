"use client";
import React, { useEffect, useState } from "react";
import UpdateCard from "./UpdateCard";
import getData from "../../firebase/firestore/getData";
import getPosts from "../../firebase/firestore/getPosts";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostData();
  }, []);
  async function getPostData() {
    setPosts(await getPosts());
  }
  console.log(posts);
  // Get the array of posts from the database
  // Get the last 6 from the array
  // Push to an array
  // Map the array
  return (
    <section className=" w-[100%] h-[1500px]  bg-void-950 flex flex-col">
      <div>
        <h1 className=" mx-auto text-center text-4xl tracking-tight pt-4 text-stark-50 pb-0 mb-0">
          Recent posts from our community
        </h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
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
      <div className="mx-auto w-[50%] flex flex-row justify-between">
        <button>Back</button>
        <button>Forward</button>
      </div>
    </section>
  );
};

export default Feed;
