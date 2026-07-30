import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          MY <span>JOURNEY</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started Programming</h4>
                <h5>Foundation</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built a strong foundation in Python, Object-Oriented Programming, file handling, and software development fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics</h4>
                <h5>Analysis & Insights</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Expanded into data analysis using Pandas, NumPy, Matplotlib, and Power BI while working with real-world datasets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Development</h4>
                <h5>Application Building</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed multiple practical applications including InsightForge AI, a Student Management System, and interactive Python projects while learning MySQL and modular application architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence</h4>
                <h5>AI / ML & Data Science</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Preparing for B.Tech with a clear focus on Artificial Intelligence, Machine Learning, and Data Science while continuously expanding technical expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
