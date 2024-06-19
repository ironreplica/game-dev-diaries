import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUpToday from "./components/SignUpToday";
// import { connect } from "../../src/dbConfig/dbConfig.js";

export default function Home() {
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
