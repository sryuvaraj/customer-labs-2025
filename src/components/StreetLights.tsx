import React, { useState, useEffect } from "react";

const StreetLights = () => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    // Run the light cycle continuously
    const interval = setInterval(() => {
      setValue(1); // Red
      setTimeout(() => setValue(2), 3000); // Yellow after 3s
      setTimeout(() => setValue(3), 4000); // Green after 4s
    }, 7000); // Full cycle = 7 seconds

    // Cleanup old intervals when component re-renders/unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-10">
      <div
        className={`w-[60px] h-[60px] rounded-full ${
          value === 1 ? "bg-red-500" : "bg-gray-700"
        }`}
      ></div>
      <div
        className={`w-[60px] h-[60px] rounded-full ${
          value === 2 ? "bg-yellow-400" : "bg-gray-700"
        }`}
      ></div>
      <div
        className={`w-[60px] h-[60px] rounded-full ${
          value === 3 ? "bg-green-500" : "bg-gray-700"
        }`}
      ></div>
    </div>
  );
};

export default StreetLights;
