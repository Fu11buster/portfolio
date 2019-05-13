import React, { Component } from 'react';

import './mainPage.css';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      promoText: [
        'Hi, nice to met you on my web-site.',
        'I’m junior frontend developer. There you can find my works, and know about my skills.',
        'If you want your own website, contact me.',
        'More information below.',
      ],
      handledText: ['','','',''],
    }
  }

  componentDidMount() {
    this.changeText();
  }

  changeText() {
    let promoText = [...this.state.promoText];
    let handledText = [...this.state.handledText];
    let i = 0;
    while (promoText[i].length === 0 && i < promoText.length - 1) {
      i++;
    }
    setTimeout(() => {
      handledText[i] = handledText[i] + promoText[i].charAt(0);
      promoText[i] = promoText[i].slice(1);
      this.updateState(promoText, handledText);
      this.changeText();
    }, 50)
  }

  updateState(promoText, handledText) {
    this.setState({
      promoText,
      handledText
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