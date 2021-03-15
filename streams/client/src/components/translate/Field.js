import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  constructor() {
    super();
    this.state = {
      //initializing props to keep track of here
    };
    //you have to create a ref for each element you are planning to interact with in the DOM for each component
    this.imageRef = React.createRef();
  }
  render() {
    const text = this.context.language === 'english' ? 'Street' : 'Strasse';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input/>
      </div>
    );
  }
}

export default Field;