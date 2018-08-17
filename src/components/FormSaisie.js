import React, { Component } from 'react';
import './../App.css';

class FormSaisie extends Component {
  render() {
    return (
      <form className="form-input">
      <input type="text" className="code-input" onChange={this.props.addCode} maxLength={Number(16)} />
      <input type="text" className="name-input" />
      <input type="text" className="date-input" />
      </form>
    );
  }
}

export default FormSaisie;
