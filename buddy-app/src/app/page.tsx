// export default function Home() {
//   return (

//   );
// }
"use client";
// import { FormEventHandler, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { prisma } from "./db";
import { createMockUser } from "./testUtils";
import axios from "axios";

// import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  // prisma.user.create(
  //   data: {
  //     firstName: "John",
  //     lastName: "Doe",
  //     email: "johndoe@example.com",
  //     password: "password123",
  //     ownDescription: "Lorem ipsum dolor sit amet...",
  //     buddyDescription: "Lorem ipsum dolor sit amet...",
  //     budget: 1000,
  //     date: new Date(),
  //     roomType: "Private",
  //     location: "New York",
  //     radius: 10,
  //     tags: ["tag1", "tag2"],
  //     looking: true,
  //     matched: false,
  //   },
  // });

  // const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Process form data
    // const res = await signIn("credentials", {
    //   email: userInfo.email,
    //   password: userInfo.password,
    //   redirect: false,
    // });
    router.push("/pages/dashboard");
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
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
              // value={userInfo.email}
              // onChange={({ target }) =>
              //   setUserInfo({ ...userInfo, email: target.value })
              // }
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
              // value={userInfo.password}
              // onChange={({ target }) =>
              //   setUserInfo({ ...userInfo, password: target.value })
              // }
              type="password"
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
            <button
              // onClick={() => {
              //   signIn();
              // }}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
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
