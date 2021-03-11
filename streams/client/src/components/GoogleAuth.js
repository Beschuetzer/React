import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init({
        clientId: '1007756386269-6129c5cuip6l5o05v2sbf8tqaiqur4lq.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  render() {
    return (
      <div>GoogleAuth</div>
    );
  }
}

export default GoogleAuth;