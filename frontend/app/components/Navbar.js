"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-white text-2xl font-bold">
            MyApp
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white sm:hidden focus:outline-none"
          >
            ☰
          </button>

          <div className="hidden sm:flex space-x-6">
            <Link href="/" className="text-gray-200 hover:text-white">
              Home
            </Link>
            <Link href="/login" className="text-gray-200 hover:text-white">
              Login
            </Link>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="sm:hidden flex flex-col space-y-3 bg-gray-700 p-4"
          >
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/login" className="text-white">
              Login
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
