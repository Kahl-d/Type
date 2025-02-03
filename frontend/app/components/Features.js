"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Cloud Sync", description: "Sync your notes across all devices." },
  { title: "Easy Organization", description: "Folders, tags, and search make it seamless." },
  { title: "Secure & Private", description: "Your notes are encrypted for security." },
];

export default function Features() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Why Choose NoteMate?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
