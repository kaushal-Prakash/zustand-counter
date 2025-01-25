'use client';
import { countStore } from "@/store/store";
import Link from "next/link";
import React, {  } from "react";
import 'tailwindcss/tailwind.css';

export default function Home() {
  const count = countStore((state) => state.count);

  const handleIncrement = () => {
    countStore.getState().increament();
  };

  const handleDecrement = () => {
    countStore.getState().decreament();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <p className="text-xl mb-4">Counter: {count}</p>
        <div>
          <button 
            onClick={handleIncrement} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            Increase
          </button>
          <button 
            onClick={handleDecrement} 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
          >
            Decrease
          </button>
        </div>
        <div>
          <Link href="/status">Current Counter Status</Link>
        </div>
      </div>
    </div>
  );
}
