import React, { Component } from 'react';

import './mainPage.css';

export default class MainPage extends Component {
  state = {
    promoText: [
      'Hi, nice to see you on my web-site.',
      'I’m junior frontend developer. Here you can find my works, and know about my skills.',
      'If you want your own website, contact me.',
      'More information below.',
    ],
    handledText: ['', '', '', ''],
  }

  componentDidMount() {
    this.intervalId = window.setInterval(this.changeText.bind(this), 50);
  }

  componentWillUnmount() {
    window.clearInterval(this.intervalId);
  }

  changeText() {
    let promoText = [...this.state.promoText];
    let handledText = [...this.state.handledText];
    let i = 0;
    while (i < promoText.length && promoText[i].length === 0) {
      i++;
    }
    if (i === promoText.length) {
      window.clearInterval(this.intervalId);
      return;
    }
    handledText[i] = handledText[i] + promoText[i].charAt(0);
    promoText[i] = promoText[i].slice(1);

    this.setState({
      promoText,
      handledText,
    })
  }

  render() {
    const { promoText, handledText } = this.state;
    return (
      <section className="promoText">
        {promoText.map((text, index) => (
          <p key={index}><span>{handledText[index].length ? handledText[index] : null}</span>{text}</p>
        ))}
      </section>
    )
  }
}