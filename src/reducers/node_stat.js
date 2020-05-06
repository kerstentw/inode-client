import {
  PING_NODE_REQUEST,
  NODE_INFO_REQUEST,
  REQUEST_ERROR
} from '../actions/nodeStatActions';

export default function node_stat(state={}, action) {
  switch (action.type) {

    case NODE_INFO_REQUEST:
      console.log("NODE STAT RED::: ", action)
      return Object.assign({}, state, {
        ...state,
        this_node_info: action.data
      });

    case PING_NODE_REQUEST:
        console.log("THING ",action)
        return Object.assign({}, state, {
          ...state,
          is_node_up: action.data
        });

    case REQUEST_ERROR:
        console.log("Request Error")

    default:
        return state;
  }
}
