//@ts-nocheck
"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Info() {
  const [userData, setUserData] = useState(null);
  const [users, setUsers] = useState([]);
  const filteredUser = users.filter(
    (user) => user.firstName === (userData?.firstName || "")
  );
  useEffect(() => {
    // Retrieve the stored user data from sessionStorage
    const storedUserData = sessionStorage.getItem("userData");

    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);
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
  return (
    <div>
      <div>
        {userData && (
          <div>
            <h1>
              Welcome, {userData.firstName}! Your budget is {userData.budget}
            </h1>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}
