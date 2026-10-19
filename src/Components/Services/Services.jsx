
import React from "react";
import "./Services.css";

import {
  BsWindow,
  BsCodeSlash,
  BsDatabase,
  BsTerminal,
  BsBarChart,
  BsCpu,
  BsGit,
  BsBug,
  BsRouter,
  BsArrowUpRight,
  BsLayers,
} from "react-icons/bs";

const services = [
  {
    number: "01",
    icon: BsWindow,
    title: "Website & Frontend Development",
    description:
      "Responsive websites and interactive interfaces for businesses and individuals.",
    skills: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    number: "02",
    icon: BsCodeSlash,
    title: "Backend & API Development",
    description:
      "Server-side functionality and APIs for modern web applications.",
    skills: ["Node.js", "Express.js", "JavaScript", "REST APIs"],
  },
  {
    number: "03",
    icon: BsDatabase,
    title: "Database Design & Management",
    description:
      "Organized data storage, database integration, and information management.",
    skills: ["SQL", "MySQL", "MongoDB"],
  },
  {
    number: "04",
    icon: BsTerminal,
    title: "Software & Application Development",
    description:
      "Practical programming solutions designed to address specific problems.",
    skills: ["Python", "C++", "Java", "JavaScript"],
  },
  {
    number: "05",
    icon: BsBarChart,
    title: "Data Analysis & Visualization",
    description:
      "Analyzing data and presenting meaningful findings through clear reports.",
    skills: ["Python", "SQL", "Data Analysis", "Visualization"],
  },
  {
    number: "06",
    icon: BsCpu,
    title: "Machine Learning",
    description:
      "Exploring data-driven models and machine-learning techniques for problem-solving.",
    skills: ["Python", "Machine Learning", "Data"],
  },
  {
    number: "07",
    icon: BsGit,
    title: "Version Control & Collaboration",
    description:
      "Managing code changes, repositories, and collaborative development workflows.",
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    number: "08",
    icon: BsBug,
    title: "Debugging & System Improvement",
    description:
      "Identifying bugs, troubleshooting application issues, and improving existing code.",
    skills: ["Debugging", "Troubleshooting", "Code Maintenance"],
  },
  {
    number: "09",
    icon: BsRouter,
    title: "IT Support & Networking",
    description:
      "Supporting computer systems, resolving technical issues, and maintaining reliable IT environments.",
    skills: [
      "Windows Systems",
      "Troubleshooting",
      "Software Installation",
      "System Maintenance",
      "Technical Support",
      "Networking Fundamentals",
    ],
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="services_container container">
        <header className="services_header">
          <span className="services_eyebrow">
            <BsLayers />
            MY EXPERTISE
          </span>

          <h2 className="services_title">
            Technical skills.
            <span> Practical solutions.</span>
          </h2>

          <p className="services_description">
            I apply my knowledge of software development, data,
            databases, and IT systems to build useful digital
            solutions and solve technical challenges.
          </p>
        </header>

        <div className="services_content">
          <div className="services_section_heading">
            <h3>Services I offer</h3>
            <span>09 AREAS OF FOCUS</span>
          </div>

          <div className="services_list">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  className="services_item"
                  key={service.number}
                >
                  <span className="services_number">
                    {service.number}
                  </span>

                  <div className="services_item_icon">
                    <Icon />
                  </div>

                  <div className="services_item_content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>

                  <div
                    className="services_item_skills"
                    aria-label={`Technologies and skills: ${service.skills.join(", ")}`}
                  >
                    {service.skills.map((skill) => (
                      <span
                        className="services_skill"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="services_item_link"
                    aria-label={`Enquire about ${service.title}`}
                    title={`Enquire about ${service.title}`}
                  >
                    <BsArrowUpRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="services_bottom">
          <div className="services_bottom_text">
            <span className="services_bottom_label">
              HAVE A PROJECT IN MIND?
            </span>

            <p>
              Let's discuss your idea and find a practical solution.
            </p>
          </div>

          <a
            href="#contact"
            className="services_contact_link"
          >
            Let's talk
            <BsArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
