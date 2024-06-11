"use client";
import firebase_app from "../../firebase/config";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../context/AuthContext";
import React from "react";
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

  const sendData = async () => {
    try {
      const userDoc = doc(db, "users", user.id);
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
  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <section className="w-full h-[1200px] bg-darkest">
      <div className="pt-[55px] text-center flex flex-col">
        <h1 className="text-3xl underline">New post</h1>
        <blockquote contentEditable className="w-fit text-2xl mx-auto">
          <h1>Title</h1>
        </blockquote>

        <h2 className="text-xl">{user.name}</h2>
        <h2>Upload Image</h2>
        <blockquote contentEditable className="w-[400px] h-fit mx-auto">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit unde
            voluptatem accusantium, a id laudantium?
          </p>
        </blockquote>
        <footer>6/10/2024</footer>
        {/* <button onClick={sendData}>Create post</button> */}
      </div>
    </section>
  );
};

export default CreateDevlog;
