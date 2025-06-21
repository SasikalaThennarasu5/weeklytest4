import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAdd = () => {
    if (task.trim() !== '') {
      const newTask = {
        text: task,
        completed: false,
        createdAt: new Date().toLocaleString(),
        dueDate: dueDate
      };
      setTodos([newTask, ...todos]);
      setTask('');
      setDueDate('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'all' ? true :
    filter === 'active' ? !todo.completed :
    todo.completed
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Enhanced To-Do List</h2>
      <div className="mb-3 row">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-primary w-100" onClick={handleAdd}>Add</button>
        </div>
      </div>

      <div className="mb-3 text-center">
        <button className={`btn btn-outline-secondary me-2 ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
        <button className={`btn btn-outline-secondary me-2 ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>Active</button>
        <button className={`btn btn-outline-secondary ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <TodoList todos={filteredTodos} onToggle={toggleComplete} onDelete={handleDelete} />
    </div>
  );
};

export default App;
