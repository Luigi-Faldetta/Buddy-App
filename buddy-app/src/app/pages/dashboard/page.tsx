//@ts-nocheck
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchRadius, setSearchRadius] = useState(0);
  const [searchRoomType, setSearchRoomType] = useState("");

  const router = useRouter();

  const handleClick = (e) => {
    router.push("/pages/info");
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    console.log(storedUserData);
    const selectedUser = filteredUsers.find(
      (user) => user.id === e.target.dataset.userId
    );

    if (selectedUser) {
      storedUserData.email = selectedUser.email;
      setUserData({ ...storedUserData });

      // Update the stored user data in localStorage
      localStorage.setItem("userData", JSON.stringify(storedUserData));
      console.log(storedUserData);
    }
  };

  const calculateDistance = (location1, location2) => {
    const [lat1, lon1] = location1.slice(1, -1).split(",").map(parseFloat);
    const [lat2, lon2] = location2.slice(1, -1).split(",").map(parseFloat);

    // Convert latitude and longitude to radians
    const toRadians = (degrees) => degrees * (Math.PI / 180);
    const φ1 = toRadians(lat1);
    const φ2 = toRadians(lat2);
    const Δλ = toRadians(lon2 - lon1);

    // Calculate the distance using Haversine formula
    const R = 6371; // Earth's radius in kilometers
    const a =
      Math.sin((φ2 - φ1) / 2) ** 2 +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    // Return the distance between the two locations
    console.log(distance);
    return distance;
  };

  useEffect(() => {
    // Retrieve the stored user data from localStorage
    const storedUserData = localStorage.getItem("userData");
    console.log(storedUserData);
    setSearchRadius(JSON.parse(storedUserData).radius);

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        console.log(response);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = userData
      ? users.filter((user) => {
          const distance = calculateDistance(userData.location, user.location);
          return (
            user.password !== (userData?.password || "") &&
            distance <= searchRadius
          );
        })
      : [];
    console.log(searchRadius);

    setFilteredUsers(filteredUsers);
  }, [users, userData, searchRadius, searchRoomType]);

  const handleBudgetChange = (e) => {
    const selectedBudget = e.target.value;
    setSearchRadius(Number(selectedBudget));
  };

  const handleRoomTypeChange = (e) => {
    const selectedRoomType = e.target.value;
    setSearchRoomType(selectedRoomType);
  };

  const handleLogOut = (e) => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div>
      <div className="flex justify-center mt-4">
        <h1>Buddy App</h1>
      </div>
      <button
        onClick={handleClick}
        className="border-black border-2 border-solid"
      >
        My Profile
      </button>
      <button
        onClick={handleLogOut}
        className="border-black border-2 border-solid"
      >
        Log out
      </button>

      <div>
        {userData && (
          <div>
            <h1>Welcome, {userData.firstName}!</h1>
            {/* Display other user data as needed */}
          </div>
        )}
        {/* Render the rest of your dashboard page */}
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
              onChange={handleBudgetChange}
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
              onChange={handleRoomTypeChange}
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
            {filteredUsers.map((user) => (
              <div className="w-1/3 p-4" key={user.id}>
                <div className="relative bg-gray-200 rounded-lg p-4">
                  <div className=" w-20 h-20 aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        alt="Default"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer"
                      onClick={handleClick}
                      data-user-id={user.id}
                    >
                      Tag 1
                    </button>
                    <div>
                      {user.budget} <span></span>
                      {user.date} <span></span>
                      {user.tags}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{user.firstName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

//@ts-nocheck
// "use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState, useRef } from "react";

// export default function Dashboard() {
//   const storedUserData = JSON.parse(localStorage.getItem("userData"));
//   console.log(storedUserData.image);
//   return (
//     <div>
//       <img src={storedUserData.image} alt="" />
//     </div>
//   );
// }
