import React from 'react';
import { WaveAnimation } from './WaveAnimation';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <nav className="hero-nav">
        <button 
          onClick={() => scrollToSection('projects')} 
          className="nav-button"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('quotes')} 
          className="nav-button"
        >
          Inspirations
        </button>
        <button 
          onClick={() => scrollToSection('contacts')} 
          className="nav-button"
        >
          Contacts
        </button>
      </nav>
      <div className="hero-overlay">
        <div className="hero-container">
          <h1 className="hero-title">Francesco Genovese</h1>
          <div className="hero-info">
            <ul>
              <li>👨‍🎓 Computer Science and Engineering Student @ PoliMi</li>
              <li>🏳️‍🌈 Consigliere of PoliEdro @ PoliMi</li>
              <li>📚 Trying to better understand the world</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hero-waves">
        <WaveAnimation className="wave-animation" />
      </div>
    </div>
  );
};
