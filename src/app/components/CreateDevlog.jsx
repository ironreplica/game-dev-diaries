"use client";
import firebase_app from "../../firebase/config";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";
import NewUpdateCard from "./NewUpdateCard";
import React from "react";
import EditableField from "./EditableField";
import {
  getFirestore,
  doc,
  setDoc,
  Timestamp,
  GeoPoint,
} from "firebase/firestore";
import { useUser } from "../../firebase/auth/useUser";

const db = getFirestore(firebase_app);

const CreateDevlog = () => {
  const { userAuth } = useAuthContext();
  const router = useRouter();
  const { user } = useUser();

  // const sendData = async () => {
  //   try {
  //     const userDoc = doc(db, "users", user.id);
  //     await setDoc(userDoc, {
  //       string_data: "Benjamin Carlson",
  //       number_data: 2,
  //       boolean_data: true,
  //       map_data: { stringInMap: "Hi", numberInMap: 7 },
  //       array_data: ["text", 4],
  //       null_data: null,
  //       time_stamp: Timestamp.fromDate(new Date("December 17, 1995 03:24:00")),
  //       geo_point: new GeoPoint(34.714322, -131.468435),
  //     });
  //     alert("data successfully pushed.");
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }
  // };
  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <section className="flex flex-row">
      <div className=" w-[100%] h-fit mx-auto bg-void-950 flex flex-col">
        <div className="w-fit mx-auto my-10">
          <NewUpdateCard
            creator="user"
            title="new update"
            description="description!"
            index="index"
          />
        </div>
      </div>
    </section>
  );
};

export default CreateDevlog;
