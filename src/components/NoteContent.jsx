import React from "react";

const NoteContent = ({ title, content }) => {
  return (
    <div className="shadow-sm shadow-gray-500 rounded-md px-4 py-2 m-2 inline-block max-w-[400px]">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default NoteContent;
