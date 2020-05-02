import {
  GRAB_NETWORK_NEWS,
  REQUEST_ERROR
 } from '../actions/homeActions';

export default function home(state= {}, action) {
  switch (action.type) {
    case GRAB_NETWORK_NEWS:
      return {...state, news_data: action.data}
    case REQUEST_ERROR:
      console.log("Request Error")
      return state
    default:
      return state
  }
}
