import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SampleFeed from "./components/SampleFeed";
import Footer from "./components/Footer";
import { connect } from "../../src/dbConfig/dbConfig.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SampleFeed />
      <Footer />
    </main>
  );
}
