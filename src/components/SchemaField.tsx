import React, { useState } from "react";

const SchemaField = ({ selectedSchema, options, selectSchema }: any) => {
 
  const colorMap: any = {
  account_name: "bg-red-500",
  city: "bg-red-500",
  state: "bg-red-500",
  first_name: "bg-green-500",
  last_name: "bg-green-500",
  age: "bg-green-500",
  gender: "bg-green-500",
};

const bgClass = colorMap[selectedSchema?.value] || "bg-gray-500";
  
  const [showOptions, setShowOptions] = useState<any>(false);
  const handleOptionClick = (item: any) => {
    selectSchema(item, selectedSchema);
    setShowOptions(false);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className={`w-[10px] h-[10px] rounded-full text-center ${bgClass}`}></p>
        <div className="py-1 px-2 flex w-[calc(100%-50px)] items-center justify-between border border-gray-500">
          <p>
            {selectedSchema?.label ? selectedSchema?.label : "selectedSchema"}
          </p>
          <p className="rotate-90" onClick={() => setShowOptions(!showOptions)}>
            {">"}
          </p>
        </div>
        <p className="w-[30px] bg-gray-400 text-center">--</p>
      </div>
      <div>
        {showOptions && (
          <div className="border border-gray-400 mt-2 p-2 flex flex-col gap-2">
            {options.map((opt: any, idx: number) => (
              <p
                key={idx}
                className="cursor-pointer"
                onClick={() => handleOptionClick(opt)}
              >
                {opt.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SchemaField;
