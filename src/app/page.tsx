'use client';
import Link from "next/link";
import React, { useState } from "react";
import 'tailwindcss/tailwind.css';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
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
