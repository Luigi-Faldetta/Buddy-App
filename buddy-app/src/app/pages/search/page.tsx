//@ts-nocheck
"use client";
import React, { ChangeEvent, useState } from "react";
import DateInput from "../../DateInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Slider } from "@material-tailwind/react";
const { PrismaClient } = require("@prisma/client");
import axios from "axios";

export default function Search() {
  const [sliderValue, setSliderValue] = useState(400);
  const [selectedDate, setSelectedDate] = useState("");
  const [roomType, setRoomType] = useState("");

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };
  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    console.log("this is ", userData);
    event.preventDefault();
    router.push("pages/map");
  };

  const userData = JSON.parse(localStorage.getItem("userData"));

  userData.budget = Number(sliderValue);
  userData.date = selectedDate;
  userData.roomType = roomType;
  userData.invited = false;
  userData.matched = false;

  localStorage.setItem("userData", JSON.stringify(userData));

  return (
    <div>
      <div className="relative overflow-scroll flex flex-col items-center justify-center w-screen h-screen bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
        <form
          className=" w-3/7 p-6 bg-white rounded-md shadow-md overflow-scroll h-screen"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <Link href="/" className="text-3xl font-bold  text-red-500">
              Buddy App
            </Link>
          </div>
          <div class="flex items-center py-4 overflow-x-auto whitespace-nowrap mt-6">
            <a href="/" class="text-gray-600 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>

            <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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

            <span class="text-gray-600 dark:text-gray-200">Credentials</span>

            <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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

            <span class="text-gray-600 dark:text-gray-200">You</span>

            <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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

            <span class="dark:text-gray-200 font-bold text-red-500">
              Search
            </span>
            <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
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

            <span class="text-gray-600 dark:text-gray-200">Location</span>
          </div>
          <h2 className="mt-6 font-bold text-center text-red-500">
            To finish off, give us some info about your search 🏠
          </h2>

          <label
            htmlFor="default-range"
            className="block text-sm font-semibold text-gray-800"
          >
            Select you budget
          </label>

          <div className="mt-4">
            <input
              type="range"
              min="400"
              max="2000"
              step="50"
              value={sliderValue}
              onChange={handleSliderChange}
              className="w-full appearance-none bg-gray-300 h-1 rounded-lg outline-none"
            />
            <div className="flex justify-between">
              <span className="text-gray-500">400</span>
              <span className="text-gray-500">2000</span>
            </div>
            <div className="mt-2">
              <span className="text-gray-500">
                Selected budget: {sliderValue}
              </span>
            </div>
          </div>

          <p className="block text-sm font-semibold text-gray-800 mt-4">
            Choose your move in date!
          </p>

          <DateInput
            name="date"
            value={selectedDate}
            onChange={handleDateChange}
          />

          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800 mt-4"
          >
            Choose your room type
          </label>
          <select
            className="mt-2 mb-4 border-2 border-black rounded-md border-solid"
            value={roomType}
            onChange={handleRoomTypeChange}
          >
            <option value="">Select an option</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Any">Any</option>
          </select>

          <p className="block text-sm mb-2 font-semibold text-gray-800">
            Now set your search location
          </p>

          <div className="mt-2">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6 .cursor-pointer:hover {
          cursor: pointer;
        }"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
