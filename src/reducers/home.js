import {
  GRAB_NETWORK_NEWS,
  REQUEST_ERROR,
  NEWS_REQUEST,
  LATEST_BLOCKS_REQUEST,
  GRAB_LATEST_BLOCKS,
  PROPOSERS_SUMMARY,
  TOKEN_SUMMARY
 } from '../actions/homeActions';

export default function home(state= {}, action) {
  switch (action.type) {
    case NEWS_REQUEST:
      return Object.assign({}, state, {
        ...state,
        news_data: [{
          date: new Date().getTime,
          data: {is_loading: true, title: "Loading Articles", url: ""}
        }]
      });
    case GRAB_NETWORK_NEWS:
      return Object.assign({}, state, {...state, news_data: action.data});
    case REQUEST_ERROR:
      console.log("Request Error")
      return state
    case LATEST_BLOCKS_REQUEST:
      return Object.assign({}, state, {...state, blocks: [{is_loading: true}]});
    case GRAB_LATEST_BLOCKS:
      return Object.assign({}, state, {...state, blocks: action.data.data})
    case PROPOSERS_SUMMARY:
      return Object.assign({}, state, {...state, proposers_summary: action.data.data })
    case TOKEN_SUMMARY:
      return Object.assign({}, state, {...state, token_summary: action.data.data})
    default:
      return state
  }
}
