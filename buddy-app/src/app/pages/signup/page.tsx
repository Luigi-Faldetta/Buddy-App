//@ts-nocheck
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const handleSubmit = async ({ email, password }: any) => {
  //   // event.preventDefault();
  //   const { data } = await axios.post("/pages/api", {
  //     email,
  //     password,
  //   });

  //   // Process form data

  //   router.push("/pages/profile");
  // };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleSurnameChange = (event: any) => {
    setSurname(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    // const router = useRouter();
    event.preventDefault();
    router.push("/pages/profile");
  };

  const userData = JSON.parse(sessionStorage.getItem("userData")) || {};

  userData.firstName = name;
  userData.lastName = surname;
  userData.email = email;
  userData.password = password;

  sessionStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
        <div className="opacity-90 w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl h-3/4">
          <div className="text-center">
            <Link href="/" className="text-3xl font-bold  text-red-500">
              Buddy App
            </Link>
          </div>

          <h2 className="mt-6 font-bold text-center text-red-500">
            Let's get you set up with your login details ✍️
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Surname
              </label>
              <input
                value={surname}
                onChange={handleSurnameChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
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
                value={password}
                onChange={handlePasswordChange}
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 mt-4"
              >
                Confirm you password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
