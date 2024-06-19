"use client";
import React, { Children, useRef } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const bioHoverVariants = {
  onHover: {
    opacity: 0.9,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  offHover: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const EditableField = ({
  children,
  popupText,
  rounded,
  image,
  refProp,
  itemId,
}) => {
  // const [isEditing]
  itemId = itemId | "id";
  const focusedRef = useRef();
  const [isHover, setIsHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function checkRef() {
    if (document.activeElement === focusedRef.current) {
      console.log("test");
    }
  }
  return (
    <div
      className={`p-wrapper  flex relative `}
      onMouseEnter={() => {
        if (!isEditing) setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {isEditing ? (
        <div className="text-lightest w-full bg-dark border-none font-normal mx-auto my-auto">
          {children.type === "p" && (
            <textarea
              className="bg-dark border-none h-fit w-full text-center my-auto"
              type="text"
              id={"p"}
              defaultValue={children.props.children}
            ></textarea>
          )}
          {children.type === "h1" && (
            <input
              className="bg-dark border-none h-fit w-full text-center my-auto"
              type="text"
              id={"h1"}
              defaultValue={children.props.children}
              ref={focusedRef}
              onChange={checkRef}
              onBlur={console.log("blur")}
            ></input>
          )}
        </div>
      ) : (
        children
      )}

      {!isEditing && (
        <motion.div
          variants={bioHoverVariants}
          animate={isHover ? "onHover" : "offHover"}
          initial={"offHover"}
          className={` bg-void-950 z-15 w-[100%] h-[100%] absolute flex ${
            rounded ? " rounded-[50%]" : " "
          }`}
        >
          {image ? (
            <div className="flex flex-col justify-center mx-auto">
              <button
                className="w-fit h-fit text-center mx-auto my-auto"
                type="button"
                onClick={() => {
                  if (refProp) refProp.current.click();
                }}
              >
                <h1 className="text-xl text-center my-auto w-fit mx-auto font-semibold">
                  Edit {popupText}
                </h1>
              </button>
              {/* <input
                multiple={false}
                id="files"
                type="file"
                ref={fileInputRef}
                className="hidden"
              /> */}
            </div>
          ) : (
            <button
              className="w-fit h-fit flex flex-col mx-auto my-auto"
              onClick={() => {
                setIsEditing(!isEditing);
                setIsHover(false);
              }}
            >
              <h1 className="text-xl mx-auto text-center font-semibold">
                Edit {popupText}
              </h1>
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default EditableField;
