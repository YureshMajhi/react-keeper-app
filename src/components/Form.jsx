import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

const Form = ({ handleClick }) => {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: "",
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const handleNoteClick = () => {
    setIsExpanded(!isExpanded);
  };

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
        className={`${
          isExpanded ? "none" : "hidden"
        } bg-gray-100 p-3 rounded-t-md shadow-md shadow-gray-500`}
        onChange={handleChange}
        value={noteItem.title}
      />
      <textarea
        name="content"
        rows={isExpanded ? "4" : "1"}
        placeholder="Take a note..."
        onChange={handleChange}
        onClick={handleNoteClick}
        className={`${
          isExpanded ? "" : "rounded-t-md"
        } bg-gray-100 p-3 rounded-b-md shadow-md shadow-gray-500`}
        value={noteItem.content}
      />

      <Zoom in={isExpanded ? true : false}>
        <button
          onClick={() => {
            handleClick(noteItem.title, noteItem.content);
            setNoteItem({ title: "", content: "" });
          }}
          className={`${
            isExpanded ? "none" : "hidden"
          } absolute bottom-[-15px] right-[15px] bg-yellow-500 text-white h-8 w-8 rounded-full`}
        >
          <AddIcon />
        </button>
      </Zoom>
    </div>
  );
};

export default Form;
