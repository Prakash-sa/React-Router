import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {
  const navstyle={
    color:'white'
  };

  return (
    <nav>
    <h3>Logo</h3>
    <ui className="nav-links">
      <Link to='/about' style={navstyle}>
        <li>About</li>
      </Link>
      <Link to='/shop' style={navstyle}>
        <li>Shop</li>
      </Link>
    </ui>
    </nav>
  );
}

export default Nav;
