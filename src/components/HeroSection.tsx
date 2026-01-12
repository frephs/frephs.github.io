import React, { useState, useEffect } from "react";
import { WaveAnimation } from "./WaveAnimation";
import "./HeroSection.css";

export const HeroSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ["cv", "projects", "quotes", "contacts"];
      const navbarHeight = 140; // Height of sticky navbar + padding

      // Check if we're at the very bottom of the page
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 10) {
        setActiveSection("contacts");
        return;
      }

      // Find which section is currently most visible in the viewport
      let mostVisibleSection = "";
      let maxVisibility = 0;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the section is visible, accounting for navbar
        const visibleTop = Math.max(rect.top, navbarHeight);
        const visibleBottom = Math.min(rect.bottom, viewportHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Prefer sections that are near the top of the viewport
        const topBonus = rect.top < navbarHeight + 100 ? 1.5 : 1;
        const visibility = visibleHeight * topBonus;

        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          mostVisibleSection = sectionId;
        }
      });

      setActiveSection(maxVisibility > 0 ? mostVisibleSection : "");
    };

    // Update on scroll
    let scrollTimeout: number;
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(updateActiveSection);
    };

    // Initial check
    updateActiveSection();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-wrapper">
      <div className="hero-section">
        <nav className="hero-navbar">
          <div className="navbar-left">
            <img
              src="/img/profile.jpg"
              alt="Francesco Genovese"
              className="profile-picture"
            />
            <div className="navbar-info">
              <h2 className="navbar-name">Francesco Genovese</h2>
              <p className="navbar-bio">
                CS Student @ PoliMi • Consigliere PoliEdro
              </p>
            </div>
          </div>
          <div className="navbar-links">
            <button
              onClick={() => scrollToSection("cv")}
              className={`nav-button ${activeSection === "cv" ? "active" : ""}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`nav-button ${
                activeSection === "projects" ? "active" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("quotes")}
              className={`nav-button ${
                activeSection === "quotes" ? "active" : ""
              }`}
            >
              Inspirations
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className={`nav-button ${
                activeSection === "contacts" ? "active" : ""
              }`}
            >
              Contacts
            </button>
          </div>
        </nav>
        <div className="hero-waves">
          <WaveAnimation className="wave-animation" />
        </div>
      </div>
    </div>
  );
};
