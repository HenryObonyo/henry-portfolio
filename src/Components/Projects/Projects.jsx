
import React from "react";
import "./Projects.css";

// Add your screenshots to public/Images/Projects/
const projects = [
  {
    number: "01",
    name: "Connell",
    title: "Hygiene Management System",
    category: "MANAGEMENT SYSTEM",
    description:
      "A hygiene management solution focused on inspection tracking, cleaning schedules, sanitation reporting, and monitoring hygiene compliance.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/Images/connel.png",
    github: "",
    demo: "",
  },
  {
    number: "02",
    name: "Staff Leave",
    title: "Request System",
    category: "WORKFORCE MANAGEMENT",
    description:
      "A full-stack platform for staff leave applications, HR approvals, employee administration, dashboards, analytics, and audit logs.",
    technologies: ["React", "Express.js", "PostgreSQL"],
    image: "/Images/staff.png",
    github:
      "https://github.com/HenryObonyo/STAFF-LEAVE-REQUEST-SYSTEM",
    demo: "",
  },
  {
    number: "03",
    name: "Elimu",
    title: "Student Portal",
    category: "EDUCATION TECHNOLOGY",
    description:
      "A student portal that brings together course access, student profiles, messaging, and account settings in one accessible interface.",
    technologies: ["React", "Vite", "CSS"],
    image: "/Images/student.png",
    github: "",
    demo: "",
  },
];

// Reusable card for every project
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Project screenshot */}
      <div className="project-image">
        <div className="image-placeholder">
          <span className="placeholder-symbol">↗</span>
          <strong>PROJECT SCREENSHOT</strong>
          <span>Add your screenshot here</span>
        </div>

        <img
          src={project.image}
          alt={`${project.name} ${project.title} screenshot`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />

        <span className="project-number">{project.number}</span>
      </div>

      {/* Project information */}
      <div className="project-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.name}</h3>
        <h4>{project.title}</h4>

        <p className="project-description">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {/* Project links */}
        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button primary-button"
            >
              GitHub Repository <span>↗</span>
            </a>
          ) : (
            <span className="link-unavailable">
              Repository link to be added
            </span>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-button secondary-button"
            >
              Live Demo <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section introduction */}
        <header className="projects-header">
          <div>
            <span className="section-label">
              <span className="label-line" />
              MY PROJECTS
            </span>

            <h2>
              Thoughtfully engineered,, solving
              <br />
              <span>real-world problems.</span>
            </h2>
          </div>

          <p className="section-description">
          A showcase of web applications developed using modern frontend and backend technologies, featuring workflow automation, data management, administrative dashboards, and user-focused functionality.
          </p>
        </header>

        {/* Project cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* Closing statement */}
        <div className="projects-footer">
          <span className="footer-dot" />
          <p>
            Building intelligent solutions. Delivering real impact. Driving innovation.
          </p>
          <span className="footer-logo">H.O.N</span>
        </div>
      </div>
    </section>
  );
}
