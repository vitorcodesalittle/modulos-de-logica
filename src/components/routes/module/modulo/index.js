import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router';
const Modulo = function(props) {

  const { params } = useRouteMatch();

  const { modulo } = params;

  return (
    <h1>Modulo + {modulo}</h1>
  )
}

export default Modulo;
