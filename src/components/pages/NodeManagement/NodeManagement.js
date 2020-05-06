import React from 'react';
import { connect } from 'react-redux';
import { getNodeInfo } from '../../../actions/nodeStatActions';

class NodeManagement extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getNodeInfo();
  }

  render() {
    const { node_info } = this.props

    console.log("NODE INFO", node_info);

    return (
      <div>
      <h1> Node Management </h1>
      { String(node_info )}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNodeInfo: () => {
      dispatch(getNodeInfo())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    node_info: state.node_stat.this_node_info
  }
}

//export default NodeManagement;
export default connect(mapStateToProps, mapDispatchToProps)(NodeManagement);
