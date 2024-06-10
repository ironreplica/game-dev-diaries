import { push, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { database } from "../../config";

export default function addData() {
  handleAddData = () => {
    try {
      const usersRef = ref(database, "users");
      const newDataRef = push(usersRef);

      set(newDataRef, {
        // data for database
        title: title,
        subtitle: subtitle,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
