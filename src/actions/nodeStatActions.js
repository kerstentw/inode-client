import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';

export const PING_NODE_REQUEST = 'PING_NODE_REQUEST';

export function pingNode() {
  return function (dispatch) {
    axios.get(EXTERNAL_ENDPOINTS.PING)
      .then((resp) => {
        let stat = resp.data.node_stat;
        dispatch({
          type: PING_NODE_REQUEST,
          data: stat
        })
      })
  }
}
