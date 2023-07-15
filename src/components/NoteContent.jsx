import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const NoteContent = ({ id, title, content, handleDelete }) => {
  return (
    <div className="relative shadow-sm shadow-gray-500 rounded-md pl-4 pt-2 pb-12 pr-12 m-2 inline-block max-w-[400px] bg-gray-100">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="absolute bottom-[8px] right-[8px] text-yellow-500"
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default NoteContent;
