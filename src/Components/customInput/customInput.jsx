import React, { Component } from 'react';

import './customInput.css';

export default class CustomInput extends Component {
  state = {
    valid: true,
  }

  static defaultProps = {
    type: 'text',
    placeholder: '',
    required: false,
    handler: () => (true),
    name: ''
  }

  checkValue = (event, handler) => {
    const val = event.target.value;
    const valid = handler(val);
    this.setState({
      valid
    })
  }

  clearState = () => {
    this.setState({
      valid: true
    })
  }

  render() {
    const { type, placeholder, required, handler, name } = this.props;
    const { valid } = this.state;

    return (
      <input className={!valid ? 'error' : null} type={type} placeholder={placeholder} name={name} required={required} onFocus={this.clearState} onBlur={(event) => { this.checkValue(event, handler) }} />
    )
  }
}