import "./styles/EducationCertifications.css";

const EducationCertifications = () => {
  return (
    <div className="edu-cert-section section-container">
      {/* Education */}
      <div className="edu-block">
        <h3 className="title">EDUCATION</h3>
        <div className="edu-card">
          <div className="edu-header">
            <div>
              <h4>Diploma in Computer Science Engineering</h4>
              <h5>ITM (SLS) Baroda University</h5>
            </div>
            <div className="edu-grad">Expected Graduation: May 2027</div>
          </div>
          <div className="cpi-badge">
            Current CPI: <span>9.83</span>
          </div>
          <h5 className="sem-heading">Semester Results</h5>
          <div className="sem-grid">
            <div className="sem-item">
              <span className="sem-name">Semester 1</span>
              <span className="sem-score">9.65 SPI</span>
            </div>
            <div className="sem-item">
              <span className="sem-name">Semester 2</span>
              <span className="sem-score">9.83 SPI</span>
            </div>
            <div className="sem-item">
              <span className="sem-name">Semester 3</span>
              <span className="sem-score">9.84 SPI</span>
            </div>
            <div className="sem-item">
              <span className="sem-name">Semester 4</span>
              <span className="sem-score">9.96 SPI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Achievements Dual Column */}
      <div className="dual-grid">
        {/* Certifications */}
        <div className="cert-block">
          <h3 className="title">CERTIFICATIONS</h3>
          <div className="cert-list">
            <div className="cert-item">
              <h4>Google Stitch for Beginners</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/Google_Stitch_certi.jpeg"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
            <div className="cert-item">
              <h4>Introduction to Retrieval-Augmented Generation</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/RAG_cert.jpeg"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
            <div className="cert-item">
              <h4>Generative AI for All</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/Gen_AI_for_all.jpeg"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
            <div className="cert-item">
              <h4>Google Student Ambassador</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/Participation_certi.jpeg"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
            <div className="cert-item">
              <h4>Generative AI</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/Gen_AI_certificate.pdf"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
            <div className="cert-item">
              <h4>Power BI</h4>
              <p><a href={import.meta.env.BASE_URL + "Certificates/Power_BI_certificate.pdf"} target="_blank" rel="noreferrer" style={{ color: '#00d2ff', textDecoration: 'none' }}>View Certificate</a></p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="achieve-block">
          <h3 className="title">ACHIEVEMENTS</h3>
          <div className="achieve-list">
            <div className="achieve-item">
              <h4>Academic Excellence</h4>
              <p>Maintaining a 9.83 CPI throughout my Diploma in Computer Science Engineering.</p>
            </div>
            <div className="achieve-item">
              <h4>Scholarship</h4>
              <p>Recipient of the Mukhyamantri Yuva Swavalamban Yojana (MYSY) scholarship based on academic performance after Class 10.</p>
            </div>
            <div className="achieve-item">
              <h4>Continuous Learning</h4>
              <p>Committed to mastering Artificial Intelligence, Machine Learning, Data Analytics, and Software Development through practical projects and industry-recognized certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertifications;
