// components/Skills.jsx
import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Git', 'Figma'];

  return (
    <section id="skills" className="my-5">
      <h2 className="text-success">Skills</h2>
      <div className="d-flex flex-wrap gap-3 mt-3">
        {skills.map((skill, index) => (
          <span key={index} className="badge bg-gradient text-dark border border-dark px-3 py-2" style={{ backgroundColor: '#f1f1f1' }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
