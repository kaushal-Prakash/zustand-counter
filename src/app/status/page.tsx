'use client';
import Link from "next/link";

const CountStatus = () => {


  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-4 bg-green-600 p-3 rounded-md font-bold">Count Status</h1>
      <div className="text-center">
        <p className="text-2xl mb-4">Current Count: 0</p>
      </div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default CountStatus;
