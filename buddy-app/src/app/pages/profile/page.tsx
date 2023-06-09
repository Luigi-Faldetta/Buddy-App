//@ts-nocheck
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";

export default function Profile() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [flatmate, setFlatmate] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const router = useRouter();

  const fileInputRef = useRef(null);
  const dragAreaRef = useRef(null);

  const handleImageChange = (event: any) => {
    setImage(event.target.value);
  };

  const handleFileSelect = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      // Perform any necessary operations with the file
      // For example, you can set the image URL or perform validation
      const imgURL = URL.createObjectURL(file);
      setImage(imgURL);
      setIsFileUploaded(true);
    }
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

  const userData = JSON.parse(localStorage.getItem("userData"));

  userData.image = image;
  userData.ownDescription = description;
  userData.buddyDescription = flatmate;
  userData.tags = selectedCheckboxes;

  localStorage.setItem("userData", JSON.stringify(userData));

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
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap mt-6">
          <a href="/" className="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <span className="text-gray-600 dark:text-gray-200">Credentials</span>

          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <span className="text-red-500 font-bold dark:text-gray-200">You</span>

          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <span className="text-gray-600 dark:text-gray-200">Search</span>
          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <span className="text-gray-600 dark:text-gray-200">Location</span>
        </div>
        <h2 className="mt-6 font-bold text-center text-red-500 pb-5">
          Nice one! Time to create a profile 😎
        </h2>
        <h2 className="block text-sm font-semibold text-gray-800 pb-2">
          Upload your profile picture
        </h2>
        <div className="flex items-center justify-center w-full">
          <label
            className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
            htmlFor="fileInput"
            ref={dragAreaRef}
            // onDragOver={handleDragOver}
            // onDragLeave={handleDragLeave}
            // onDrop={handleDrop}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
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
                <a
                  h
                  href="#"
                  id=""
                  className="text-blue-600 hover:underline"
                  onClick={() => fileInputRef.current.click()}
                >
                  select a file
                </a>{" "}
                from your computer
              </p>
              {isFileUploaded && <p>File uploaded successfully.</p>}
            </div>
            <input
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
                id="option"
                name="Clean"
                className="mr-1"
                onChange={handleCheckboxChange}
                onChange={handleCheckboxChange}
              />
              <label for="Clean">
                Clean <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Quiet"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Quiet">
                Quiet <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Social"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Social">
                Social <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Food"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Food">
                Food <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Music"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Music">
                Music <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Garden"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Garden">
                Garden <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Sports"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Sports">
                Sports <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Games"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Games">
                Games <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Pets"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Pets">
                Pets <span w-px>❓</span>
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="option"
                name="Movies"
                className="mr-1"
                onChange={handleCheckboxChange}
              />
              <label for="Movies">
                Movies <span w-px>❓</span>
              </label>
            </div>
          </div>
        </fieldset>
        <div>
          <h3 className="mt-4">Selected Checkboxes:</h3>
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
