// components/Projects.jsx
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="my-5">
      <h2>Projects</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">To-Do App</h5>
              <p className="card-text">A simple task management app built with React and localStorage.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">Fetches live weather data using OpenWeather API and displays it with Bootstrap cards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
