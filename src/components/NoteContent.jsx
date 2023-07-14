import React from "react";

const NoteContent = ({ id, title, content, handleDelete }) => {
  return (
    <div className="relative shadow-sm shadow-gray-500 rounded-md px-4 pt-2 pb-6 m-2 inline-block max-w-[400px] bg-gray-100">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className="absolute bottom-0 right-[8px] text-yellow-500"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteContent;
