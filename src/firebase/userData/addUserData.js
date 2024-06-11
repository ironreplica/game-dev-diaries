"use client";
import firebase_app from "../config";
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  GeoPoint,
} from "firebase/firestore";
import { useUser } from "../auth/useUser";

const db = getFirestore(firebase_app);

// const addData = () => {
//   const { user } = useUser();
//   sendData();
// }

export const writeToFirstore = () => {
  const { user } = useUser();

  const sendData = async () => {
    try {
      const userDoc = doc(db, collection, user.id);
      await setDoc(userDoc, {
        string_data: "Benjamin Carlson",
        number_data: 2,
        boolean_data: true,
        map_data: { stringInMap: "Hi", numberInMap: 7 },
        array_data: ["text", 4],
        null_data: null,
        time_stamp: Timestamp.fromDate(new Date("December 17, 1995 03:24:00")),
        geo_point: new GeoPoint(34.714322, -131.468435),
      });
      alert("data successfully pushed.");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  sendData();
};

// export default function addData() {
//   const { user } = useUser();
//   let result = null;
//   let error = null;

//   try {
//     const userDoc = doc(db, collection, user.id);
//     result = setDoc(userDoc, {
//       string_data: "test!",
//     });
//     alert("data sent!");
//   } catch (e) {
//     error = e;
//   }
//   return { result, error };
// }
