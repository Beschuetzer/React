import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/index';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.auth2.init({
        clientId: '1007756386269-6129c5cuip6l5o05v2sbf8tqaiqur4lq.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        //Caching Auth Object Reference inside of GoogleAuth component
        this.auth = window.gapi.auth2.getAuthInstance();
        
        this.onAuthChange(this.auth.isSignedIn.get());
        //Setting Up Event Listener for Auth flow completion
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  }

  onSignInClick = (e) => {
    this.auth.signIn();
  }

  onSignOutClick = (e) => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }
    else if (this.props.isSignedIn) {
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
    console.log('this.props =', this.props);
    return (
      <div>{this.renderAuthButton()}</div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId,
  }
}


export default connect(mapStateToProps,{ 
  signIn,
  signOut,
})(GoogleAuth);