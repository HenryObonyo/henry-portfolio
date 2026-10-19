
import React, { useState } from "react";
import "./Contact.css";

import {
  BsEnvelope,
  BsGeoAlt,
  BsArrowUpRight,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsWhatsapp,
  BsTelephone,
  BsSend,
  BsCheckCircle,
  BsChatDots,
} from "react-icons/bs";

// Update these details with your real contact information.
const contactDetails = {
  email: "henryobonyo16@gmail.com",
  phone: "+254715835216",
  location: "Kenya",

  github: "https://github.com/HenryObonyo",
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile/",
  facebook: "https://www.facebook.com/profile.php?id=61577687453902",
  whatsapp: "https://wa.me/+254715835216",
};

const socialLinks = [
  {
    name: "GitHub",
    url: contactDetails.github,
    icon: BsGithub,
    description: "Explore my projects and code",
  },
  {
    name: "LinkedIn",
    url: contactDetails.linkedin,
    icon: BsLinkedin,
    description: "Connect professionally",
  },
  {
    name: "Facebook",
    url: contactDetails.facebook,
    icon: BsFacebook,
    description: "Connect with me on Facebook",
  },
  {
    name: "WhatsApp",
    url: contactDetails.whatsapp,
    icon: BsWhatsapp,
    description: "Chat with me directly",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (
      contactDetails.email === "your.email@example.com" ||
      !contactDetails.email
    ) {
      setError("Please update your email address in Contact.jsx first.");
      return;
    }

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`
    );

    window.location.href =
      `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact_container container">
        {/* Section heading */}
        <div className="contact_header">
          <span className="contact_eyebrow">
            <BsChatDots />
            LET'S CONNECT
          </span>

          <h2 className="contact_title">
            Let's build something <span>great.</span>
          </h2>

          <p className="contact_description">
            Have a project, an idea, or an opportunity? I'd love to hear
            from you. Choose your preferred way to reach me.
          </p>
        </div>

        <div className="contact_grid">
          {/* Left column */}
          <div className="contact_info">
            <div className="contact_panel">
              <h3>Get in touch</h3>
              <p>
                Whether it's web development, collaboration, or a new
                opportunity, feel free to reach out.
              </p>

              <a
                href={`mailto:${contactDetails.email}`}
                className="contact_info_item"
              >
                <span className="contact_info_icon">
                  <BsEnvelope />
                </span>

                <span className="contact_info_text">
                  <small>Email me</small>
                  <strong>{contactDetails.email}</strong>
                </span>

                <BsArrowUpRight className="contact_info_arrow" />
              </a>

              <div className="contact_info_item">
                <span className="contact_info_icon">
                  <BsGeoAlt />
                </span>

                <span className="contact_info_text">
                  <small>Location</small>
                  <strong>{contactDetails.location}</strong>
                </span>
              </div>
            </div>

            
            {/* Direct phone contact */}
            <div className="contact_call_panel">
              <div className="contact_call_icon">
                <BsTelephone />
              </div>

              <div className="contact_call_content">
                <span>Prefer a direct conversation?</span>
                <h3>Give me a call.</h3>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="contact_phone_number"
                >
                  {contactDetails.phone}
                </a>

                <p>
                  Have a project or opportunity? Feel free to call me
                  and let's talk.
                </p>

                <a
                  href={`tel:${contactDetails.phone}`}
                  className="contact_call_button"
                >
                  <BsTelephone />
                  Call Me Now
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
            

            {/* Find me online */}
            <div className="contact_social_section">
              <h3>Find me online</h3>
              <p>Connect with me on your preferred platform.</p>

              <div className="contact_social_links">
                {socialLinks.map(({ name, url, icon: Icon, description }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact_social_link"
                    aria-label={`${name}: ${description}`}
                  >
                    <span className="contact_social_icon">
                      <Icon />
                    </span>

                    <span className="contact_social_text">
                      <strong>{name}</strong>
                      <small>{description}</small>
                    </span>

                    <BsArrowUpRight className="contact_social_arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
