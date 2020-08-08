import React from 'react';
import './styles/link.css';

export default function(props) {
  const { to, selected, children } = props;
  return (
    <a className={'Link' + (selected ? ' selected' : '')} 
      href={to}>
      {children}
    </a>
  )
}
