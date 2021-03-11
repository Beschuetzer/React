import React from 'react';

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null,
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init({
        clientId: '1007756386269-6129c5cuip6l5o05v2sbf8tqaiqur4lq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        //Caching Auth Object Reference inside of GoogleAuth component
        this.auth = window.gapi.auth2.getAuthInstance();
        
        //Triggering Re-render
        this.setState({isSignedIn: this.auth.isSignedIn.get()})

        //Setting Up Event Listener for Auth flow completion
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (e) => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()});
  }

  onSignInClick = (e) => {
    this.auth.signIn();
  }

  onSignOutClick = (e) => {
    this.auth.signOut();

  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    }
    else if (this.state.isSignedIn) {
      return (
        <div onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon"></i>
          Sign Out 
        </div>
      );
    }
    else {
      return (
        <div onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon"></i>
          Sign In with Google 
        </div>
      );  
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

export default GoogleAuth;