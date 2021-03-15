import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from './contexts/LanguageContext';


class Translate extends React.Component {
  state = {
    language: 'english',
  }
  onLanguageChange = (language) => {
    this.setState({language});
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i onClick={() => this.onLanguageChange('english')} className='flag us'></i>
          <i onClick={() => this.onLanguageChange('german')} className='flag de'></i>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>

        <LanguageContext.Provider value="german">
          <UserCreate/>
        </LanguageContext.Provider>

        
        <UserCreate/>
      </div>
    );
  }
}

export default Translate