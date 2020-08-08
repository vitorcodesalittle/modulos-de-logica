import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Module from './module';
import Notas from './notas';
import Cronograma from './cronograma';

export const appRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/roteiros',
    title: 'Roteiros',
    component: Module
  },
  {
    path: '/cronograma',
    title: 'Cronograma',
    component: Cronograma,
  },
  {
    path: '/notas',
    title: 'Notas',
    component: Notas,
  },
]

const Router = function (props) {

  return (
    <>
      <Switch>
      {
        appRoutes.map((routeProps) => <Route key={routeProps.path} {...routeProps}/>)
      }
      </Switch>
    </>
  )

}

export default Router;
