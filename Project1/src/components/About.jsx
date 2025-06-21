// components/About.jsx
import React from 'react';
import profilePic from '../assets/profile.jpg';

function About() {
  return (
    <section id="about" className="my-5">
      <h2 className="text-primary">About Me</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src={profilePic} alt="Profile" className="img-fluid rounded-circle shadow" style={{ maxWidth: '200px' }} />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <p className="lead">
            Hi! I'm a creative frontend developer with a passion for building interactive and visually appealing websites using React, Bootstrap, and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
