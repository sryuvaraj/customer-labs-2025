import React, { useState } from "react";
import ListItem from "./ListItem";

const ToDoList = () => {
  const [list, setList] = useState<any>([]);
  const [formData, setFormData] = useState({
    task: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editableTask, setEditableTask] = useState<any>({});

  const handleChange = (e: any) => {
    if(isEditing){
         const { name, value } = e.target;
        setEditableTask({...editableTask, [name]: value})
        return;
    }
    else{
         const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    }
  };
  const handleAdd = () => {
    const data = { ...formData, id: list.length + 1 };
    setList([...list, data]);
    setFormData({ task: "" });
  };
  const handleDelete = (id: any) => {
    console.log("id", id);
    const updatedList = list.filter((item: any) => item.id != id);
    setList(updatedList);
  };

  const hadleEdit = (id: any) => {
    setIsEditing(true);
    setEditableTask(list.find((item: any) => item?.id === id));
  };
  const handleUpdate = () => {
    const updatedList = list?.map((item:any) => 
        item?.id === editableTask?.id ? {...item, task:editableTask?.task} : item
    )
    setList(updatedList);
    setIsEditing(false);
    setEditableTask({});    
  }
  return (
    <div>
      <div>
        <p>Add List</p>
        <input
          type="text"
          onChange={handleChange}
          name="task"
          value={isEditing ? editableTask?.task : formData?.task}
          placeholder="Add your task here"
        />
        {isEditing ? (<button onClick={handleUpdate}>Update</button>) : (<button onClick={handleAdd}>Add</button>)}
      </div>
      <div>
        {list?.length > 0 &&
          list?.map((item: any, index: any) => (
            <div key={index}>
              <ListItem
                item={item}
                handleDelete={handleDelete}
                hadleEdit={hadleEdit}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ToDoList;
