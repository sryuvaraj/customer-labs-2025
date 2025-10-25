import React, { useState } from "react";

const SchemaField = ({ selectedSchema, options, selectSchema }: any) => {
  console.log("options in SchemaField:", options);
  const [showOptions, setShowOptions] = useState<any>(false);
  const handleOptionClick = (item: any) => {
    selectSchema(item, selectedSchema);
    setShowOptions(false);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="w-[20px] text-center">a</p>
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
