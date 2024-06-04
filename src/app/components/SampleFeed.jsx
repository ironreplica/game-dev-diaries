import React from "react";
import UpdateCard from "./UpdateCard";

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

const SampleFeed = () => {
  return (
    <section className=" w-[100%] h-[1500px] bg-darkest flex flex-col">
      <div>
        <h1 className=" mx-auto text-center text-2xl font-semibold tracking-wide pt-4 text-lightest pb-0 mb-0">
          Recent updates
        </h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-2">
        {TestUpdate.map((update, index) => (
          <UpdateCard
            creator={update.creator}
            title={update.title}
            description={update.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default SampleFeed;
