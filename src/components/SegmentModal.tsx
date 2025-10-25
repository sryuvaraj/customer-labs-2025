import React, { useState } from "react";
import SchemaSegments from "./SchemaSegments";

const SegmentModal = ({ setShowModal }: any) => {
  const initData = {
    segment_name: "",
    schema: [],
  };

  const [formData, setFormData] = useState<any>(initData);

  const handleChange = (e: any, name: string) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const saveSegment = () => {
    setShowModal(false);
    console.log(formData, "formdata");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center bg-green-800 gap-2 p-4">
        <p className="" onClick={() => setShowModal(false)}>
          {"<"}
        </p>
        <p className="font-semibold">Save Segment</p>
      </div>

      <div className="flex flex-col justify-between min-h-[calc(100%-56px)] max-h-[calc(100%-56px)] overflow-auto p-4">
        <div className="text-black">
          <div>
            <p className="">Enter the Name of the Segment</p>
            <input
              type="text"
              value={formData.segment_name}
              onChange={(e) => handleChange(e, "segment_name")}
              placeholder="Name of the Segment"
              className="border outline-0 rounded-xs text-gray-400 border-gray-400 w-full p-2 mt-4"
            />
            <p className="pt-4">
              To save your segment, you need to add the schemas to build the
              query
            </p>
          </div>
          <div className="mt-4">
            <SchemaSegments formData={formData} setFormData={setFormData} />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-10">
          <p
            className="bg-green-700 py-1 px-2 rounded-md text-white cursor-pointer"
            onClick={() => saveSegment()}
          >
            Save the Segment
          </p>
          <p className="text-red-700 cursor-pointer">Cancel</p>
        </div>
      </div>
    </div>
  );
};

export default SegmentModal;
