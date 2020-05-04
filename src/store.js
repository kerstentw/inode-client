import {
  createStore,
  applyMiddleware
} from "redux";

import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
  home: {
    news_data: [{data: {title: "No Articles Loaded", url:"/"}}],
    blocks: [{is_loading: true}],
    block_list_headers: ["number", "hash", "timestamp","transaction_number","reward"],
    proposers_summary: [{is_loading: true}]
  }
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
