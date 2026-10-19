
import React from "react";
import {
  BsBriefcase,
  BsGeoAlt,
  BsArrowUpRight,
  BsCheck2Circle,
  BsLaptop,
  BsShieldCheck,
  BsDatabase,
  BsBarChartLine,
  BsClipboardData,
  BsFileEarmarkText,
  BsPeople,
  BsLightbulb,
  BsGraphUpArrow,
} from "react-icons/bs";

import "./Experience.css";

const experiences = [
  {
    role: "Assistant Partnership Manager",
    organisation: "TechAI Path",
    department: "Training and Mentorship Department",
    category: "Partnerships, Training & Mentorship",
    type: "Volunteer",
    location: "Kenya",
    period: "Currently Volunteering",
    accent: "technology",

    description:
      "Currently serving as Assistant Partnership Manager in the Training and Mentorship Department at TechAI Path. Contributing to partnership initiatives, training and mentorship activities, and hackathon organization to support innovation, collaboration, and practical technology skills development.",

    responsibilities: [
      {
        icon: <BsPeople />,
        text: "Support partnership development and relationship-building initiatives with organizations, institutions, and other stakeholders.",
      },
      {
        icon: <BsLightbulb />,
        text: "Contribute to the planning and coordination of training and mentorship activities that promote skills development.",
      },
      {
        icon: <BsLaptop />,
        text: "Participate in organizing hackathons, supporting event planning, coordination, and participant engagement.",
      },
      {
        icon: <BsClipboardData />,
        text: "Collaborate with team members to coordinate departmental activities and support organizational objectives.",
      },
      {
        icon: <BsGraphUpArrow />,
        text: "Contribute to initiatives that encourage innovation, technology adoption, and practical problem-solving.",
      },
      {
        icon: <BsFileEarmarkText />,
        text: "Support communication and coordination relating to partnerships, mentorship programs, and technology events.",
      },
    ],

    skills: [
      "Partnership Management",
      "Stakeholder Engagement",
      "Training & Mentorship",
      "Hackathon Organization",
      "Event Coordination",
      "Project Coordination",
      "Communication",
      "Teamwork",
      "Problem-Solving",
      "Innovation",
    ],

    takeaway:
      "Building partnerships, supporting skills development, and creating opportunities for innovation through training, mentorship, and hackathons.",
  },

  {
    role: "Industrial Attachment Trainee",
    organisation: "Kenya National Bureau of Statistics (KNBS)",
    category: "Data Management & Statistical Operations",
    type: "Industrial Attachment",
    location: "Kenya",
    period: "Industrial Attachment",
    accent: "data",

    description:
      "Gained practical exposure to statistical operations, data management, data quality assurance, and reporting. Developed a stronger understanding of how accurate and reliable data supports informed decision-making.",

    responsibilities: [
      {
        icon: <BsClipboardData />,
        text: "Assisted in collecting, entering, organizing, and managing data for statistical activities.",
      },
      {
        icon: <BsDatabase />,
        text: "Supported data cleaning and validation to improve data accuracy, consistency, and reliability.",
      },
      {
        icon: <BsBarChartLine />,
        text: "Gained practical exposure to data analysis, interpretation, and the preparation of statistical reports.",
      },
      {
        icon: <BsFileEarmarkText />,
        text: "Supported documentation, record keeping, and preparation of statistical information.",
      },
      {
        icon: <BsPeople />,
        text: "Collaborated with supervisors and team members to complete assigned tasks and support daily operations.",
      },
      {
        icon: <BsShieldCheck />,
        text: "Followed applicable procedures for data confidentiality, responsible information handling, and data quality.",
      },
    ],

    skills: [
      "Data Management",
      "Data Cleaning",
      "Data Validation",
      "Statistical Reporting",
      "Data Quality Assurance",
      "Data Analysis",
      "IT Support",
      "Technical Troubleshooting",
      "Software Installation",
      "System Maintenance",
      "Teamwork",
    ],

    takeaway:
      "Turning raw information into reliable data that supports better decisions.",
  },
];

const Experience = () => {
  return (
    <section id="work-experience" className="work-experience">
      <div className="work-experience-container">
        {/* Page Introduction */}
        <header className="work-intro">
          <span className="work-eyebrow">
            <span className="work-eyebrow-line" />
            MY PROFESSIONAL JOURNEY
          </span>

          <h2>
            Experience
            <br />
            <span>That Builds Impact.</span>
          </h2>

          <p className="work-intro-text">
            My professional journey combines technology, partnership
            development, community engagement, and statistical data
            management. Through volunteering and practical experience,
            I continue to develop skills that support innovation,
            collaboration, and informed decision-making.
          </p>

          <div className="work-intro-footer">
            <span className="work-intro-icon">
              <BsLightbulb />
            </span>

            <div>
              <strong>Learning. Building. Improving.</strong>
              <small>
                Applying knowledge to practical challenges.
              </small>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="work-focus">
            <span className="work-focus-label">
              AREAS OF EXPERIENCE
            </span>

            <div className="work-focus-list">
              <span>
                <BsPeople /> Partnerships
              </span>

              <span>
                <BsBarChartLine /> Data & Analytics
              </span>

              <span>
                <BsLaptop /> Technology
              </span>
            </div>
          </div>
        </header>

        {/* Experience Timeline */}
        <div className="work-timeline">
          {experiences.map((experience, index) => (
            <article
              className={`work-card work-card-${experience.accent}`}
              key={experience.organisation}
            >
              {/* Card Header */}
              <div className="work-card-topline">
                <span className="work-card-index">
                  EXPERIENCE / {String(index + 1).padStart(2, "0")}
                </span>

                <span className="work-card-status">
                  <span className="work-status-dot" />
                  {experience.type}
                </span>
              </div>

              {/* Role and Organisation */}
              <div className="work-card-heading">
                <div className="work-timeline-marker">
                  {experience.accent === "technology" ? (
                    <BsPeople />
                  ) : (
                    <BsDatabase />
                  )}
                </div>

                <div className="work-role-content">
                  <span className="work-role-number">
                    {String(index + 1).padStart(2, "0")} — PROFESSIONAL
                    EXPERIENCE
                  </span>

                  <h3>{experience.role}</h3>
                  <h4>{experience.organisation}</h4>

                  {experience.department && (
                    <p className="work-department">
                      {experience.department}
                    </p>
                  )}

                  <div className="work-meta">
                    <span>
                      <BsBriefcase />
                      {experience.category}
                    </span>

                    <span>
                      <BsGeoAlt />
                      {experience.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div className="work-card-summary">
                <span className="work-summary-label">
                  THE EXPERIENCE
                </span>

                <p>{experience.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="work-responsibilities-heading">
                <h4>Responsibilities &amp; Contributions</h4>

                <span>
                  {String(
                    experience.responsibilities.length
                  ).padStart(2, "0")}{" "}
                  KEY AREAS
                </span>
              </div>

              <ul className="work-responsibilities">
                {experience.responsibilities.map((item, itemIndex) => (
                  <li
                    key={`${experience.organisation}-${itemIndex}`}
                  >
                    <span className="work-responsibility-icon">
                      {item.icon}
                    </span>

                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="work-skills-section">
                <span className="work-summary-label">
                  SKILLS DEVELOPED
                </span>

                <div className="work-skill-tags">
                  {experience.skills.map((skill) => (
                    <span className="work-skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Takeaway */}
              <div className="work-impact">
                <span className="work-impact-icon">
                  <BsCheck2Circle />
                </span>

                <div>
                  <span className="work-summary-label">
                    KEY TAKEAWAY
                  </span>

                  <p>{experience.takeaway}</p>
                </div>
              </div>

              {/* Card Footer */}
              <footer className="work-card-footer">
                <span className="work-footer-brand">
                  <span className="work-footer-dot" />
                  HONTECH
                </span>

                <span className="work-footer-type">
                  {experience.period}
                </span>

                <span className="work-footer-arrow">
                  <BsArrowUpRight />
                </span>
              </footer>
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="work-closing">
          <div className="work-closing-icon">
            <BsGraphUpArrow />
          </div>

          <div className="work-closing-content">
            <span className="work-summary-label">
              WHAT DRIVES ME
            </span>

            <h3>
              Turning ideas into opportunities for growth and innovation.
            </h3>

            <p>
              I am passionate about technology, collaboration,
              continuous learning, and developing practical solutions.
              Through professional experience and volunteering, I aim
              to contribute to initiatives that create meaningful value.
            </p>
          </div>

          <a href="#contact" className="work-closing-link">
            Let's connect <BsArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
