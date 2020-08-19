import React, { useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, useRouteMatch } from 'react-router-dom';

import MenuModulos from './menu-modulos';
import Modulo from './modulo';

const Roteiros = function (props) {

  return (
    <div className=''>
      <Router basename="/roteiros">
        <Switch>
          <Route path='/' exact component={MenuModulos}/>
          <Route path='/:modulo' strict exact component={Modulo}/>
        </Switch>
      </Router>
    </div>
  )
}

export default Roteiros;
