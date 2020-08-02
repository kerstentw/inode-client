import React from 'react';
import { Link } from "react-router-dom";
import  NodeStat  from '../smart_components/NodeStat';

function placeHolderClass(_props) {
  return (
    <select>
      <option> 1 </option>
      <option> 2 </option>
      <option> 3 </option>
    </select>
  )
}

class Header extends React.Component {

  constructor(_props) {
    super();
    this.props = _props;
  }

  render() {
    return (
      <header className="header_container">
        <Link to="/" className="header_text">
          <img className="image_logo" src={this.props.logo}/>
          Internode
        </Link>
        <placeHolderClass />
        <NodeStat />
      </header>
    )
  }
}

export default Header;
