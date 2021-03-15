import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './LanguageStore';

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
        <LanguageSelector onLanguageChange={this.onLanguageChange}/>
        <ColorContext.Provider value='red'>
          <LanguageStore.Provider value={this.state.language}>
            <UserCreate/>
          </LanguageStore.Provider>
        </ColorContext.Provider>

        <LanguageStore.Provider value="german">
          <UserCreate/>
        </LanguageStore.Provider>

        
        <UserCreate/>

        
      </div>
    );
  }
}

export default Translate