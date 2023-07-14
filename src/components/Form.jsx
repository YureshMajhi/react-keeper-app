import React, { useState } from "react";

const Form = ({ handleClick }) => {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNoteItem((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  };

  return (
    <div
      id="form"
      className="relative mt-[5rem] mb-4 flex flex-col max-w-[500px] mx-auto"
    >
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="bg-gray-100 p-3"
        onChange={handleChange}
        value={noteItem.title}
      />
      <textarea
        name="content"
        rows="4"
        placeholder="Take a content..."
        onChange={handleChange}
        className="bg-gray-100 p-3"
        value={noteItem.content}
      />
      <button
        onClick={() => {
          handleClick(noteItem.title, noteItem.content);
          setNoteItem({ title: "", content: "" });
        }}
        className="absolute bottom-[-15px] right-0 bg-yellow-500 text-white w-10 h-10 rounded-full"
      >
        Add
      </button>
    </div>
  );
};

export default Form;
