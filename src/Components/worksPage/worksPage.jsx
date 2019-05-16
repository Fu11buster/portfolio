import React from 'react';
import Work from '../work/work';

import './worksPage.css';

import dobrotaBG from '../../img/dobrota-bg.jpg';
import dobrotaLogo from '../../img/dobrota.svg'
import alcorBG from '../../img/alcor-bg.jpg';
import alcorLogo from '../../img/alcor.svg';

const WORKS = [
  {
    title: 'Dobrota',
    description: 'This is a promotional website created for the Baikal Film Festival.',
    link: 'http://mydobrota.ru/',
    bgImage: dobrotaBG,
    logo: dobrotaLogo,
  },
  {
    title: 'Alcor',
    description: 'Landing page for steel processing companies.',
    link: 'http://alcor-bg.com/',
    bgImage: alcorBG,
    logo: alcorLogo,
  }
]

const WorksPage = () => (
  <section className="works">
    <h2>My latest works:</h2>
    <ul className="latest-works">
      {WORKS.map(work => (
        <Work {...work} key={work.title.toLowerCase()} />
      ))}
    </ul>
  </section>
)

export default WorksPage;