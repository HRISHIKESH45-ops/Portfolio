import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              HRISHIKESH
              <br />
              <span>AHIRE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Building</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">INTELLIGENT</div>
              <div className="landing-h2-2">SOFTWARE</div>
            </h2>
            <p className="landing-subtitle">
              Python Developer • AI Engineer • Data Analyst
            </p>
            <p className="landing-description">
              Building practical software and data-driven solutions while preparing for a career in Artificial Intelligence and Machine Learning.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
