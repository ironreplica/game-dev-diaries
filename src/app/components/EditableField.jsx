import React from "react";
import { useState } from "react";

const EditableField = ({ placeholder, name, curText }) => {
  // const [isEditing]
  return (
    <div>
      <input type="text" name={name}>
        {curText}
      </input>
    </div>
  );
};

export default EditableField;
