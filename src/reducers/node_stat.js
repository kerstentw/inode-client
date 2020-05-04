import {
  PING_NODE_REQUEST
} from '../actions/nodeStatActions';

export default function node_stat(state={}, action) {
  switch (action.type) {
    case PING_NODE_REQUEST:
        console.log("THING ",action)
        return Object.assign({}, state, {
          ...state,
          is_node_up: action.data
        });
    default:
        return state;
  }
}
