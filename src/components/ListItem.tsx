import React from "react";

const ListItem = ({ item, handleDelete, hadleEdit }: any) => {
  return (
    <div className="flex items-center gap-2">
      <p>{item?.id}</p>
      <p>{item?.task}</p>
      <p onClick={() => { hadleEdit(item?.id)}}>edit</p>
      <p
        onClick={() => { handleDelete(item?.id);
          console.log(item?.id, "oiniw");
        }}
      >
        delete
      </p>
    </div>
  );
};

export default ListItem;
