import React, { useState } from 'react';
import NoteCard from './NoteCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (title.trim() && content.trim()) {
      const newNote = {
        id: Date.now(),
        title,
        content,
        date: new Date().toLocaleString()
      };
      setNotes([newNote, ...notes]);
      setTitle('');
      setContent('');
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">📝 Notes App</h2>
      <div className="mb-4 row">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Content"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="btn btn-success w-100" onClick={addNote}>
            Add Note
          </button>
        </div>
        <div className="col-md-8">
          <div className="row">
            {notes.length === 0 && <p className="text-muted text-center">No notes yet</p>}
            {notes.map((note) => (
              <div className="col-md-6 mb-3" key={note.id}>
                <NoteCard note={note} onDelete={deleteNote} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
