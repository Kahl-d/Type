"use client";

import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    // Handle API request here
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Implement Google OAuth here
  };

  return (
    <div className={`${styles.card} bg-white p-8 rounded-lg shadow-lg w-full max-w-md`}>
      <h2 className="text-2xl font-bold text-gray-700 text-center">Welcome Back</h2>
      <p className="text-sm text-gray-500 text-center mb-4">Login to continue</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Sign in with Google
        </button>
      </div>

      <p className="text-sm text-gray-500 text-center mt-4">
        Don't have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
      </p>
    </div>
  );
}
