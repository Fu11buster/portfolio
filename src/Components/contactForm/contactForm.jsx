import React, { Component } from 'react';
import CustomInput from '../customInput/customInput';

import './contactForm.css';

export default class ContactForm extends Component {
  state = {
    formvalid: false,
  }

  checkText = (text) => {
    return text.length > 3;
  }

  checkEmail = (email) => {
    const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailReg.test(email);
  }

  render() {
    return(
      <form action="/mail" method="POST" className="feedback__form">
        <CustomInput name="name" placeholder="Name" />
        <CustomInput type="email" name="email" placeholder="Email*" handler={this.checkEmail}/>
        <textarea name="text" placeholder="Text*"></textarea>
        <input type="submit" value="Send" disabled/>
      </form>
    )
  }
}