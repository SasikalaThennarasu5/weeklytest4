import React from 'react';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="row">
      {todos.length === 0 && (
        <div className="col-12 text-center text-muted">
          <p>No tasks to show.</p>
        </div>
      )}
      {todos.map((todo, index) => (
        <div className="col-md-6 mb-3" key={index}>
          <div className={`card shadow-sm border-${todo.completed ? 'secondary' : 'primary'} ${todo.completed ? 'bg-light' : 'bg-white'}`}>
            <div className="card-body">
              <div className="form-check d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={todo.completed}
                  onChange={() => onToggle(index)}
                />
                <label className="form-check-label flex-grow-1 fw-bold text-dark">
                  {todo.text}
                </label>
              </div>
              <p className="mb-1 small text-muted">Added: {todo.createdAt}</p>
              <p className="mb-2">
                Due:{' '}
                <span className={`badge ${todo.completed ? 'bg-secondary' : 'bg-warning text-dark'}`}>
                  {todo.dueDate || 'No date'}
                </span>
              </p>
              <button
                className="btn btn-sm btn-outline-danger float-end"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
