import React from "react";
import NoteContent from "./NoteContent.jsx";

const Notes = ({ note, handleDelete }) => {
  return (
    <div className="flex flex-wrap justify-start items-baseline">
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
