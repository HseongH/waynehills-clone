import React from 'react';
// present
import SignInPresent from './SignInPresenter';

type SignInState = {
  loginStatus: 0 | 1 | 2;
};

class SignInContainer extends React.Component {
  state: SignInState = {
    loginStatus: 0,
  };

  handleSignIn = () => {
    this.setState({ loginStatus: 2 });
  };

  render() {
    return (
      <SignInPresent
        signInStatus={this.state.loginStatus}
        signIn={this.handleSignIn}
      />
    );
  }
}

export default SignInContainer;
