// //@ts-nocheck
// "use client";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Info() {
//   const [userData, setUserData] = useState(null);
//   const [users, setUsers] = useState([]);
//   const filteredUser = users.filter(
//     (user) => user.firstName === (userData?.firstName || "")
//   );
//   useEffect(() => {
//     // Retrieve the stored user data from localStorage
//     const storedUserData = localStorage.getItem("userData");
//     if (storedUserData) {
//       setUserData(JSON.parse(storedUserData));
//       console.log(JSON.parse(storedUserData));
//     }
//   }, []);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("/api/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchUsers();
//   }, []);
//   return (
//     <div>
//       <div>
//         {userData && (
//           <div>
//             <h1>
//               Welcome, {userData.firstName}! Your budget is {userData.budget}
//               and image is {userData.image}
//             </h1>
//             <img src={userData.image} alt="bla" />
//           </div>
//         )}
//       </div>
//       <div></div>
//     </div>
//   );
// }

//@ts-nocheck
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Info() {
  const [filteredUser, setFilteredUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        const users = response.data;
        const selectedUserId = localStorage.getItem("selectedUserId");
        const filteredUser = users.find(
          (user) => user.email === selectedUserId
        );
        setFilteredUser(filteredUser);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleGoBack = () => {
    // localStorage.clear();

    router.back();
  };

  return (
    <div>
      <div>
        {filteredUser && (
          <div>
            <h1>
              Welcome, {filteredUser.firstName}! Your budget is{" "}
              {filteredUser.budget} and image is {filteredUser.image}
            </h1>
            <img src={filteredUser.image} alt="Profile" />
          </div>
        )}
      </div>
      <div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
}
