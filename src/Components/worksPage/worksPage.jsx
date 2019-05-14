import React from 'react';
import Work from '../work/work';

import './worksPage.css';

const WORKS = [
  {
    title: 'Dobrota',
    description: '',
    link: 'http://mydobrota.ru/',
    bgImage: '',
    logo: '',
  },
  {
    title: 'Alcor',
    description: '',
    link: 'http://alcor-bg.com/',
    bgImage: '',
    logo: '',
  }
]

const WorksPage = () => (
  <section className="works">
    <h2>My latest works:</h2>
    {WORKS.map()}
  </section>
)

export default WorksPage;