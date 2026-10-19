
import React from "react";
import "./About.css";
import myImage from "/Images/Obo.jpeg";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaCode,
  FaRocket,
  FaCertificate,
  FaArrowRight,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about_section">
      <div className="container about_container">

        {/* Section introduction */}
        <header className="about_heading">
          <span className="about_eyebrow">ABOUT ME</span>

          <h2>
            Building with purpose.
            <span> Growing through technology.</span>
          </h2>

          <p>
            My interests sit at the intersection of code, data, and systems thinking. I’m fascinated by how individual components come together to form something useful, reliable, and capable of making everyday tasks easier.
          </p>
        </header>

        {/* Main profile */}
        <div className="about_main">

          <div className="about_profile">
            <div className="about_image">
              <img
                src={myImage}
                alt="Henry Obonyo"
                loading="lazy"
              />
            </div>

            <div className="about_identity">
              <span className="about_status">
                <span className="status_dot" />
                TECH ENTHUSIAST
              </span>

              <h3>Henry Obonyo</h3>

              <p>
                Think beyond the problem. Build beyond the obvious.
              </p>
            </div>
          </div>

          <div className="about_story">
            <span className="about_section_label">
              BEHIND THE BUILDER
            </span>

            <h3>
              Curious mind.
              <span> Purposeful building.</span>
            </h3>

            <p>
              I approach technology with a problem-solving mindset, combining logical reasoning, creativity, and continuous learning to turn ideas into practical solutions.
            </p>

            <p>
              My interest lies in building useful software, working with data, and exploring emerging technologies—not simply to understand how they work, but to discover how they can address real challenges and create lasting value.
            </p>

            <a className="about_link" href="#projects">
              Explore my work <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Background and focus */}
        <div className="about_details">

          <section className="about_detail_section">
            <div className="about_detail_icon">
              <FaGraduationCap />
            </div>


            <div className="about_detail_body">
              <span className="about_section_label">
                THE THINKING BEHIND THE TECH
              </span>

              <h3>Building solutions that matter</h3>

              <p>
                I am driven by curiosity, analytical thinking, and the
                challenge of turning complex problems into practical
                solutions. My interests span software development, data,
                and emerging technologies, with a focus on creating
                digital products that address real-world needs.
              </p>

              <div className="about_credential">
                <FaBrain />
                <p>
                  <strong>Think Critically</strong>
                  <span>
                    Breaking down complex challenges through logical
                    reasoning, analysis, and creative problem-solving.
                  </span>
                </p>
              </div>

              <div className="about_credential">
                <FaCode />
                <p>
                  <strong>Build Purposefully</strong>
                  <span>
                    Turning ideas into practical applications and
                    digital experiences that solve meaningful problems.
                  </span>
                </p>
              </div>

              <div className="about_credential">
                <FaRocket />
                <p>
                  <strong>Keep Evolving</strong>
                  <span>
                    Exploring new technologies, learning through
                    hands-on projects, and continuously improving
                    my approach to development.
                  </span>
                </p>
              </div>
            </div>

          </section>

          <section className="about_detail_section">
            <div className="about_detail_icon">
              <FaLaptopCode />
            </div>

            <div className="about_detail_body">
              <span className="about_section_label">
                WHAT I WORK ON
              </span>

              <h3>Areas of interest</h3>

              <div className="about_expertise">
                <div className="expertise_item">
                  <span>01</span>
                  <div>
                    <h4>Software & Web Development</h4>
                    <p>
                      Responsive web applications, backend systems,
                      APIs, and database-driven solutions.
                    </p>
                  </div>
                </div>

                <div className="expertise_item">
                  <span>02</span>
                  <div>
                    <h4>Networking & IT Support</h4>
                    <p>
                      Diagnosing hardware, software, Windows, and connectivity issues while configuring LAN, Wi-Fi, and computer systems for reliable performance.
                    </p>
                  </div>
                </div>


                <div className="expertise_item">
                  <span>03</span>
                  <div>
                    <h4>Artificial Intelligence & Data</h4>
                    <p>
                      Exploring machine learning, data analysis,
                      and intelligent ways to solve real-world
                      challenges.
                    </p>
                  </div>
                </div>





                <div className="expertise_item">
                  <span>04</span>
                  <div>
                    <h4>Problem Solving</h4>
                    <p>
                      Applying logical thinking, curiosity, and
                      experimentation to turn challenges into
                      practical ideas.
                    </p>
                  </div>
                </div>





              </div>
            </div>
          </section>

        </div>

        {/* Closing statement */}
        <div className="about_motto">
          <FaBrain className="about_motto_icon" />

          <p>
            My philosophy is simple:
            <strong>
              {" "}keep learning, build thoughtfully, and create
              technology that matters.
            </strong>
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
