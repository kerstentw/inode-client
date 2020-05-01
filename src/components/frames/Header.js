import React from 'react';
import { Link } from "react-router-dom";

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
      </header>
    )
  }
}

export default Header;
