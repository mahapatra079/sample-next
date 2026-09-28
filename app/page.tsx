"use client";
 
import {useState} from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-100 dark:bg-gray-900 mb-0">
        <h1 className="text-5xl font-bold text-black dark:text-white">
          Hello,  Counter App!
        </h1>
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleIncrement}>
            Increment
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleDecrement} disabled={count === 0}>
            Decrement
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleReset} disabled={count === 0}>
            Reset
          </button>
        </div>
        <p className="mt-2 text-lg text-black dark:text-white">
          Current Count: {count}
        </p>
    </div>
  );
}



// This component is in Server Component by default.
// It can be made a Client Component by adding the "use client" directive at the top of the file.