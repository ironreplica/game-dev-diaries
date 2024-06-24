"use client";
import firebase_app from "../../../firebase/config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ViewProfile from "../../components/ViewProfile";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import getData from "../../../firebase/firestore/getData";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const db = getFirestore(firebase_app);

const UserPage = () => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const searchParamsOBJ = Object.fromEntries(searchParams);
  //! Why does it only want to be called username
  const { username: uid } = useParams();

  return (
    <main>
      <Navbar />
      <ViewProfile uid={uid} />
      <Footer />
    </main>
  );
};
export default UserPage;
// export async function getServerSideProps(context) {
//   console.log(context.params);
//   const userData = context.params;
//   try {
//     // const usersnapshot = await getData('users', )
//   } catch (error) {}

//   return {
//     props: {
//       user: {
//         userData,
//       },
//     },
//   };
// }

// const userProfile = ({ user }) => {
//   return (
//     <div>
//       <h1>test</h1>
//     </div>
//   );
// };

// export default userProfile;
