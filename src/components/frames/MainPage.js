import React from 'react';
import Header from './Header';
import MainView from './MainView';
import SideBar from './SideBar';

class MainPage extends React.Component {
  constructor(_props) {
    super();
    this.props = _props;
  }

  render() {
    return (
      <div>
        <Header logo={this.props.logo}/>
        <SideBar className="col-md-3"/>
        <MainView className="col-md-9"/>
      </div>
    )
  }

}

export default MainPage;
