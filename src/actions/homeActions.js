import { EXTERNAL_ENDPOINTS } from '../constants/endpoints';
import axios from 'axios';

export const GRAB_NETWORK_NEWS = 'GRAB_NETWORK_NEWS';

export function grabNetworkNews() {

  let data = "";


  return {
    type: GRAB_NETWORK_NEWS
    data: data
  }
}
