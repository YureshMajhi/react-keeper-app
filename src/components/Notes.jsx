import React from "react";
import notes from "../notes.js";
import NoteContent from "./NoteContent.jsx";

const Notes = ({ note, handleDelete }) => {
  return (
    <div className="flex flex-wrap justify-start">
      {note.map((notes) => (
        <NoteContent
          key={notes.id}
          id={notes.id}
          title={notes.title}
          content={notes.content}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Notes;
