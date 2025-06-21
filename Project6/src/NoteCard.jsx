import React from 'react';

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <p className="card-text text-muted small">📅 {note.date}</p>
        <button className="btn btn-sm btn-danger float-end" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
