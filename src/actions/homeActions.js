import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';


export const GRAB_NETWORK_NEWS = 'GRAB_NETWORK_NEWS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const NEWS_REQUEST = 'NEWS_REQUEST';

export const LATEST_BLOCKS_REQUEST = 'LATEST_BLOCKS_REQUEST';
export const GRAB_LATEST_BLOCKS = 'GRAB_LATEST_BLOCKS';

export const PROPOSERS_SUMMARY = 'PROPOSERS_SUMMARY';

export function grabNetworkNews() {
  return function (dispatch) {

    // Starts Loader
     dispatch({
       type: NEWS_REQUEST
     })

     // Makes Block Request
     axios.get(EXTERNAL_ENDPOINTS.GET_NETWORK_NEWS)
     .then((resp)=>{
       dispatch(
         {
           type: GRAB_NETWORK_NEWS,
           data: resp.data.data
         })
     }).catch((err) => {
       console.log(err);
       dispatch({
          type: REQUEST_ERROR,
          data: err
       })
     })
  }
}


export function grabLastBlocks() {
  return function (dispatch) {

    // Starts Loader

    axios.get(EXTERNAL_ENDPOINTS.GET_LATEST_BLOCKS + "?start=latest&num_blocks=15")
    .then((resp) => {
      dispatch({
        type: GRAB_LATEST_BLOCKS,
        data: resp.data
      });
    }).catch((err) => {
      dispatch({
         type: REQUEST_ERROR,
         data: err
      })
    })
  }
}

export function grabProposersSummary() {
  return function (dispatch) {
    axios.get(EXTERNAL_ENDPOINTS.PROPOSERS_SUMMARY)
    .then((resp)=>{
      dispatch({
        type: PROPOSERS_SUMMARY,
        data: resp.data
      })
    }).catch((err) => {
      dispatch({
         type: REQUEST_ERROR,
         data: err
      })
    })
  }
}
