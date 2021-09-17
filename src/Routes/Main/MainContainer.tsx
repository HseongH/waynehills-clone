import React from 'react';
// router
import { RouteComponentProps } from 'react-router-dom';
// presenter
import MainPresenter from './MainPresenter';

type MainState = {
  isLogin: boolean;
};

class MainContainer extends React.Component<RouteComponentProps> {
  state: MainState = {
    isLogin: false,
  };

  handleGetVideoList = () => {
    const { isLogin } = this.state;

    if (!isLogin) return this.props.history.push('/login');
  };

  render() {
    return <MainPresenter getVideoList={this.handleGetVideoList} />;
  }
}

export default MainContainer;
