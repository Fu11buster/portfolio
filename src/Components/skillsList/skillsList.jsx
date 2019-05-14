import React from 'react';

import './skillsList.css';

const SkillsList = ({skillsArray}) => (
  <ul className="skillsList">
    {skillsArray.map( (skill, ind) => (
      <li key={ind}>{skill}</li>
    ))}
  </ul>
)

export default SkillsList;