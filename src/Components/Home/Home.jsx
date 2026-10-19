
import React from "react";
import "./Home.css";

import {
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsArrowUpRight,
  BsCodeSlash,
  BsDownload,
  BsChevronDown,
  BsEnvelope,
} from "react-icons/bs";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/HenryObonyo",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/henry-obonyo-059a71362",
    icon: BsLinkedin,
  },
  {
    name: "Medium",
    url: "https://medium.com/@henryobonyo16",
    icon: BsMedium,
  },
];

const Home = () => {
  return (
    <header id="home" className="home">

      {/* Navigation */}
      <nav className="home_nav" aria-label="Main navigation">
        <div className="home_nav_container">

          <a href="#home" className="home_brand">

            <strong>Henry Obonyo</strong>
          </a>

          <div className="home_nav_links">
            <a href="#home" className="active">Home</a>
            <a href="#about">About Me</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>

            <a href="#contact">Contact</a>
            <a
              href="/My updated CV.pdf"
              target="_blank"
              rel="noopener noreferrer"

            >
              Resume
            </a>
          </div>

        </div>
      </nav>

      {/* Homepage Hero Section */}
      <div className="home_container">

        <section className="home_content" aria-labelledby="home-title">

          <div className="home_availability">
            <span className="meta_dot" />
            Building digital solutions. Solving real-world problems
          </div>

          <p className="home_greeting">
            Hello, I'm
          </p>

          <h1 id="home-title" className="home_title">
            Henry <span>Obonyo.</span>
          </h1>

          <h2 className="home_role">
            Software Developer
          </h2>

          <p className="hero_description">
            I build thoughtful digital solutions that turn complex problems into meaningful results. With a foundation in Mathematics and Computer Science, I combine software engineering, analytical thinking, and emerging technologies to develop practical, data-driven solutions that create real-world impact..
          </p>

          {/* Action Buttons */}
          <div className="home_actions">
            <a href="#projects" className="btn btn_primary">
              <BsCodeSlash />
              Explore My Work
              <BsArrowUpRight />
            </a>

          </div>



          {/* Social Links */}
          <div className="home_social_section">
            <p className="social_heading"><h2>Visit my profile</h2></p>

            <div className="home_social_links">
              {socialLinks.map(({ name, url, icon: Icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                  className="social_link"
                >
                  <Icon />
                  <span className="social_name">{name}</span>
                </a>
              ))}
            </div>
          </div>



        </section>

        {/* Profile Photo */}
        <aside className="home_profile" aria-label="My profile">

          <div className="profile_image_frame">

            <div className="profile_image_accent" />

            <img
              src="/Images/hon.jpeg"
              alt="Portrait of Henry Obonyo"
              className="profile_photo"
            />

            <div className="profile_image_label">
              <span className="profile_label_icon">
                <BsCodeSlash />
              </span>

              <div>
                <span>SOFTWARE DEVELOPMENT</span>
                <strong>Ideas into reality.</strong>
              </div>
            </div>

          </div>

        </aside>

      </div>

      {/* Scroll Indicator */}
      <div className="home_bottom">

        <span className="social_heading">
          LEARN. BUILD. IMPROVE.
        </span>

        <a href="#about" className="home_scroll">
          Discover my journey
          <BsChevronDown />
        </a>

      </div>

    </header>
  );
};

export default Home;
