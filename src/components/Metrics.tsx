import "./styles/Metrics.css";

const Metrics = () => {
  const metrics = [
    { value: "9.83", label: "Current CPI" },
    { value: "4+", label: "Technical Projects" },
    { value: "5+", label: "Professional Certifications" },
    { value: "2027", label: "Expected Graduation" },
    { value: "Python", label: "Primary Language" },
    { value: "AI", label: "Career Focus" },
  ];

  return (
    <div className="metrics-section section-container">
      <div className="metrics-container">
        <h3 className="title">KEY METRICS</h3>
        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <div className="metric-card" key={index}>
              <h2 className="metric-value">{item.value}</h2>
              <p className="metric-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;
