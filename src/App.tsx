import React from 'react';
// router
import { Switch, Route } from 'react-router-dom';
// pages
import Main from './Routes/Main';
import SignIn from './Routes/SignIn';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/login" component={SignIn} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
