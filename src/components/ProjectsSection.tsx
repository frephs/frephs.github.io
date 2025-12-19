import React from "react";
import "./ProjectsSection.css";

interface Project {
  name: string;
  link: string;
  icon: string;
  preview?: boolean;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "GetAulePolimi",
    link: "https://aule-polimi.vercel.app/",
    icon: "🏫",
    preview: true,
    description:
      "Room finder and availability checker for Politecnico di Milano",
    tech: ["Flask", "Python", "Web Scraping"],
  },
  {
    name: "Todo Nautilus Extension",
    link: "https://github.com/frephs/todo-nautilus-extension",
    icon: "✅",
    preview: false,
    description:
      "A Nautilus extension for managing todos directly from the file manager",
    tech: ["Python", "Nautilus", "Gnome Shell"],
  },
  {
    name: "PolimiPride",
    link: "https://Polimipride.it/",
    icon: "🏳️‍🌈",
    preview: true,
    description:
      "A platform to celebrate diversity and inclusion at Politecnico di Milano",
    tech: ["Web development", "Community Engagement"],
  },
  {
    name: "Summer of Math Exposition 2",
    link: "https://allroadslead2rome.vercel.app/",
    icon: "🌐",
    preview: false,
    description:
      "Mathematical and visual exploration of synchronizing automata and their pathways",
    tech: ["Creative Coding"],
  },
  {
    name: "Codex Naturalis",
    link: "https://github.com/frephs/IS24-AM21",
    icon: "📜",
    preview: false,
    description:
      "Multiplayer board game adaptation of the Codex Naturalis game",
    tech: ["Java", "Networking", "Software Engineering", "JavaFX"],
  },
  {
    name: "YourAuction",
    link: "https://frephs.github.io/polimi-tiw/",
    icon: "🛒",
    preview: true,
    description:
      "A platform for managing online auctions with real-time bidding",
    tech: ["Java", "Thymeleaf", "MySql", "Typescript", "Web Development"],
  },
  {
    name: "Collective Mailing ",
    link: "https://frephs.github.io/collective-mailing/",
    icon: "📧",
    preview: true,
    description: "A platform to organize collective mailing",
    tech: ["Web Development"],
  },
  {
    name: "Polimi Exam Calendar",
    link: "https://github.com/frephs/polimi-exam-calendar",
    icon: "📅",
    preview: false,
    description:
      "A browser extension to visualize exam schedules at Politecnico di Milano",
    tech: ["Web Development", "TypeScript", "CI/CD"],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${!project.preview ? "no-preview" : ""}`}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-name">{project.name}</div>
              </div>
              <div className="project-description">{project.description}</div>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
            {project.preview && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-link"
              >
                <div className="project-preview">
                  <iframe
                    src={project.link}
                    title={`Preview of ${project.name}`}
                    loading="lazy"
                  />
                  <div className="preview-overlay">
                    <span>Click to Open Live Site</span>
                  </div>
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
