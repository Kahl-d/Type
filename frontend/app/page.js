"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#2C3E50]">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
