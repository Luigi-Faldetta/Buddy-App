"use client";
import React, { ChangeEvent, useState } from "react";
import DateInput from "../../DateInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LocationSelector from "../../LocationSelector";

import day from "dayjs";

export default function Search() {
  const [selectedDate, setSelectedDate] = useState("");
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Process form data

    router.push("/profile");
  };
  return (
    <div>
      <div className="relative overflow-scroll flex flex-col items-center justify-center w-screen h-screen bg-[url(../../public/4034811.jpg)] bg-cover overflow-y-hidden overflow-x-hidden">
        <form
          className="opacity-90 w-3/7 p-6 bg-white rounded-md shadow-md overflow-scroll h-4/5"
          onSubmit={handleSubmit}
        >
          <div className="text-center">
            <Link href="/" className="text-3xl font-bold  text-red-500">
              Buddy App
            </Link>
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
          <input
            id="default-range"
            type="range"
            value="50"
            min="0"
            max="100"
            step="50"
            className="w-full h-2 mb-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
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
          <select className="mt-2">
            <option value="">Select an option</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Any">Any</option>
          </select>
          <div>
            <LocationSelector></LocationSelector>
          </div>

          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mt-6">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
