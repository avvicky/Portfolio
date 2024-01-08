import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="portfolio-card">
      <a href={props.data.link}>
        <img className="portfolio-img" src={props.data.img} />
      </a>

      <p className="portfolio-text">{props.data.desc}</p>
      <p className="portfolio-text">Tech Stack</p>
      {props.data.techStack.map((stack) => (
        <p className="tech-stack">{stack}</p>
      ))}
    </div>
  );
};

export default PortfolioCard;
