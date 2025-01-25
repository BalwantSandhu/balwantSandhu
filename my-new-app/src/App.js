import React, { useState } from 'react';
import './App.css';

const AboutMe = () => (
  <section className="section" id="about">
    <h2>💫 About Me</h2>
    <p>
      👋 Hi, I'm <strong>Balwant Singh</strong>!<br />
      I'm a passionate Software Developer specializing in building innovative applications using cutting-edge technologies like AI, Cloud, and more!
    </p>
  </section>
);

const Projects = () => (
  <section className="section" id="projects">
    <h2>🏆 Projects</h2>
    <div className="projects">
      <div className="project-card">
        <h3>Fitness Tracker App</h3>
        <p>Boosted user engagement by 25% with workout tracking and goal-setting features.</p>
      </div>
      <div className="project-card">
        <h3>Home Finder</h3>
        <p>Reduced property search time with an interactive app featuring custom filters and mapping.</p>
      </div>
      <div className="project-card">
        <h3>AI-Powered Financial Assistant</h3>
        <p>Enabled users to save 20% monthly with tailored budgeting insights.</p>
      </div>
    </div>
  </section>
);

const TechStack = () => (
  <section className="section" id="tech">
    <h2>💻 Tech Stack</h2>
    <div className="tech-stack">
      <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
      <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />
      <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
      <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React.js" />
    </div>
  </section>
);

const Sidebar = ({ toggleTheme }) => (
  <div className="sidebar">
    <h2>Balwant Singh</h2>
    <nav>
      <ul>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#tech">Tech Stack</a></li>
      </ul>
    </nav>
    <button className="theme-toggle" onClick={toggleTheme}>🌙</button>
  </div>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`portfolio-container ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar toggleTheme={toggleTheme} />
      <div className="main-content">
        <AboutMe />
        <Projects />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
