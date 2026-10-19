
import React from "react";
import "./Skills.css";

import {
  BsCodeSlash,
  BsDatabase,
  BsGraphUpArrow,
  BsLaptop,
  BsGit,
  BsCpu,
  BsArrowUpRight,
  BsCheck2Circle,
} from "react-icons/bs";

const skillGroups = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Developing responsive web applications and practical digital systems that solve everyday challenges.",
    icon: BsCodeSlash,
    skills: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Responsive Design",
    ],
    featured: true,
  },
  {
    number: "02",
    title: "Database Management",
    description:
      "Structuring, managing, and maintaining data to support reliable applications and informed decisions.",
    icon: BsDatabase,
    skills: [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Data Modeling",
      "Data Validation",
      "Data Integrity",
    ],
  },
  {
    number: "03",
    title: "Data Analytics",
    description:
      "Transforming raw information into meaningful insights through analysis, quality checks, and reporting.",
    icon: BsGraphUpArrow,
    skills: [
      "Data Cleaning",
      "Data Analysis",
      "Data Visualization",
      "Statistical Reporting",
      "Data Interpretation",
      "Quality Assurance",
    ],
  },
  {
    number: "04",
    title: "IT Support & Networking",
    description:
      "Supporting computer systems, resolving technical issues, and maintaining reliable IT environments.",
    icon: BsLaptop,
    skills: [
      "Windows Systems",
      "Troubleshooting",
      "Software Installation",
      "System Maintenance",
      "Technical Support",
      "Networking Fundamentals",
    ],
  },
  {
    number: "05",
    title: "Tools & Deployment",
    description:
      "Managing source code, debugging applications, and deploying web projects for real-world use.",
    icon: BsGit,
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "Debugging",
      "Testing",
      "Documentation",
    ],
  },
  {
    number: "06",
    title: "Computing & Innovation",
    description:
      "Applying mathematical thinking and computing principles to analyze problems and explore new technologies.",
    icon: BsCpu,
    skills: [
      "Mathematics",
      "Statistics",
      "Algorithms",
      "Computational Thinking",
      "UI/UX Principles",
      "AI/ML Fundamentals",
      "Cybersecurity Fundamentals",
    ],
  },
];

const additionalSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Analytical Reasoning",
  "Team Collaboration",
  "Microsoft Office",
  "Technical Documentation",
  "Data Confidentiality",
  "Attention to Detail",
];

function SkillCard({ group }) {
  const Icon = group.icon;

  return (
    <article
      className={`skill-card ${group.featured ? "skill-card-featured" : ""}`}
    >
      <div className="skill-card-top">
        <div className="skill-icon">
          <Icon aria-hidden="true" />
        </div>

        <span className="skill-number">{group.number}</span>
      </div>

      <h3>{group.title}</h3>

      <p className="skill-description">{group.description}</p>

      <div className="skill-tags">
        {group.skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <div className="skill-card-footer">
        <span>Core competencies</span>
        <BsArrowUpRight aria-hidden="true" />
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        {/* Section introduction */}
        <header className="skills-header">
          <div className="skills-heading-content">
            <span className="skills-eyebrow">
              <span className="skills-eyebrow-dot" />
              WHAT I BRING
            </span>

            <h2>
              Skills built around
              <br />
              <span>solving problems.</span>
            </h2>

            <p className="skills-intro">
              A combination of software development, data analytics, and
              technical support skills focused on building useful systems,
              managing information, and solving practical challenges.
            </p>
          </div>

          <div className="skills-header-note">
            <span className="skills-note-icon">
              <BsCheck2Circle aria-hidden="true" />
            </span>

            <div>
              <strong>Practical approach</strong>
              <p>
                Combining technical knowledge with analytical thinking and
                real-world application.
              </p>
            </div>
          </div>
        </header>

        {/* Skills categories */}
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillCard key={group.number} group={group} />
          ))}
        </div>

        {/* Professional strengths */}
        <div className="skills-strengths">
          <div className="strengths-heading">
            <span className="skills-eyebrow">BEYOND THE CODE</span>
            <h3>How I work</h3>
            <p>
              The habits and thinking I bring to technical projects and
              professional environments.
            </p>
          </div>

          <div className="strengths-tags">
            {additionalSkills.map((skill) => (
              <span className="strength-tag" key={skill}>
                <BsCheck2Circle aria-hidden="true" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="skills-bottom">
          <div>
            <span className="skills-bottom-label">
              MY APPROACH
            </span>

            <h3>
              Learn continuously.
              <span> Build purposefully.</span>
            </h3>
          </div>

          <a className="skills-contact-link" href="#contact">
            Let&apos;s work together
            <BsArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
