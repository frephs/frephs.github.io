import React from "react";
import "./CVSection.css";

interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

const education: Education[] = [
  {
    degree: "Master's Degree in Computer Science and Engineering",
    institution: "Politecnico di Milano",
    period: "2025 - Present",
  },
  {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    institution: "Politecnico di Milano",
    period: "2021 - 2025",
  },
];

const skills = [
  "C++",
  "Java",
  "Python",
  "TypeScript",
  "Web Development",
  "CI/CD",
  "SQL",
  "Software Engineering",
  "Distributed Systems",
  "Creative Coding",
  "Linux",
];

export const CVSection: React.FC = () => {
  return (
    <section id="cv" className="cv-section">
      <h2 className="cv-title">About me</h2>
      <div className="cv-bio-row">
        <div className="cv-bio-card">
          <p className="cv-bio-text">
            I'm a Computer Science and Engineering student at Politecnico di
            Milano, passionate about building software to solve complex
            problems. With experience in full-stack development, I love creating
            tools that make a difference.
          </p>
        </div>
        <div className="cv-profile-container">
          <img
            src="/img/profile.jpg"
            alt="Francesco Genovese"
            className="cv-profile-pic"
          />
        </div>
        <a
          href="/Francesco_Genovese_CV.pdf"
          download
          className="cv-download-button-inline"
        >
          <span className="download-icon">📥</span>
          Download CV
        </a>
      </div>
      <div className="cv-content">
        <div className="cv-column">
          <div className="cv-card">
            <h3 className="cv-card-title">
              <span className="cv-icon">🎓</span>
              Education
            </h3>
            <div className="cv-items">
              {education.map((edu, index) => (
                <div key={index} className="cv-item">
                  <div className="cv-item-header">
                    <div className="cv-item-text">
                      <h4 className="cv-item-title">{edu.degree}</h4>
                      <p className="cv-item-org">{edu.institution}</p>
                      <p className="cv-item-period">{edu.period}</p>
                    </div>
                    <img
                      src="/img/polimi.jpg"
                      alt="Politecnico di Milano"
                      className="cv-university-logo"
                    />
                  </div>
                  {edu.details && (
                    <p className="cv-item-details">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cv-column">
          <div className="cv-card cv-card-skills">
            <h3 className="cv-card-title">
              <span className="cv-icon">⚡</span>
              Skills & Technologies
            </h3>
            <div className="cv-skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="cv-skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
