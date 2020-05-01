import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';


export const GRAB_NETWORK_NEWS = 'GRAB_NETWORK_NEWS';
export const REQUEST_ERROR = 'REQUEST_ERROR';

export function grabNetworkNews() {
  return function (dispatch) {
     axios.get(EXTERNAL_ENDPOINTS.GET_NETWORK_NEWS)
     .then((resp)=>{
       alert(resp)
       dispatch(
         {
           type: GRAB_NETWORK_NEWS,
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
