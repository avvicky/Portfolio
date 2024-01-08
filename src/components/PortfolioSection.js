import React from "react";
import PortfolioCard from "./PortfolioCard";
import { cardsData } from "../constants";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio">
      {cardsData.map((cardData, index) => (
        <PortfolioCard key={cardData.name} data={cardData} />
      ))}
    </section>
  );
};

export default PortfolioSection;
