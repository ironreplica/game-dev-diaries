import Image from "next/image";
import HeroSection from "./components/HeroSection";
import { getAuth } from "firebase/auth";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUpToday from "./components/SignUpToday";
import AdminHeroSection from "./components/AdminHeroSection";
import firebase_app from "../firebase/config";
// import { connect } from "../../src/dbConfig/dbConfig.js";

export default function Home() {
  const auth = getAuth(firebase_app);
  const loggedIn = auth.currentUser;
  console.log(loggedIn);
  if (loggedIn) {
    return (
      <main>
        <Navbar />
        <AdminHeroSection />
        <Feed />
        <Footer />
      </main>
    );
  } else {
    return (
      <main>
        <Navbar />
        <HeroSection />
        <SignUpToday />
        <Feed />
        <Footer />
      </main>
    );
  }
}
