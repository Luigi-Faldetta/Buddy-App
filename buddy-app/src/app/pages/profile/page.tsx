//@ts-nocheck
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Profile() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [flatmate, setFlatmate] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const router = useRouter();

  const handleImageChange = (event: any) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };

  const handleFlatmateChange = (event: any) => {
    setFlatmate(event.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setSelectedCheckboxes((prevSelected) => [...prevSelected, name]);
    } else {
      setSelectedCheckboxes((prevSelected) =>
        prevSelected.filter((checkbox) => checkbox !== name)
      );
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Process form data

    router.push("/pages/search");
  };

  const userData = JSON.parse(sessionStorage.getItem("userData"));

  userData.image = image;
  userData.ownDescription = description;
  userData.buddyDescription = flatmate;
  userData.tags = selectedCheckboxes;

  sessionStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen  bg-[url(../../public/4034811.jpg)] bg-cover  overflow-hidden">
      <form
        className="opacity-90 w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl h-3/4 overflow-scroll overflow-x-hidden"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <Link href="/" className="text-3xl font-bold  text-red-500">
            Buddy App
          </Link>
        </div>
        <h2 className="mt-6 font-bold text-center text-red-500 pb-5">
          Nice one! Time to create a profile 😎
        </h2>
        <h2 className="block text-sm font-semibold text-gray-800 pb-2">
          Upload your profile picture
        </h2>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
            <div className="h-full w-full text-center flex flex-col items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                <img
                  className="has-mask h-36 object-center"
                  src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                  alt="freepik image"
                />
              </div>
              <p className="pointer-none text-gray-500 ">
                <span className="text-sm">Drag and drop</span> files here <br />{" "}
                or{" "}
                <a href="" id="" className="text-blue-600 hover:underline">
                  select a file
                </a>{" "}
                from your computer
              </p>
            </div>
            <input
              type="file"
              className="hidden"
              value={image}
              onChange={handleImageChange}
            />
          </label>
        </div>
        <p className="text-sm text-gray-300">
          <span>File type: JPEG or PNG</span>
        </p>
        <div className="mb-4 mt-4 h-2/5">
          <label
            htmlFor="text"
            className="block text-sm font-semibold text-gray-800"
          >
            Tell us something about you and your interests 🏄
          </label>
          <input
            value={description}
            onChange={handleDescriptionChange}
            type="text"
            className="block w-full h-3/4 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mb-4 mt-4 h-2/5">
          <label
            htmlFor="text"
            className="block text-sm font-semibold text-gray-800"
          >
            What should your ideal flatmate be like?
          </label>
          <input
            value={flatmate}
            onChange={handleFlatmateChange}
            type="text"
            className="block w-full h-3/4 px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <fieldset>
          <legend className="mb-6 block text-sm font-semibold text-gray-800">
            Now you can add tags to help us find the right buddy for you
          </legend>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="swords"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="hammer"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="axe"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="horns">
                Horns <span w-px>❓</span>
              </label>
            </div>
          </div>
        </fieldset>
        <div>
          <h3>Selected Checkboxes:</h3>
          {selectedCheckboxes.length === 0 ? (
            <p>No checkboxes selected.</p>
          ) : (
            <ul>
              {selectedCheckboxes.map((checkbox) => (
                <li key={checkbox}>{checkbox}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-2">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
