import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import {
  DeFi,
  Networks,
  AccountTracking,
  NodeManagement,
  Home
} from '../pages';

import { ROUTE_ENDPOINTS } from '../../constants/endpoints';

class MainView extends React.Component {

  render() {
    return (
      <div className="main-view" >
        <Switch>
          <Route path={ROUTE_ENDPOINTS.DEFI}>
            <DeFi />
          </Route>
          <Route path={ROUTE_ENDPOINTS.NETWORKS}>
            <Networks />
          </Route>
          <Route path={ROUTE_ENDPOINTS.WALLET_TRACKING}>
            <AccountTracking />
          </Route>
          <Route path={ROUTE_ENDPOINTS.NODE_MANAGEMENT}>
            <NodeManagement />
          </Route>
          <Route path={ROUTE_ENDPOINTS.HOME}>
            <Home />
          </Route>
        </Switch>
      </div>
    )
  }

}


export default MainView;
