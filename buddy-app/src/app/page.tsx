//@ts-nocheck
"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { json } from "sequelize";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const router = useRouter();

  localStorage.clear();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<SubmitEvent>) => {
    event.preventDefault();
    try {
      // console.log(email);

      const response = await axios.post("/api", {
        email,
        password,
      });
      // if (response.data.message === "Authentication successful") {
      if (response.data.user) {
        console.log(response.data.user.email);
        localStorage.setItem("userData", JSON.stringify(response.data.user));
        localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
        router.push("/pages/dashboard");
        // console.log(response.data.message);
      } else {
        console.log(response.data.message);
        console.log("Nope");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
      <Link
        href="/pages/about"
        className="absolute top-4 left-4 text-s text-blue-600 hover:underline"
      >
        About
      </Link>
      <div className="opacity-90 w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-red-500">
          Buddy App
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/signup"
            className="text-xs text-blue-600 hover:underline"
          >
            Forgot your Password?
          </Link>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don't have an account yet?{" "}
          <Link
            href="/pages/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
