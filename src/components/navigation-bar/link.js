import React from 'react';
import './styles/link.css';
import { Link } from 'react-router-dom';

export default function(props) {
  const { to, selected, children } = props;
  return (
    <Link className={'Link' + (selected ? ' selected' : '')} 
      to={to}>
      {children}
    </Link>
  )
}
