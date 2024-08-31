import React from 'react';
import './Projects.css'; // Assuming you'll add custom styles here

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This project involved working with [technologies/tools] to achieve [outcome].',
    link: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This project focused on [key aspects] and helped solve [specific problem].',
    link: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three. In this project, I worked on [feature] using [technology].',
    link: 'https://github.com/yourusername/project-three',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;