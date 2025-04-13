// import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-wrapper">
      <section className="hero">
        <h1>Harshali Lohar</h1>
        <p className="subtitle">Computer Engineering | Passionate Learner</p>
      </section>

      <section className="section">
        <h2>Introduction</h2>
        <p>
          Hi there! I’m a second-year Computer Engineering student who’s passionate about learning technology, design, and code. I enjoy experimenting with web development and love the challenge of solving real-world problems with tech. I'm constantly learning and excited about creating something new with the knowledge I have.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>B.Tech in CS (2023–2027) – R. C. Patel Institute of Technology</li>
          <li>12th HSC (2023) – Gram Vikas Vidyalaya</li>
        </ul>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" />
          <img src="https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png" alt="Java" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="SQL" />
        </div>
      </section>

      <section className="section">
        <h2>Soft Skills</h2>
        <ul>
          <li>Leadership</li>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Time Management</li>
          <li>Problem Solving</li>
        </ul>
      </section>

      <section className="section languages">
        <h2>Languages</h2>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Marathi</li>
        </ul>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p><strong>Email:</strong> harshalivikas27@gmail.com</p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/harshali-lohar-344465306" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/harshali-profile
          </a>
          </p>
          <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/HarshaliL-2005" target="_blank" rel="noopener noreferrer">github.com/in/harshali-profile
          </a>
        </p>
      </section>

      {/* <footer className="footer">
        <p>© 2025 Harshali. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
