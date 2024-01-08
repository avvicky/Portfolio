import React from "react";

const AboutSection = () => {
  return (
    <section className="home" id="home">
      <h1 className="head-text">
        I'm an
        <br></br>
        <span className="head-text-highlight">FullStack Developer</span>
        <br></br>
        who turns your Wireframes to end-to-end Application
      </h1>
      <div className="social-icons">
        <a href="https://github.com/avvicky" target="__blank">
          <img className="social-icon" alt="socials" src="/assets/github.png" />
        </a>
        <a
          href="https://www.linkedin.com/in/vignesh-mernstack/"
          target="__blank"
        >
          <img
            className="social-icon"
            alt="socials"
            src="/assets/linkedin.png"
          />
        </a>
        <a href="https://twitter.com/Vignesh_armugam" target="__blank">
          <img
            className="social-icon"
            alt="socials"
            src="/assets/twitter.png"
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100086656013042"
          target="__blank"
        >
          <img
            className="social-icon"
            alt="socials"
            src="/assets/facebook.png"
          />
        </a>
      </div>
      <button
        onClick={() => document.getElementById("portfolio").scrollIntoView()}
        className="btn-portfolio"
      >
        Portfolio
      </button>
    </section>
  );
};

export default AboutSection;
