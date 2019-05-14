import React from 'react';
import { ReactComponent as VkIcon } from '../../img/icons/vk.svg';
import { ReactComponent as TelegramIcon } from '../../img/icons/telegram.svg';
import { ReactComponent as GithubIcon } from '../../img/icons/github.svg';

import './footer.css';

const SOCIALS = [
  {
    title: 'vk',
    link: 'https://vk.com/id109242984',
    icon: <VkIcon className="social__icon" />,
  },
  {
    title: 'telegram',
    link: 'https://t.me/fu11buster',
    icon: <TelegramIcon className="social__icon" />,
  },
  {
    title: 'github',
    link: 'https://github.com/Fu11buster',
    icon: <GithubIcon className="social__icon" />,
  }
]

const Footer = () => (
  <footer>
    <div className="socials">
      {SOCIALS.map(link => (
        <a key={link.title} href={link.link} className="social__link" target="_blank" rel="noopener noreferrer">{link.icon}</a>
      ))}
    </div>
    <a href="mailto:igonnacode@gmail.com" className="mail-link">igonnacode@gmail.com</a>
    <p className="copyright">2019 &copy;</p>
  </footer>
)

export default Footer;