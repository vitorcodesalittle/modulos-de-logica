import React from 'react';
import { Link } from 'react-router-dom';
import './styles/link.css';

export default function(props) {
  const { to, selected, children } = props;
  return (
    <Link className={'Link' + (selected ? ' selected' : '')} 
      to={to}>
      {children}
    </Link>
  )
}
