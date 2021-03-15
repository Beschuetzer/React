import React from 'react';
import LanguageContext from './contexts/LanguageContext';

class LanguageSelector extends React.Component {
  renderLanguageSelector = ({onLanguageChange}) => {
    return (
      <div>
        Select a language
        <i onClick={() => onLanguageChange('english')} className='flag us'></i>
        <i onClick={() => onLanguageChange('german')} className='flag de'></i>
      </div>
    );
  }

  render() {
    return (
      <LanguageContext.Consumer>
        {
          (languageContext) => this.renderLanguageSelector(languageContext)
        }
      </LanguageContext.Consumer>
    );
  }
}

export default LanguageSelector;
