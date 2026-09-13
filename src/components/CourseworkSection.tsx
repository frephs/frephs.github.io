import React from "react";
import "./CourseworkSection.css";

interface Coursework {
  name: string;
  link?: string;
  icon: string;
  description: string;
  tech: string[];
  course?: string;
}

const courseworks: Coursework[] = [
  {
    name: "Data Structures & Algorithms",
    link: "",
    icon: "📊",
    description: "Implementation of fundamental data structures and algorithms",
    tech: ["C++", "Algorithms", "Data Structures"],
    course: "Second Year",
  },
  {
    name: "Operating Systems Project",
    link: "",
    icon: "🖥️",
    description: "Kernel module development and system programming",
    tech: ["C", "Linux Kernel", "System Programming"],
    course: "Third Year",
  },
  {
    name: "Database Management System",
    link: "",
    icon: "🗄️",
    description: "Relational database design and SQL optimization",
    tech: ["SQL", "Database Design", "Optimization"],
    course: "Second Year",
  },
  {
    name: "Machine Learning Project",
    link: "",
    icon: "🤖",
    description: "Classification and regression models for real-world datasets",
    tech: ["Python", "TensorFlow", "Data Science"],
    course: "Third Year",
  },
  {
    name: "Web Technologies",
    link: "",
    icon: "🌐",
    description: "Full-stack web application with modern frameworks",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    course: "Second Year",
  },
  {
    name: "Computer Networks",
    link: "",
    icon: "🌍",
    description: "Network protocols implementation and socket programming",
    tech: ["C", "Socket Programming", "Networking"],
    course: "Third Year",
  },
];

export const CourseworkSection: React.FC = () => {
  return (
    <section id="coursework" className="coursework-section">
      <h2 className="section-title">Coursework</h2>
      <div className="coursework-grid">
        {courseworks.map((coursework, index) => (
          <div key={index} className="coursework-card">
            {coursework.link ? (
              <a
                href={coursework.link}
                target="_blank"
                rel="noopener noreferrer"
                className="coursework-link"
              >
                <div className="coursework-header">
                  <div className="coursework-icon">{coursework.icon}</div>
                  <div className="coursework-info">
                    <div className="coursework-name">{coursework.name}</div>
                    {coursework.course && (
                      <div className="coursework-course">{coursework.course}</div>
                    )}
                  </div>
                </div>
                <div className="coursework-description">
                  {coursework.description}
                </div>
                <div className="coursework-tech">
                  {coursework.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <div className="coursework-link">
                <div className="coursework-header">
                  <div className="coursework-icon">{coursework.icon}</div>
                  <div className="coursework-info">
                    <div className="coursework-name">{coursework.name}</div>
                    {coursework.course && (
                      <div className="coursework-course">{coursework.course}</div>
                    )}
                  </div>
                </div>
                <div className="coursework-description">
                  {coursework.description}
                </div>
                <div className="coursework-tech">
                  {coursework.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
