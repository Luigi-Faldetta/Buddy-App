//@ts-nocheck
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    // Retrieve the stored user data from sessionStorage
    const storedUserData = sessionStorage.getItem("userData");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <h1>Buddy App</h1>
      </div>
      <div>
        {userData && (
          <div>
            <h1>
              Welcome, {userData.firstName}! Your budget is {userData.budget}
            </h1>
            {/* Display other user data as needed */}
          </div>
        )}
        {/* Render the rest of your dashboard page */}
      </div>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center bg-gray-200 py-4 px-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <label htmlFor="budget" className="mr-2 font-semibold">
              Budget:
            </label>
            <select
              id="budget"
              className="border border-gray-400 px-2 py-1 rounded"
            >
              <option value="">Any</option>
              <option value="1000">$1000</option>
              <option value="2000">$2000</option>
              <option value="3000">$3000</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="roomType" className="mr-2 font-semibold">
              Room Type:
            </label>
            <select
              id="roomType"
              className="border border-gray-400 px-2 py-1 rounded"
            >
              <option value="">Any</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="studio">Studio</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="moveInDate" className="mr-2 font-semibold">
              Move-in Date:
            </label>
            <input
              type="date"
              id="moveInDate"
              className="border border-gray-400 px-2 py-1 rounded"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-3/4 h-full">
          <div className="flex flex-wrap justify-center bg-blue-400">
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 1
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 2
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            {/* Add more ad rectangles here */}
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
            <div className="w-1/3 p-4">
              <div className="relative bg-gray-200 rounded-lg p-4">
                <div className="bg-gray-300 h-0 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                  {/* Add picture goes here */}
                </div>
                <div className="mt-4">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
                    Tag 3
                  </button>
                </div>
                <p className="mt-2 text-gray-700">Example</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
