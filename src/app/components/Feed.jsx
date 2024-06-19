"use client";
import React, { useEffect, useState } from "react";
import UpdateCard from "./UpdateCard";
import getData from "../../firebase/firestore/getData";

//! Add Image for post, and creator profile picture, and post created time.
const TestUpdate = [
  {
    creator: "Username",
    title: "Fixed no clipping",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum porro odio qui sapiente dolorum, nostrum facere explicabo minima recusandae. Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
  {
    creator: "Username",

    title: "Changed pixel art",
    description:
      "Lorem ipsum dolor sit amet consectetur Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
  {
    creator: "Username",

    title: "Game released on steam!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum porro odio qui sapiente dolorum, nostrum facere explicabo minima recusandae. Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
  {
    creator: "Username",

    title: "Solving an unsolvable bug",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum porro odio qui sapiente dolorum, nostrum facere explicabo minima recusandae. Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
  {
    creator: "Username",

    title: "Broken Physics??",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laborum porro odio qui sapiente Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
  {
    creator: "Username",

    title: "Cant Jump?",
    description:
      "Lorem consectetur adipisicing elit. Exercitationem laborum porro odio qui sapiente dolorum, nostrum facere explicabo minima recusandae. Voluptatibus aliquam dolorum in culpa hic vel quam molestiae optio!",
  },
];

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostData();
  }, []);
  async function getPostData() {
    const { result, error } = await getData("posts", "posts");
    if (error) {
      console.log(error);
    } else if (result) {
      //   console.log(result.data().posts);
      setPosts(result.data().posts);
    }
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
            title={post.title}
            profileURL={post.createdByImage}
            imageURL={post.URL}
            description={post.description}
            key={index}
            createdDate={post.dateCreated}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
