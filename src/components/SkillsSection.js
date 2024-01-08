import React from "react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <p>Lanuguages and Frameworks i worked</p>
      <div className="skills">
        <FaReact className="skill" />
        <SiNextdotjs className="skill" />
        <SiRedux className="skill" />
        <SiTailwindcss className="skill" />
        <SiHtml5 className="skill" />
        <SiCss3 className="skill" />
        <SiExpress className="skill" />
        <FaGitAlt className="skill" />
        <FaNode className="skill" />
        <FaAws className="skill" />
      </div>
    </section>
  );
};

export default SkillsSection;
