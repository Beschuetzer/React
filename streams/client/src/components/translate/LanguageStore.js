import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language
        <i onClick={() => this.props.onLanguageChange('english')} className='flag us'></i>
        <i onClick={() => this.props.onLanguageChange('german')} className='flag de'></i>
      </div>
    );
  }
}

export default LanguageSelector;
