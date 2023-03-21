import React, { useState } from 'react';

export default function NewNotePage() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObject = {
      content: newNote,
      date: new Date().toLocaleString()
    };
    setNotes([...notes, newNoteObject]);
    setNewNote('');
  };

  return (
    <div>
      <h1>NOTABLE NOTES</h1>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <button type="submit">ADD NOTE</button>
      </form>

      {notes.length === 0 ? <p>No Notes Yet!</p> :
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note.content}
              <br />
              <small>{note.date}</small>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

