import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">ABOUT ME</h3>
        <h2 className="about-large-heading">Building today. <span>Learning forever.</span></h2>
        <p className="para">
          I'm Hrishikesh Ahire, a Computer Science Engineering student from Vadodara with a strong academic record and an ambition to build intelligent software.
        </p>
        <p className="para">
          My journey began with Python and has grown into Data Analytics, MySQL, Power BI, Prompt Engineering, and modern AI technologies.
        </p>
        <p className="para">
          Rather than only studying concepts, I enjoy applying them to real-world projects that improve my programming, analytical thinking, and problem-solving skills.
        </p>
        <p className="para">
          Currently, I'm preparing for B.Tech while focusing on Artificial Intelligence, Machine Learning, and Data Science.
        </p>
        <p className="para highlight-para">
          Every project I build is another step toward becoming an AI Engineer.
        </p>
      </div>
    </div>
  );
};

export default About;
