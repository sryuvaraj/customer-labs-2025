import React, { useState } from "react";
import SchemaField from "./SchemaField";

const SchemaSegments = ({ formData, setFormData }: any) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const options = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ];

  const [selectedSchema, setSelectedSchema] = useState<any>(null);
  const [showOptions, setShowOptions] = useState<any>(false);

  
  const selectSchema = (item: any) => {
    setSelectedSchema(item);
    setShowOptions(false);
  }

  const changeSchema = (item:any, oldI:any) => {
    const existed = formData?.schema?.find((i:any) => i.label === oldI?.label)
    const index = formData?.schema?.findIndex((i:any) => i.label === existed?.label)
    console.log(existed,"existed",item, formData?.schema,oldI)
    const updatedSchema = [...formData.schema];
  updatedSchema[index] = item; // replace old schema with new one

    console.log(updatedSchema)
     setFormData({
      ...formData,
      schema: updatedSchema
    });
  }

  const addNewSchema = () => {
    const existed = formData?.schema?.find((i:any) => i.label === selectedSchema?.label)
    if(existed) {alert("Selected schema already added"); return;}
    else if (selectedSchema === null) {alert("Please select a schema to add"); return;}
    setFormData({
      ...formData,
      schema: [...formData.schema, selectedSchema],
    });
    setSelectedSchema(null);
  };


  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 justify-end">
        <div className="flex items-center gap-2">
          <p className="w-[10px] h-[10px] rounded-full bg-[green] mt-[1px]"></p>
          <p>- UserTraits</p>
        </div>
        <div className="flex items-center gap-2 mt-[1px]">
          <p className="w-[10px] h-[10px] rounded-full bg-[red]"></p>
          <p>- GroupTraits</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-2 border-blue-500 p-2 flex flex-col gap-2">
          {formData?.schema.length > 0 ? (
            formData?.schema?.map((item: any, index: number) => (
              <div key={index}>
                <SchemaField
                  selectedSchema={item}
                 options={options.filter((opt) => opt.label !== item?.label)}
                 selectSchema={changeSchema}
                />
                <div>
                </div>
              </div>
            ))
          ) : (
            <p className="p-2 text-gray-400">No Schemas added yet</p>
          )}
        </div>
        <div className="px-2">
          <SchemaField
          selectedSchema={selectedSchema}
           options={options}
           selectSchema={selectSchema}
          />
        </div>
        <div className="flex items-center text-blue-500 font-[500]">
          <p className="text-[18px]">+</p>
          <p
            className="text-blue-500 border-b-2 border-blue-500 w-fit cursor-pointer"
            onClick={() => addNewSchema()}
          >
            Add new Schema
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchemaSegments;
