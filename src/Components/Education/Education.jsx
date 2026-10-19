
import React from "react";
import "./Education.css";

import {
  BsMortarboard,
  BsAward,
  BsGlobe2,
  BsBook,
  BsCheckCircle,
  BsArrowUpRight,
  BsCalendar3,
  BsLightbulb,
} from "react-icons/bs";

const education = {
  institution: "Kenya Methodist University",
  qualification: "Bachelor of Science",
  field: "Mathematics & Computer Science",
  period: "2023 — 2026",
  status: "Expected completion 2026",
  description:
    "Building a strong foundation in mathematical reasoning, computing principles, software development, and analytical problem-solving.",
};

const ciscoCourses = [
  {
    title: "Get Connected",
    description:
      "Introduction to digital literacy, computer use, and essential internet skills.",
  },
  {
    title: "Programming Essentials in C++",
    description:
      "Fundamentals of programming, code structure, variables, and problem-solving with C++.",
  },
  {
    title: "Advanced Programming in C++",
    description:
      "Further development of programming knowledge and structured problem-solving using C++.",
  },
  {
    title: "Introduction to Cybersecurity",
    description:
      "An introduction to cybersecurity concepts, common threats, and digital safety.",
  },
  {
    title: "Cybersecurity Essentials",
    description:
      "Core cybersecurity principles, security risks, and approaches to protecting systems and information.",
  },
];

const learning = {
  institution: "Internet Society",
  title: "Networking Course",
  status: "In Progress",
  description:
    "Continuing to develop networking knowledge and strengthen my understanding of network technologies and internet infrastructure.",
};

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="education-section-heading">
      <span className="education-eyebrow">{eyebrow}</span>

      <h2>
        {title}
        <br />
        <span>{highlight}</span>
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function CiscoCourse({ course, index }) {
  return (
    <article className="education-course">
      <div className="course-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="course-content">
        <h4>{course.title}</h4>
        <p>{course.description}</p>
      </div>

      <BsCheckCircle
        className="course-check"
        aria-label="Course listed"
      />
    </article>
  );
}

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        {/* Page introduction */}
        <header className="education-hero">
          <div className="education-hero-content">
            <span className="education-eyebrow">
              <span className="education-eyebrow-dot" />
              EDUCATION & DEVELOPMENT
            </span>

            <h1>
              Learning today.
              <br />
              <span>Building tomorrow.</span>
            </h1>

            <p>
              My academic journey, professional training, and continued
              learning in computing, programming, cybersecurity, and
              networking.
            </p>
          </div>

          <div className="education-hero-icon">
            <BsMortarboard aria-hidden="true" />
            <span>Knowledge in progress</span>
          </div>
        </header>

        {/* University degree */}
        <section className="education-block">
          <SectionHeading
            eyebrow="01 / FORMAL EDUCATION"
            title="Academic"
            highlight="foundation."
            description="The academic foundation behind my technical knowledge and approach to problem-solving."
          />

          <article className="degree-card">
            <div className="degree-top">
              <div className="degree-icon">
                <BsMortarboard aria-hidden="true" />
              </div>

              <span className="degree-status">
                <span />
                {education.status}
              </span>
            </div>

            <div className="degree-details">
              <span className="degree-label">UNDERGRADUATE DEGREE</span>

              <h3>{education.qualification}</h3>

              <h4>{education.field}</h4>

              <div className="degree-meta">
                <span>
                  <BsGlobe2 aria-hidden="true" />
                  {education.institution}
                </span>

                <span>
                  <BsCalendar3 aria-hidden="true" />
                  {education.period}
                </span>
              </div>

              <p>{education.description}</p>
            </div>

            <div className="degree-watermark">
              <BsMortarboard aria-hidden="true" />
            </div>
          </article>
        </section>

        {/* Cisco Networking Academy */}
        <section className="education-block">
          <SectionHeading
            eyebrow="02 / TECHNICAL TRAINING"
            title="Cisco Networking"
            highlight="Academy."
            description="Technical learning across programming, cybersecurity, digital literacy, and computing fundamentals."
          />

          <div className="cisco-panel">
            <div className="cisco-panel-header">
              <div className="provider-mark">
                <BsAward aria-hidden="true" />
              </div>

              <div className="provider-info">
                <h3>Cisco Networking Academy</h3>
                <p>Courses & technical learning</p>
              </div>

              <span className="course-count">
                {ciscoCourses.length} COURSES
              </span>
            </div>

            <div className="course-list">
              {ciscoCourses.map((course, index) => (
                <CiscoCourse
                  key={course.title}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Current learning */}
        <section className="education-block">
          <SectionHeading
            eyebrow="03 / CONTINUOUS LEARNING"
            title="Expanding my"
            highlight="networking knowledge."
            description="Continuing to develop technical knowledge beyond my formal academic studies."
          />

          <article className="learning-card">
            <div className="learning-icon">
              <BsGlobe2 aria-hidden="true" />
            </div>

            <div className="learning-content">
              <div className="learning-topline">
                <span className="learning-provider">
                  {learning.institution}
                </span>

                <span className="learning-status">
                  <span />
                  {learning.status}
                </span>
              </div>

              <h3>{learning.title}</h3>

              <p>{learning.description}</p>

              <div className="learning-focus">
                <BsBook aria-hidden="true" />
                <span>Focused on continued technical development</span>
              </div>
            </div>
          </article>
        </section>

        {/* Closing statement */}
        <footer className="education-footer">
          <div className="education-footer-icon">
            <BsLightbulb aria-hidden="true" />
          </div>

          <div className="education-footer-copy">
            <span className="education-eyebrow">MY LEARNING PHILOSOPHY</span>
            <h3>
              Knowledge creates possibilities.
              <br />
              <span>Continuous learning creates progress.</span>
            </h3>
          </div>

          <a href="#skills" className="education-footer-link">
            Explore my skills
            <BsArrowUpRight aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
