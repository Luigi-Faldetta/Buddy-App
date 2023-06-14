//@ts-nocheck

// "use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Info() {
//   const [filteredUser, setFilteredUser] = useState(null);
//   const [invited, setInvited] = useState(false);
//   const [matched, setMatched] = useState(false);
//   const [isDifferentUser, setIsDifferentUser] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("/api/users");
//         const users = response.data;
//         const selectedUserId = localStorage.getItem("selectedUserId");
//         const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

//         const filteredUser = users.find(
//           (user) => user.email === selectedUserId
//         );
//         console.log(filteredUser);
//         setFilteredUser(filteredUser);
//         setInvited(filteredUser?.invited || false);

//         setIsDifferentUser(loggedUser.email !== filteredUser.email);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleGoBack = () => {
//     router.back();
//   };

//   const handleInvite = () => {
//     if (isDifferentUser) {
//       setInvited(true);

//       const updatedUser = { ...filteredUser, invited: true };
//       axios
//         .put(`/api/invite`, updatedUser)
//         .then(() => {
//           console.log("Invitation status updated successfully");
//           setFilteredUser(updatedUser);
//         })
//         .catch((error) => {
//           console.error("Error updating invitation status:", error);
//         });
//     }
//   };

//   const handleAccept = () => {
//     if (!isDifferentUser) {
//       setMatched(true);
//       const updatedUser = { ...filteredUser, matched: true };
//       axios
//         .put(`/api/match`, updatedUser)
//         .then(() => {
//           console.log("Matched status updated successfully");
//           setFilteredUser(updatedUser);
//         })
//         .catch((error) => {
//           console.error("Error updating matched status:", error);
//         });
//     }
//   };

//   const handleDecline = () => {
//     if (!isDifferentUser) {
//       setInvited(false);
//       axios
//         .put(`/api/invite`, { email: filteredUser.email, invited: false })
//         .then(() => {
//           console.log("Invitation status updated successfully");
//           setFilteredUser(updatedUser);
//         })
//         .catch((error) => {
//           console.error("Error updating invitation status:", error);
//         });
//     }
//   };

//   return (
//     <div className="bg-[url(../../public/4034811.jpg)] bg-cover w-screen h-screen">
//       <div className="flex flex-col items-center">
//         <div className="flex justify-center pt-4 text-red-500 font-bold text-3xl mb-4">
//           <h1>Buddy App</h1>
//         </div>
//         <div className="opacity-90 p-6 bg-white rounded-md shadow-md w-3/4 h-3/4">
//           {filteredUser && (
//             <div className="text-center">
//               <h1 className="text-xl font-bold">
//                 {filteredUser.firstName}'s profile
//               </h1>
//               <h1>Budget: {filteredUser.budget}</h1>
//               <h1 className="mt-4">{filteredUser.ownDescription}</h1>
//               <h1 className="mt-2">{filteredUser.buddyDescription}</h1>
//               <img
//                 src={filteredUser.image}
//                 alt="Profile"
//                 className="mt-4 rounded-full w-48 h-48 mx-auto"
//               />
//               {filteredUser.invited && (
//                 <div className="bg-green-500 text-white p-2 w-3/4 mx-auto font-bold rounded">
//                   Invited
//                 </div>
//               )}
//               <div className="mt-4">
//                 {filteredUser.matched ? (
//                   <div className="bg-green-500 text-white p-2 w-3/4 mx-auto font-bold rounded">
//                     Matched
//                   </div>
//                 ) : (
//                   !filteredUser.invited &&
//                   isDifferentUser && (
//                     <button
//                       onClick={handleInvite}
//                       className="bg-blue-500 text-white p-2 rounded mx-auto"
//                     >
//                       {invited ? "Cancel" : "Invite"}
//                     </button>
//                   )
//                 )}
//               </div>
//               {!isDifferentUser &&
//                 filteredUser.invited &&
//                 !filteredUser.matched && (
//                   <div className="mt-4">
//                     <button
//                       onClick={handleAccept}
//                       className="bg-green-500 text-white p-2 rounded mr-2"
//                     >
//                       Accept
//                     </button>
//                     <button
//                       onClick={handleDecline}
//                       className="bg-red-500 text-white p-2 rounded"
//                     >
//                       Decline
//                     </button>
//                   </div>
//                 )}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="mt-4">
//         <button
//           onClick={handleGoBack}
//           className="bg-gray-500 text-white p-2 rounded absolute left-5 top-5"
//         >
//           Go Back
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Info() {
  const [filteredUser, setFilteredUser] = useState(null);
  const [invited, setInvited] = useState(false);
  const [matched, setMatched] = useState(false);
  const [isDifferentUser, setIsDifferentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        const users = response.data;
        const selectedUserId = localStorage.getItem("selectedUserId");
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

        const filteredUser = users.find(
          (user) => user.email === selectedUserId
        );
        console.log(filteredUser);
        setFilteredUser(filteredUser);
        setInvited(filteredUser?.invited || false);

        setIsDifferentUser(loggedUser.email !== filteredUser.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const handleInvite = () => {
    if (isDifferentUser) {
      setInvited(true);

      const updatedUser = { ...filteredUser, invited: true };
      axios
        .put(`/api/invite`, updatedUser)
        .then(() => {
          console.log("Invitation status updated successfully");
          setFilteredUser(updatedUser);
        })
        .catch((error) => {
          console.error("Error updating invitation status:", error);
        });
    }
  };

  const handleAccept = () => {
    if (!isDifferentUser) {
      setMatched(true);
      const updatedUser = { ...filteredUser, matched: true };
      setFilteredUser(updatedUser);
      axios
        .put(`/api/match`, updatedUser)
        .then(() => {
          console.log("Matched status updated successfully");
          setFilteredUser(updatedUser);
        })
        .catch((error) => {
          console.error("Error updating matched status:", error);
        });
    }
  };

  const handleDecline = () => {
    if (!isDifferentUser) {
      setInvited(false);
      axios
        .put(`/api/invite`, { email: filteredUser.email, invited: false })
        .then(() => {
          console.log("Invitation status updated successfully");
          setFilteredUser(updatedUser);
        })
        .catch((error) => {
          console.error("Error updating invitation status:", error);
        });
    }
  };

  return (
    <div className="bg-[url(../../public/4034811.jpg)] bg-cover w-screen h-screen">
      <div className="flex flex-col items-center">
        <div className="flex justify-center pt-4 text-red-500 font-bold text-3xl mb-4">
          <h1>Buddy App</h1>
        </div>
        <div className="opacity-90 p-6 bg-white rounded-md shadow-md w-3/4 h-3/4">
          {filteredUser && (
            <div className="text-center">
              <h1 className="text-xl font-bold">
                {filteredUser.firstName}'s profile
              </h1>
              <h1 className="mt-4 font-bold">Budget </h1>
              <h1 className="mt-2">{filteredUser.budget}</h1>
              <div>
                <h1 className="mt-6 font-bold">Move-in date</h1>
                <h1 className="mt-2">{filteredUser.date}</h1>
              </div>
              <div>
                <h1 className="mt-6 font-bold">Room type</h1>
                <h1 className="mt-2">{filteredUser.roomType}</h1>
              </div>
              <div>
                <h1 className="mt-6 font-bold">Who I am</h1>
                <h1 className="mt-2">{filteredUser.ownDescription}</h1>
              </div>
              <div>
                <h1 className="mt-6 font-bold">Who I'm looking for</h1>
                <h1 className="mt-2">{filteredUser.buddyDescription}</h1>
              </div>
              <div>
                <h1 className="mt-6 font-bold">My tags</h1>
                <h1 className="mt-2">{filteredUser.tags}</h1>
                <div className="flex justify-center mt-2 mb-4">
                  <div className="w-60 h-60 aspect-w-4 aspect-h-3 rounded-md overflow-hidden mt-2">
                    <img
                      src={filteredUser.image}
                      alt="Profile"
                      className="mt-2 mb-4 rounded-md w-full h-full object-cover mx-auto max-width max-height object-fit: cover opacity-100"
                    />
                  </div>
                </div>
              </div>

              {filteredUser.invited && (
                <div className="bg-green-500 text-white p-2 w-3/4 mx-auto font-bold rounded">
                  Invited
                </div>
              )}
              {filteredUser.matched && !isDifferentUser && (
                <div className="bg-green-500 text-white p-2 w-3/4 mx-auto font-bold rounded mt-4">
                  Matched
                </div>
              )}
              {!filteredUser.matched &&
                !filteredUser.invited &&
                isDifferentUser && (
                  <button
                    onClick={handleInvite}
                    className="bg-blue-500 text-white p-2 rounded mx-auto"
                  >
                    {invited ? "Cancel" : "Invite"}
                  </button>
                )}
              {!isDifferentUser &&
                filteredUser.invited &&
                !filteredUser.matched && (
                  <div className="mt-4">
                    <button
                      onClick={handleAccept}
                      className="bg-green-500 text-white p-2 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={handleDecline}
                      className="bg-red-500 text-white p-2 rounded"
                    >
                      Decline
                    </button>
                  </div>
                )}
              {filteredUser.matched && !isDifferentUser && (
                <div className="mt-4 font-bold">
                  Contact Harry at harry@email.com to buddy up!
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleGoBack}
          className="bg-gray-500 text-white p-2 rounded absolute left-5 top-5"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
