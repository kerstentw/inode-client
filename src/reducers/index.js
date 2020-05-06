import { combineReducers } from 'redux';
import home from './home';
import node_stat from './node_stat';


export default combineReducers({
  home,
  node_stat
})
