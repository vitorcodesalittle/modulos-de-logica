import React from 'react';
import Link from './link';
import { useLocation } from 'react-router-dom';
import './styles/navigation-bar.css';

/**
 * 
 * @param {Object} props
 * @param {{ to: String, title: String }[]} props.routes
 */
const NavBar = function(props) {
  const { routes } = props;
  const { pathname } = useLocation();

  return (
    <div className='Navbar'>
      {
        routes.map(({ to, title }, idx) => <Link key={idx} to={to} selected={pathname === to}>{title}</Link>)
      }
    </div>
  )
}

export default NavBar;
