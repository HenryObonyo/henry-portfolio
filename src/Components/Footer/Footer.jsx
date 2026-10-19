import React from "react";
import "./Footer.css";

import {
  BsArrowUp,
  BsArrowUpRight,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsWhatsapp,
  BsEnvelope,
  BsTelephone,
  BsCodeSlash,
  BsHeartFill,
} from "react-icons/bs";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const footerSocials = [
  {
    name: "GitHub",
    href: "https://github.com/HenryObonyo",
    icon: BsGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/your-linkedin-profile/",
    icon: BsLinkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/your-profile",
    icon: BsFacebook,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/2547XXXXXXXX",
    icon: BsWhatsapp,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer_container container">
        <div className="footer_main">
          {/* Brand */}
          <div className="footer_brand">
            <a href="#home" className="footer_logo">
              <span className="footer_logo_icon">
                <BsCodeSlash />
              </span>

              <span className="footer_logo_text">
                HON<span>TECH</span>
              </span>
            </a>

            <p className="footer_brand_description">
              Building useful digital experiences through web development,
              creative problem-solving, and technology.
            </p>

            <div className="footer_status">
              <span className="footer_status_dot" />
              <span>Open to opportunities</span>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="footer_column">
            <h3>Explore</h3>

            <ul className="footer_links">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <BsArrowUpRight />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="footer_column">
            <h3>Connect with me</h3>

            <div className="footer_socials">
              {footerSocials.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_social_link"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                >
                  <Icon />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div className="footer_column footer_contact">
            <h3>Get in touch</h3>

            <p>
              Have a project or an idea? Let's talk about how we can
              bring it to life.
            </p>

            <a
              href="mailto:henryobonyo16@gmail.com"
              className="footer_contact_link"
            >
              <BsEnvelope />
              <span>Send me an email</span>
              <BsArrowUpRight />
            </a>

            <a
              href="#contact"
              className="footer_contact_link"
            >
              <BsTelephone />
              <span>Contact me</span>
              <BsArrowUpRight />
            </a>

            <a href="#contact" className="footer_contact_button">
              Let's work together
              <BsArrowUpRight />
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer_bottom">
          <p className="footer_copyright">
            © {currentYear} <strong>HONTECH</strong>. All rights reserved.
          </p>

          <p className="footer_made_with">
            Designed &amp; built with <BsHeartFill /> by HONTECH
          </p>

          <a href="#home" className="footer_back_top">
            <span>Back to top</span>
            <BsArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;