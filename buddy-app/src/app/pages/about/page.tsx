//@ts-nocheck

"use client";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function About() {
//   const router = useRouter();

//   return (
//     <div className="flex items-center justify-center h-screen bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
//       <Link
//         href="/"
//         className="absolute top-4 left-4 text-s text-blue-600 hover:underline"
//       >
//         Home
//       </Link>
//       <div className="prose m-20 opacity-90 bg-white p-6">
//         <h1 className="text-3xl block text-gray-800 font-bold mb-4">
//           Introducing Buddy App: Your Ultimate Flatmate Matching Website!
//         </h1>

//         <p>
//           Are you tired of the endless search for the perfect flatmate? Look no
//           further! Buddy App is here to revolutionize the way you find your
//           ideal living companion. Buddy App is a user-friendly website designed
//           to connect individuals in search of flatmates and properties. Our goal
//           is to make the process of finding a compatible flatmate as effortless
//           and enjoyable as possible.
//         </p>

//         <h2 className="text-2xl block text-gray-800 font-bold mt-8 mb-4">
//           Here's how Buddy App works:
//         </h2>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Create Your Profile:
//         </h3>
//         <p>
//           Start by signing up and creating your personalized profile. Tell us
//           about yourself, your preferences, and what you're looking for in a
//           flatmate. Add tags that highlight your interests, lifestyle, and
//           requirements.
//         </p>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Discover Compatible Matches:
//         </h3>
//         <p>
//           Our intelligent matching algorithm will analyze your profile and
//           preferences to suggest potential flatmates who are a great fit for
//           you. You'll only see profiles that align with your requirements and
//           share similar interests, ensuring a higher chance of finding your
//           perfect match.
//         </p>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Connect and Chat:
//         </h3>
//         <p>
//           Once you find a potential match, initiate a conversation through our
//           secure messaging system. Get to know each other better, discuss your
//           expectations, and see if you vibe well. This step allows you to build
//           a connection before making any commitments.
//         </p>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Explore Property Options:
//         </h3>
//         <p>
//           Buddy App goes beyond matching flatmates. We also provide a platform
//           to explore available properties. Browse through our listings and
//           filter them based on location, price range, and other criteria. Find
//           the perfect place to call home with your newfound buddy.
//         </p>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Make Informed Decisions:
//         </h3>
//         <p>
//           Buddy App provides you with essential information about potential
//           flatmates, such as their verified background details, rental history,
//           and reviews from previous roommates. This way, you can make informed
//           decisions and choose the right person to share your space.
//         </p>

//         <h3 className="text-xl block text-gray-800 font-bold mt-6 mb-2">
//           Find Your Perfect Fit:
//         </h3>
//         <p>
//           With Buddy App's advanced search and matching features, you can rest
//           assured that you'll find the ideal flatmate who not only matches your
//           requirements but also shares your interests and values. Building a
//           harmonious and supportive living environment has never been easier.
//         </p>

//         <p className="block text-gray-800 font-bold mt-6">
//           Say goodbye to the stress and uncertainty of finding a compatible
//           flatmate. Buddy App is your reliable companion in the quest for the
//           perfect living situation. Join our community today and let us help you
//           find your ideal flatmate match! Happy flatmate hunting with Buddy App!
//         </p>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const router = useRouter();

  const accordionData = [
    {
      title: "Create Your Profile",
      content:
        "Start by signing up and creating your personalized profile. Tell us about yourself, your preferences, and what you're looking for in a flatmate. Add tags that highlight your interests, lifestyle, and requirements.",
    },
    {
      title: "Discover Compatible Matches",
      content:
        "Our intelligent matching algorithm will analyze your profile and preferences to suggest potential flatmates who are a great fit for you. You'll only see profiles that align with your requirements and share similar interests, ensuring a higher chance of finding your perfect match.",
    },
    // Add more accordion sections as needed
  ];

  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((item) => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(../../public/4034811.jpg)] bg-cover overflow-hidden">
      <Link
        href="/"
        className="absolute top-4 left-4 text-sm text-blue-600 hover:underline"
      >
        Home
      </Link>
      <div className="prose m-20 bg-white bg-opacity-90 p-6">
        <div className="flex justify-center pt-4 text-red-500 font-bold text-3xl mb-4">
          <h1>Buddy App</h1>
        </div>
        <h1 className="text-3xl text-gray-800 font-bold mb-4">
          Introducing Buddy App: Your Ultimate Flatmate Matching Website!
        </h1>

        <p>
          Are you tired of the endless search for the perfect flatmate? Look no
          further! Buddy App is here to revolutionize the way you find your
          ideal living companion. Buddy App is a user-friendly website designed
          to connect individuals in search of flatmates and properties. Our goal
          is to make the process of finding a compatible flatmate as effortless
          and enjoyable as possible.
        </p>

        <h2 className="text-2xl text-gray-800 font-bold mt-8 mb-4">
          Here's how Buddy App works:
        </h2>

        {accordionData.map((section, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion-header cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl text-gray-800 font-bold">
                {section.title}
              </h3>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openSections.includes(index) ? "transform rotate-90" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            {openSections.includes(index) && (
              <div className="accordion-content">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}

        <p className="text-gray-800 font-bold mt-6">
          Say goodbye to the stress and uncertainty of finding a compatible
          flatmate. Buddy App is your reliable companion in the quest for the
          perfect living situation. Join our community today and let us help you
          find your ideal flatmate match! Happy flatmate hunting with Buddy App!
        </p>
      </div>
    </div>
  );
}
