import React from 'react';
import SkillsBlock from '../skillsBlock/skillsBlock';
import ExperienceBlock from '../experienceBlock/experienceBlock';

import './aboutInfo.css';

const AboutInfo = () => (
  <section className="about">
    <div className="photo"></div>
    <SkillsBlock />
    <ExperienceBlock />
  </section>
)

export default AboutInfo;