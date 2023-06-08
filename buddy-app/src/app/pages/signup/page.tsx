"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup() {
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

  const handleSubmit = (event: any) => {
    // const router = useRouter();
    event.preventDefault();
    router.push("/pages/profile");
  };
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
        <div className="opacity-90 w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl h-2/4">
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
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
