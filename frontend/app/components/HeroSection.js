"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-[#F5F5F5]">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-7xl font-bold text-[#2C3E50]"
      >
        Welcome to{" "}
        <span className="text-[#3498DB]">
          <Typewriter
            words={["Type", "Minimal Notes", "Effortless Writing"]}
            loop={true}
            cursor
            cursorStyle="_"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl mt-4 text-[#34495E] max-w-2xl"
      >
        Simple. Fast. Beautiful. **Type** is a minimalist notes app designed for clarity and focus.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 flex space-x-4"
      >
        <Link href="/login">
          <button className="bg-[#3498DB] hover:bg-[#1D6FA5] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
            Get Started
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
