import React from "react";
import Note from "./Note.js";

const NotesList = (props) => {
  //this will only show notes with doesMatchSearch: true
  const keepSearchMatches = (note) => note.doesMatchSearch;
  const searchMatches = props.notes.filter(keepSearchMatches);

  const renderNote = (note) => (
    <Note
      removeNote={props.removeNote}
      onType={props.onType}
      note={note}
      key={note.id}
    />
  );

  const noteTagElements = searchMatches.map(renderNote);
  return <ul className="notes-list">{noteTagElements}</ul>;
};
export default NotesList;
