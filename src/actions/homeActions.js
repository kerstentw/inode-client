import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';


export const GRAB_NETWORK_NEWS = 'GRAB_NETWORK_NEWS';
export const REQUEST_ERROR = 'REQUEST_ERROR';
export const NEWS_REQUEST = 'NEWS_REQUEST';

export function grabNetworkNews() {
  return function (dispatch) {
     dispatch({
       type: NEWS_REQUEST
     })

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
