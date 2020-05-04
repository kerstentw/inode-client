import React from 'react';
import { connect } from 'react-redux';
import { pingNode } from '../../actions/nodeStatActions';
import { Link } from 'react-router-dom';

class NodeStat extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.pingNode();
  }

  choose_pic = (_node_stat) => {

    const beacons = {
      [true]: <div className="green-light"></div>,
      [false]: <div className="red-light"></div>,
      "loading" : <div className="yellow-light"></div>
    }

    return beacons[_node_stat];
  }

  render() {
    const { node_stat } = this.props;

    return (
      <span className="stat_container">
        <Link to="/node_management">
          <div className="stat_button">
              My Node Status:
              { this.choose_pic(node_stat) }
          </div>
        </Link>
      </span>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    pingNode: () => {
      dispatch(pingNode());
    }
  }
}

const mapStateToProps = state => {

  return {
    node_stat: state.node_stat.is_node_up
  }
}

const ConnNodeStat = connect(mapStateToProps, mapDispatchToProps)(NodeStat);

export default ConnNodeStat;
