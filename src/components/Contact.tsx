import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>LET'S BUILD SOMETHING</h3>
        <h2 className="contact-headline">
          Open to internships. <span>Open to collaboration.</span> Always learning.
        </h2>
        <p className="contact-desc">
          Whether you're looking for a Python developer, a data analytics enthusiast, or someone eager to contribute to AI-driven projects, I'd be excited to connect and explore new opportunities.
        </p>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hrishikesh.ahire2007@gmail.com" data-cursor="disable">
                hrishikesh.ahire2007@gmail.com
              </a>
            </p>
            <h4>Resume</h4>
            <p>
              <a href={import.meta.env.BASE_URL + "Hrishikesh_Ahire_Resume.docx"} target="_blank" data-cursor="disable">
                Download Resume <MdArrowOutward />
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/HRISHIKESH45-ops"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/hrishikesh-ahire-67886b384/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and developed by <span>Hrishikesh Ahire</span>.
            </h2>
            <p className="footer-tech">
              Powered by React, Three.js, GSAP, and modern web technologies.
            </p>
            <h5>
              <MdCopyright /> 2027 Hrishikesh Ahire. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
