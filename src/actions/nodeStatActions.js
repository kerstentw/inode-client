import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';

export const PING_NODE_REQUEST = 'PING_NODE_REQUEST';
export const NODE_INFO_REQUEST = 'NODE_INFO_REQUEST';
export const REQUEST_ERROR = 'REQUEST_ERROR'

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

export function getNodeInfo() {
  return function (dispatch) {
    axios.get(EXTERNAL_ENDPOINTS.GET_NODE_INFO)
      .then((resp) => {
        let stat = resp.data;

        dispatch({
          type: NODE_INFO_REQUEST,
          data: stat
        })
      }).catch((err) => {
        console.log("NODE INFO REQ ERROR", err);
        dispatch({
          type: REQUEST_ERROR
        })
      })
  }
}
