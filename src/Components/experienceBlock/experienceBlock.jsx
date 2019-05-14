import React from 'react';
import ExperienceItem from '../experinceItem/experienceItem';

import './experienceBlock.css';

const EXPERIENCE = [
  {
    date: '2015 - 2020',
    place: 'IRKUTSK NATIONAL RESEARCH TECHNICAL UNIVERSITY, Institute of High Technologies, Department of Computer Engineering',
    position: 'Student'
  },
  {
    date: 'september 2018 - december 2018',
    place: 'Company "Mir Saitov"',
    position: 'Intern'
  },
] 

const ExperienceBlock = () => (
  <section className="experience">
    <h2>Experience:</h2>
    <ul className="experience-list">
      {EXPERIENCE.map( (expItem, index) => (
        <ExperienceItem key={index} {...expItem} />
      ))}
    </ul>
  </section>
)

export default ExperienceBlock;
