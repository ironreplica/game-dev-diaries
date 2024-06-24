"use client";
import React, { useState, useEffect } from "react";
import { Firestore, QuerySnapshot, getFirestore } from "firebase/firestore";
import firebase_app from "../../firebase/config";
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
// Fetch all tags from DB

// const populateDB = async () => {
//   // const AddData = addData(); // add data to db
//   const db = getFirestore(firebase_app);
//   console.log(db);
//   const { result, error } = await addData("tags", "tags", Categories);
//   if (error) {
//     return console.log(error);
//   } else {
//     console.log(result);
//   }
// };

// const populateTags = async () => {
//   const { result, error } = await getData("tags", "tags");
//   if (error) {
//     return console.log(error);
//   } else {
//     const data = result.data();
//     const array = [];

//     // console.log(result.data(1));
//     for (let key in data) {
//       if (data.hasOwnProperty(key)) {
//         var dataObj = { text: key, tag: data[key] };
//         array.push(dataObj);
//       }
//     }
//     // for()

//     return array;
//     // console.log(array);
//   }
// };
const ExploreSection = () => {
  const [tags, setTags] = useState([]);

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
    <section className="w-full h-[1200px] bg-darkest mt-[55px]">
      <div className="flex flex-col w-full">
        <h1 className="mx-auto text-2xl font-semibold tracking-wider mt-5">
          Explore Devlogs
        </h1>
        <button
          className="text-3xl bg-dark w-auto mx-auto rounded p-3"
          onClick={() =>
            tags.forEach((tag) => {
              console.log(tag.text);
            })
          }
        >
          GET TAGS
        </button>
        <div className="search flex flex-col w-[800px] mx-auto text-center">
          <form action="">
            <div className="flex flex-col">
              <label htmlFor="search">Search</label>
              <input
                type="search"
                name=""
                id=""
                className="w-[500px] mx-auto bg-darkest border border-light"
              />
              <label htmlFor="categories">Categories</label>
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
              </div>
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
