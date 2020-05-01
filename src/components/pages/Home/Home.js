import React from 'react';
import { connect } from 'react-redux';
import { grabNetworkNews } from '../../../actions/homeActions';


class Home extends React.Component {

  componentDidMount() {

  }

  render () {
    return (
      <h1> Home </h1>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const ConnectedHome = connect()(Home);

export default ConnectedHome;
