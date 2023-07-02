import React from "react";
import notes from "../notes.js";
import NoteContent from "./NoteContent.jsx";

const Notes = () => {
  return (
    <div className="mt-[5rem] flex flex-wrap justify-center">
      {notes.map((note) => (
        <NoteContent title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default Notes;
