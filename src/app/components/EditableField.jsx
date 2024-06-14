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

const EditableField = ({ children, popupText, rounded, image, refProp }) => {
  // const [isEditing]
  const [isHover, setIsHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
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
              defaultValue={children.props.children}
            ></textarea>
          )}
          {children.type === "h1" && (
            <input
              className="bg-dark border-none h-fit w-full text-center my-auto"
              type="text"
              defaultValue={children.props.children}
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
          className={` bg-darkest z-15 w-[100%] h-[100%] absolute flex ${
            rounded ? " rounded-[50%]" : " "
          }`}
        >
          {image ? (
            <div>
              <button
                className="w-fit h-fit mx-auto my-auto"
                type="button"
                onClick={() => {
                  if (refProp) refProp.current.click();
                }}
              >
                <h1 className="text-xl font-semibold">Edit {popupText}</h1>
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
              className="w-fit h-fit mx-auto my-auto"
              onClick={() => {
                setIsEditing(!isEditing);
                setIsHover(false);
              }}
            >
              <h1 className="text-xl font-semibold">Edit {popupText}</h1>
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default EditableField;
