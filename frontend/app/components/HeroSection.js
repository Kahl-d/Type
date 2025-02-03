"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-extrabold text-white"
      >
        Welcome to{" "}
        <span className="text-blue-300">
          <Typewriter
            words={["Your App", "A New Experience", "Something Amazing"]}
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
        className="text-lg sm:text-xl mt-4 text-gray-200 max-w-2xl"
      >
        Start your journey today! Seamless login, easy-to-use features, and an
        amazing experience.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 flex space-x-4"
      >
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all">
            Get Started
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
