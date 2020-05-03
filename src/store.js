import {
  createStore,
  applyMiddleware
} from "redux";

import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {
  home: {
    news_data: [{data: {title: "No Articles Loaded", url:"/"}}],
    blocks: [{number: -1, hash: "No Blocks Loaded"}]
  }
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
