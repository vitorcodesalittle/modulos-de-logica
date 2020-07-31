import React from 'react';
import Link from './link';

/**
 * 
 * @param {Object} props
 * @param {{ href: String, title: String }[]} props.routes
 */
const NavBar = function(props) {
  const { routes } = props;

  return (
    <div className='Navbar'>
      {
        routes.map(({ to, title }, idx) => <Link key={idx} to={to}>{title}</Link>)
      }
    </div>
  )
}

export default NavBar;
