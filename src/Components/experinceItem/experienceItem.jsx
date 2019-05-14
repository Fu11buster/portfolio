import React from 'react';

import './experienceItem.css';

const ExperienceItem = ({date, place, position}) => (
  <li className="experiense-item">
    <p className="experiense-item__date">{date}:</p>
    <p className="experiense-item__place">{place}</p>
    <p className="experiense-item__position">({position})</p>
  </li>
)

export default ExperienceItem;