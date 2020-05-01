import React from 'react';
import { ROUTE_ENDPOINTS } from '../../constants/endpoints';
import { Link } from "react-router-dom";

import {
  FaHome,
  FaClipboardList,
  FaWallet,
  FaNetworkWired,
  FaPiggyBank
 } from 'react-icons/fa';

class SideBar extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      is_opened: false
    }
  }

  toggleHover() {
  	this.setState({is_opened: !this.state.is_opened})
  }

  opened() {
    return (
      <div className="side-bar" onMouseLeave={() => this.toggleHover()}>
        <nav>

          <div className="sidebar-link-wrapper"  >
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.HOME}
              onClick={() => this.toggleHover()}
            >
             <div className="link-text">
              <FaHome className="link-icon" /> Home
             </div>
            </Link>
          </div>

          <div className="sidebar-link-wrapper">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.NODE_MANAGEMENT}
              onClick={() => this.toggleHover()}
            >
             <div className="link-text">
              <FaClipboardList className="link-icon"  /> Node Management
             </div>
            </Link>
          </div>

          <div className="sidebar-link-wrapper">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.NETWORKS}
              onClick={() => this.toggleHover()}
            >
             <div className="link-text">
               <FaNetworkWired className="link-icon" /> Network
             </div>
            </Link>
          </div>

          <div className="sidebar-link-wrapper">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.WALLET_TRACKING}
              onClick={() => this.toggleHover()}
            >
             <div className="link-text">
              <FaWallet className="link-icon"  /> Account Tracking
             </div>
            </Link>
          </div>

          <div className="sidebar-link-wrapper">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.DEFI}
              onClick={() => this.toggleHover()}
            >
             <div className="link-text">
              <FaPiggyBank className="link-icon" /> DeFi
             </div>
            </Link>
          </div>
        </nav>
      </div>
    )
  }

  closed() {
    return (
      <div className="side-bar-collapsed" onMouseEnter={() => this.toggleHover()} >
        <nav>

          <div className="sidebar-link-display">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.HOME}
            >
             <div className="link-text">
              <FaHome className="link-icon" />
             </div>
            </Link>
          </div>

          <div className="sidebar-link-display">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.NODE_MANAGEMENT}
            >
             <div className="link-text">
              <FaClipboardList className="link-icon"  />
             </div>
            </Link>
          </div>

          <div className="sidebar-link-display">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.NETWORKS}
            >
             <div className="link-text">
               <FaNetworkWired className="link-icon" />
             </div>
            </Link>
          </div>

          <div className="sidebar-link-display">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.WALLET_TRACKING}
            >
             <div className="link-text">
              <FaWallet className="link-icon"  />
             </div>
            </Link>
          </div>


          <div className="sidebar-link-display">
            <Link
              className="sidebar-link"
              to={ROUTE_ENDPOINTS.DEFI}
            >
             <div className="link-text">
              <FaPiggyBank className="link-icon" />
             </div>
            </Link>
          </div>
        </nav>
      </div>
    )
  }


  render() {
    return (
      this.state.is_opened? this.opened() : this.closed()
    )
  }

}


export default SideBar;
