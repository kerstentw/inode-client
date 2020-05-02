import {
  GRAB_NETWORK_NEWS,
  REQUEST_ERROR,
  NEWS_REQUEST
 } from '../actions/homeActions';

export default function home(state= {}, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return {...state, news_data: [{date: new Date().getTime, data: {is_loading: true, title: "Loading Articles", url: ""}}]}
    case GRAB_NETWORK_NEWS:
      return {...state, news_data: action.data}
    case REQUEST_ERROR:
      console.log("Request Error")
      return state
    default:
      return state
  }
}
