import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const ModuloMap = {
  'mod1': {
    submodulosRoutes: [
      { to: 'mod1/mod1.4', title: 'Tableaux' },
      { to: 'mod1/mod1.5', title: 'Resolução' },
      { to: 'mod1/mod1.6', title: 'DN' },
      { to: 'mod1/mod1.7', title: 'CS' },
    ],
    content: 'Tableaux é legal. '
  }
}

const Menu = function(props) {

  const { paths } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {
        paths.map(({ to, title}) => 
        <Link to={`${to}`}>
          {title}
        </Link>)
      }
    </div>
  )
}

const Content = function(props) {
  const { content } = props;
  return (
    <div>
      <p>{content}</p>
    </div>
  )
}

const Modulo = function(props) {

  const { params } = useRouteMatch();

  const { modulo } = params;

  if (!ModuloMap[modulo]) {
    return (
      <h1> Não tem esse modulo ainda. </h1>
    )
  }

  const { submodulosRoutes, content } = ModuloMap[modulo]

  return (
    <div>
      <Content content={content}/>
      {/* Menu(submodulosRoutes) */}
      <Menu paths={submodulosRoutes}/>
    </div>
  )
}

export default Modulo;
