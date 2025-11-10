import React, { useState, useEffect } from "react";

const StreetLights = () => {
  const [value, setValue] = useState<number>(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(value ==1 ? 2 : value == 2 ? 3 : 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [value]); 

  const red = () => {
    setValue(1);
  }

  const yellow = () => {
    setValue(2);
  } 

  const green = () => {
    setValue(3);
  }

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
      <div>
        <p onClick={red}>red</p>
        <p onClick={yellow}>yellow</p>
        <p onClick={green}>green</p>
      </div>
    </div>
  );
};

export default StreetLights;
