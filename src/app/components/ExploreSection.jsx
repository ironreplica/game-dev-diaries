"use client";
import React, { useState, useEffect } from "react";
import { Firestore, QuerySnapshot, getFirestore } from "firebase/firestore";
import firebase_app from "../../firebase/config";
// import { getFirestore } from "firebase/firestore";

// import addData from "../../firebase/firestore/addData";
import addData from "../../firebase/firestore/addData";
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

const Categories = {
  FPS: "first-person-shooter",
  RTS: "real-time-strategy",
  Horror: "horror",
  Survival: "survival",
  "2D": "2d",
  Voxel: "voxel",
  "Open World": "open-world",
  Tabletop: "tabletop",
  Rhythm: "rhythm",
  RPG: "role-playing-game",
  MMORPG: "massively-multiplayer-online-role-playing-game",
  MOBA: "multiplayer-online-battle-arena",
  Puzzle: "puzzle",
  Simulation: "simulation",
  Sports: "sports",
  Racing: "racing",
  Fighting: "fighting",
  Platformer: "platformer",
  Stealth: "stealth",
  "Visual Novel": "visual-novel",
  "Interactive Story": "interactive-story",
  "Text Adventure": "text-adventure",
  "Graphic Adventure": "graphic-adventure",
  "Hack and Slash": "hack-and-slash",
  Sandbox: "sandbox",
  "Tower Defense": "tower-defense",
  "Turn-Based Strategy": "turn-based-strategy",
  "Card Game": "card-game",
  "Party Game": "party-game",
  Educational: "educational",
  Trivia: "trivia",
  "Board Game": "board-game",
  Roguelike: "roguelike",
  Idle: "idle",
  VR: "virtual-reality",
  AR: "augmented-reality",
  Metroidvania: "metroidvania",
  "Battle Royale": "battle-royale",
  Clicker: "clicker",
  "Puzzle Platformer": "puzzle-platformer",
  "Tactical RPG": "tactical-rpg",
  "Survival Horror": "survival-horror",
  "Life Simulation": "life-simulation",
  "Dating Sim": "dating-sim",
  "Economy Simulation": "economy-simulation",
  "Space Simulation": "space-simulation",
  "City Building": "city-building",
  Strategy: "strategy",
  "4X": "4x",
  MMO: "massively-multiplayer-online",
  Artillery: "artillery",
  "Battle Card": "battle-card",
  "Trivia Quiz": "trivia-quiz",
  Arcade: "arcade",
  Casual: "casual",
  "Co-op": "co-op",
  Shooter: "shooter",
  "MMO Shooter": "mmo-shooter",
  "Text-based": "text-based",
  Fantasy: "fantasy",
  "Sci-Fi": "sci-fi",
  Historical: "historical",
  Western: "western",
  Military: "military",
  Espionage: "espionage",
  Political: "political",
  Pirates: "pirates",
  Ninjas: "ninjas",
  Zombies: "zombies",
  Vampires: "vampires",
  "Post-apocalyptic": "post-apocalyptic",
  Steampunk: "steampunk",
  Cyberpunk: "cyberpunk",
  Mecha: "mecha",
  Mystery: "mystery",
  Crime: "crime",
  Drama: "drama",
  Comedy: "comedy",
  Hacking: "hacking",
  "Monster Tamer": "monster-tamer",
  "Alternate History": "alternate-history",
  "Survival Craft": "survival-craft",
  Tycoon: "tycoon",
  "Dungeon Crawler": "dungeon-crawler",
  "Farm Simulation": "farm-simulation",
  "Flight Simulation": "flight-simulation",
  "Space Exploration": "space-exploration",
  "Dating Simulation": "dating-simulation",
  "Text RPG": "text-rpg",
  "Idle RPG": "idle-rpg",
  "Endless Runner": "endless-runner",
  "Twin-Stick Shooter": "twin-stick-shooter",
  "Real-Time Tactics": "real-time-tactics",
  "Grand Strategy": "grand-strategy",
  "Party RPG": "party-rpg",
  "Building Simulation": "building-simulation",
  Roguelite: "roguelite",
  Deckbuilding: "deckbuilding",
  "Social Deduction": "social-deduction",
  "Time Management": "time-management",
};

const populateDB = async () => {
  // const AddData = addData(); // add data to db
  const db = getFirestore(firebase_app);
  console.log(db);
  const { result, error } = await addData("tags", "tags", Categories);
  if (error) {
    return console.log(error);
  } else {
    console.log(result);
  }
};

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
